import { Box } from '@mui/material';
import React from 'react';
import { DynamicCSSVariables } from './custom-slider/fancy-bar.component';
import { FancyButton } from './fancy-buttons/fancy-button.component';

type FcProps = {
  customProp?: any;
};

export const CustomMuiControls: React.FC<FcProps> = ( props ) => {


  return (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
      <div>
        <h1>Custom MUI components</h1>
      </div>

      <Box sx={ { m: 1 } }>
        <FancyButton label='Accept Terms' />
        <FancyButton label='Accept Terms' variant='outlined' />
        <FancyButton label='Accept Terms' variant='text' />

      </Box>
      <Box sx={ { m: 1 } }>
        <DynamicCSSVariables />
      </Box>

    </div>
  );
};
