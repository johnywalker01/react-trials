import React, { useState } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

import { ProgressIndicator } from './progress/progress-indicator.component';

type FcProps = {
  customProp?: any;
};

const valuetext = (value: number) => {
  return `${value} ms`;
};

/**
 *
 * @param props
 * @returns
 */
export const Fancy3: React.FC<FcProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = React.useState<number>(3000);

  const handleBegin = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, value);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h1>Loading Indicators</h1>
      </div>

      <Stack spacing={1} direction="row">
        <Slider
          aria-label="Temperature"
          value={value}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={100}
          marks
          min={500}
          max={5000}
          onChange={handleChange}
        />
        <Button variant="outlined" size="small" onClick={handleBegin} disabled={isLoading}>
          Begin
        </Button>
      </Stack>
      <div>
        <ProgressIndicator show={isLoading} />
      </div>
    </div>
  );
};
