import { Box, Button, Fade } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { green } from '@mui/material/colors';
import React, { useState } from 'react';
import { FancyButton } from './fancy-buttons/fancy-button.component';

type FcProps = {
  customProp?: any;
};

export const ButtonsComp: React.FC<FcProps> = ( props ) => {


  return (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
      <div>
        <h1>Fancy Buttons</h1>
      </div>

      <Box sx={ { m: 1 } }>
        <FancyButton label='Accept Terms' />
        <FancyButton label='Accept Terms' variant='outlined' />
        <FancyButton label='Accept Terms' variant='text' />

      </Box>

    </div>
  );
};
