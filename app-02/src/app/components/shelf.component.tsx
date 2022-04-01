import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import base64 from 'base-64';

type FcProps = {
  customProp?: any;
};

export const Shelf: React.FC<FcProps> = ( props ) => {
  const [input1, setInput1] = useState( '' );
  const [input2, setInput2] = useState( '' );
  const [inputEncoded, setInputEncoded] = useState( '' );
  const [inputDecoded, setInputDecoded] = useState( '' );

  const handleInput1 = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setInput1( event.target.value );
  }

  const handleInput2 = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setInput2( event.target.value );
  }

  const handleEncode = () => {
    setInputEncoded( base64.encode( input1 ) );
  }

  const handleDecode = () => {
    setInputDecoded( base64.decode( input2 ) );
  }

  return (
    <div>
      <h1>Shelf Page</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nesciunt eius facilis quae a at, laudantium similique illo asperiores,
        inventore repudiandae, in quia! Officiis nesciunt cum,
        praesentium velit adipisci accusamus cumque!
      </p>
      <Stack direction="column" spacing={ 2 } component="form" autoComplete='false' >
        <TextField variant='outlined' label="Input" value={ input1 } onChange={ handleInput1 } />
        <Button variant='contained' onClick={ handleEncode }>Encode</Button>
        <Typography variant="h6" display="block" gutterBottom>
          { inputEncoded }
        </Typography>
      </Stack>
      <Stack direction="column" spacing={ 2 } component="form" autoComplete='false' >
        <TextField variant='outlined' label="Name" value={ input2 } onChange={ handleInput2 } />
        <Button variant='contained' onClick={ handleDecode }>Decode</Button>
        <Typography variant="h6" display="block" gutterBottom>
          { inputDecoded }
        </Typography>
      </Stack>
    </div>
  );
};

