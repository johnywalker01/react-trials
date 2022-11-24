import { Stack, Button, Typography } from '@mui/material';
import React, { useReducer, useState } from 'react';

type FcProps = {
  customProp?: any;
};

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
};
const reducer = (state: any, action: any) => {
  console.log({ state, action });

  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };

    default:
      break;
  }
};
export const Board1: React.FC<FcProps> = (props) => {
  // const [count, setCount] = useState( 0 );
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    // setCount( ( prevValue ) => prevValue + 1 );
    dispatch({ type: ACTIONS.INCREMENT });
  };
  const decrement = () => {
    // setCount( ( prevValue ) => prevValue - 1 );
    dispatch({ type: ACTIONS.DECREMENT });
  };
  return (
    <div>
      <h3>very simple one</h3>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={decrement}>
          -
        </Button>
        <Typography variant="button" display="block" gutterBottom>
          {state.count}
        </Typography>
        <Button variant="outlined" onClick={increment}>
          +
        </Button>
      </Stack>
    </div>
  );
};
