import { Button, Stack } from '@mui/material';
import { ACTIONS, dispatchType } from 'app/datatypes/project-types';
import React from 'react';

type TodoProps = {
  todo: any;
  dispatch?: React.Dispatch<dispatchType>;
};
export const Todo: React.FC<TodoProps> = (props) => {
  return (
    <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={1}>
      <span style={{ color: props.todo.complete ? 'green' : 'red' }}>{props.todo.name}</span>
      <Button
        size="small"
        variant="contained"
        onClick={() => props.dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: props.todo.id } })}
      >
        Toggle
      </Button>
      <Button
        size="small"
        variant="contained"
        onClick={() => props.dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: props.todo.id } })}
      >
        Delete
      </Button>
    </Stack>
  );
};
