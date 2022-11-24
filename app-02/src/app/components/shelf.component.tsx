import { Button, TextField } from '@mui/material';
import base64 from 'base-64';
import React, { useState } from 'react';
import { ComboBox } from './combo-box/combo-box.component';

type FcProps = {
  customProp?: any;
};
export const Shelf: React.FC<FcProps> = (props) => {
  const rowsNeeded = 6;
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [inputEncoded, setInputEncoded] = useState('');
  const [inputDecoded, setInputDecoded] = useState('');
  const [nameVal, setNameVal] = useState('');
  const [helperTextName, setHelperTextName] = useState('');

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    let strValue = event.target.value;

    setHelperTextName(performErrorCheck(strValue));

    setNameVal(strValue);
  };
  const handleInput1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput1(event.target.value);
  };

  const handleInput2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput2(event.target.value);
  };

  const handleEncode = () => {
    setInputEncoded(base64.encode(input1));
  };

  const handleDecode = () => {
    setInputDecoded(base64.decode(input2));
  };

  const performErrorCheck = (strValue: string) => {
    const regXstartsWithNumber = /^\d/;
    const regXcontainsSpecialChars = /[ `!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/;
    return regXstartsWithNumber.test(strValue)
      ? 'function name should not start with a Digit'
      : regXcontainsSpecialChars.test(strValue)
      ? 'function name can only contain _ as special character'
      : '';
  };

  return (
    <div>
      <h1>Shelf Page</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt eius facilis quae a at, laudantium similique illo asperiores,
        inventore repudiandae, in quia! Officiis nesciunt cum, praesentium velit adipisci accusamus cumque!
      </p>

      <div style={{ padding: '10px' }}>
        <TextField label="Input" multiline rows={rowsNeeded} value={input1} onChange={handleInput1} sx={{ minWidth: '300px' }} />
        <Button variant="contained" onClick={handleEncode}>
          Encode
        </Button>
        <TextField label="Encoded Data" multiline rows={rowsNeeded} value={inputEncoded} sx={{ minWidth: '300px' }} />
      </div>

      <div style={{ padding: '10px' }}>
        <TextField label="Encoded Data" multiline rows={rowsNeeded} value={input2} onChange={handleInput2} sx={{ minWidth: '300px' }} />
        <Button variant="contained" onClick={handleDecode}>
          Decode
        </Button>
        <TextField label="Decoded Data" multiline rows={rowsNeeded} value={inputDecoded} sx={{ minWidth: '300px' }} />
      </div>

      <div style={{ padding: '10px' }}>
        <ComboBox label="Top 100 Films" value="Matrix" />
      </div>
      <div style={{ padding: '10px' }}>
        <TextField
          label="Enter Name"
          value={nameVal}
          onChange={onChangeName}
          error={helperTextName ? true : false}
          helperText={helperTextName}
          sx={{ minWidth: '300px' }}
        />
      </div>
    </div>
  );
};
