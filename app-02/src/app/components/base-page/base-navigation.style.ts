import { styled } from '@mui/system';
import Box from '@mui/material/Box';

export const NsBox = styled( Box )( {
  'display': 'flex',
  'flexWrap': 'wrap',
  'gap': 10,
  'justifyContent': 'center',
  'typography': 'body1',
  '& > :not(style) + :not(style)': {
    ml: 2,
  },
} );
export const BoxVerti = styled( Box )( {
  'display': 'flex',
  'flexDirection': 'column',
  'flexWrap': 'wrap',
  'gap': 10,
  'justifyContent': 'flex-start',
  'typography': 'body1',
  '& > :not(style) + :not(style)': {
    ml: 2,
  },
} );
