import React from 'react';

import { Box } from '@mui/material';
import Fade from '@mui/material/Fade';
import { keyframes } from '@mui/system';

type FcProps = {
  show: boolean;
  message?: string;
};

const loadMeAnim = keyframes`

from {
  transform: translateX(-90%);
}

to {
  transform: translateX(90%);
}

`;

export const ProgressIndicator: React.FC<FcProps> = (props) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <Fade in={show}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          font: 'normal normal bold 10px/16px Roboto, sans-serif',
          color: '#a0abb1',
          gap: '4px',
          overflow: 'hidden',
          width: '80px',
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          {props.message ? props.message : 'Loading '}
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '2px',
            background: (theme) => theme.palette.primary.main,
            animation: !show ? 'none' : `${loadMeAnim} 1200ms ease-in-out infinite alternate`,
          }}
        ></Box>
      </Box>
    </Fade>
  );
};
