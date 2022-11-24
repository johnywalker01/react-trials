import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { top100Films } from 'app/shared/common';
import { FilmOptionType } from 'app/datatypes/project-types';
import { isEmpty } from 'lodash';
import React, { useEffect } from 'react';
import { Boty } from '../custom-mui/custom-mui.component';

type FcProps = {
  label: string;
  value: string;

  onDataChange?: (data: FilmOptionType) => void;
};

export const ComboBox: React.FC<FcProps> = (props) => {
  const [value, setValue] = React.useState<FilmOptionType | null>(null);
  const [inputValue, setInputValue] = React.useState('');

  useEffect(() => {
    if (isEmpty(props.value)) return;

    setValue(getFilmOptionType(props.value));
  }, [props.value]);

  const getFilmOptionType = (title: string): FilmOptionType | null => {
    let filt = top100Films.filter((film) => film.title == title);
    return filt.length ? filt[0] : null;
  };

  const handleChange = (event: any, newValue: FilmOptionType | null) => {
    setValue(newValue);

    props.onDataChange && props.onDataChange(value);
  };

  const handleTextChange = (event: any, newInputValue: string | null) => {
    setInputValue(newInputValue);
  };
  return (
    <Boty
      value={value}
      options={top100Films}
      getOptionLabel={(option: FilmOptionType) => option.title}
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={handleTextChange}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
    // <Autocomplete
    //   value={value}
    //   options={top100Films}
    //   getOptionLabel={(option: FilmOptionType) => option.title}
    //   onChange={handleChange}
    //   inputValue={inputValue}
    //   onInputChange={handleTextChange}
    //   sx={{ width: 300, color: 'white', backgroundColor: 'black', border: '1px solid white' }}
    //   renderInput={(params) => <TextField {...params} label={props.label} />}
    // />
  );
};
