import { FormControlLabel, Switch } from '@mui/material';
import React from 'react';
import { defaultVars, FancyLinearProgress, successVars } from './fancy-bar.style';

type FcProps = {
  customProp?: any;
};

export const DynamicCSSVariables: React.FC<FcProps> = ( props ) => {
  const [progress, setProgress] = React.useState( 0 );
  const [styleVars, setStyleVars] = React.useState<React.CSSProperties>( defaultVars );

  const handleChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    setStyleVars( event.target.checked ? successVars : defaultVars );
  }

  React.useEffect( () => {
    const timer = setInterval( () => {
      setProgress( ( oldProgress ) => {
        if ( oldProgress === 100 ) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min( oldProgress + diff, 100 );
      } );
    }, 600 );

    return () => {
      clearInterval( timer );
    };
  }, [] );

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={ styleVars === successVars }
            onChange={ handleChange }
            color="primary"
            value="dynamic-class-name"
          />
        }
        label="Success"
      />
      <FancyLinearProgress style={ styleVars } variant="determinate" value={ progress } />
    </>
  );
};
