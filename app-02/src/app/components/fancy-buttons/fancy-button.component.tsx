import { Box, Button, Fade } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import { green } from '@mui/material/colors';
import React, { useState } from 'react';

type FcProps = {
  customProp?: any;
  label: string,
  variant?: 'text' | 'outlined' | 'contained',
};

export const FancyButton: React.FC<FcProps> = ( props ) => {
  const [loading, setLoading] = React.useState( false );

  const handleButtonClick = () => {
    setLoading( ( prev ) => !prev );
    setTimeout( () => {
      setLoading( ( prev ) => !prev );
    }, 2000 );
  }

  const getVariant = () => {
    return ( props.variant ) ? props.variant : 'contained';
  }

  return (
    <>
      <Button
        variant={ getVariant() }
        disabled={ loading }
        onClick={ handleButtonClick }
        sx={ { m: 1, position: 'relative' } }
      >
        { props.label }
        { loading && (
          <LinearProgress
            color="primary"
            sx={ {
              position: 'absolute',
              width: '100%',
              bottom: '2px',
              left: '0'
            } }
          />
        ) }
      </Button>
    </>
  );
};
