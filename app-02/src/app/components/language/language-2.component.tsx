import { Divider, Stack } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import i18n from 'src/i18n/i18n';
import { getLangKey } from 'app/shared/common';

type FcProps = {
  customProp?: any;
};

export const Language2: React.FC<FcProps> = (props) => {
  const { t } = useTranslation();
  const [lang, setLang] = React.useState('en');

  const handleLanguageChange = (newLanguageKey: string) => {
    i18n.changeLanguage(newLanguageKey);
  };

  const handleChange = (event: SelectChangeEvent) => {
    const language = event.target.value;
    setLang(language);
    handleLanguageChange(language);
  };

  return (
    <div>
      <h3>a little advanced one</h3>
      <FormControl variant="outlined" size="small" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={lang}
          onChange={handleChange}
          label="Language"
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'ja'}>Japanese</MenuItem>
          <MenuItem value={'hin'}>Hindi</MenuItem>
          <MenuItem value={'ger'}>German</MenuItem>
          <MenuItem value={'fre'}>French</MenuItem>
        </Select>
      </FormControl>
      <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
        {getLangKey().map((lKey, index) => (
          <span key={index + '--K'}>{t(lKey)}</span>
        ))}
      </Stack>
    </div>
  );
};
