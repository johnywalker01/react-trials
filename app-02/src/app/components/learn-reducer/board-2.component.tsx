import { Box, Button, Divider, Stack, TextField } from '@mui/material';
import { ACTIONS, dispatchType, IDispatch } from 'app/datatypes/project-types';
import React, { useReducer, useState } from 'react';
import { Todo } from './todo.component';

type FcProps = {
  customProp?: any;
};

export const Board2: React.FC<FcProps> = (props) => {
  const reducer = (todos: IDispatch[], action: dispatchType) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todos, newTodo(action.payload.name)];
      case ACTIONS.TOGGLE_TODO:
        return todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, complete: !todo.complete };
          }
          return todo;
        });
      case ACTIONS.DELETE_TODO:
        return todos.filter((todo) => todo.id !== action.payload.id);

      default:
        break;
    }
  };

  const newTodo = (name: string) => {
    return { id: Date.now(), name, complete: false };
  };

  const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(reducer, []);

  const handleName = (e: any) => {
    setName(e.target.value);
  };
  const handleSubmit = (e: any) => {
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
    setName('');
  };

  return (
    <div>
      <h3>a little bigger one</h3>
      <Box>
        <Stack direction="row" spacing={2} component="form" autoComplete="false" divider={<Divider orientation="vertical" flexItem />}>
          <TextField variant="outlined" label="Name" value={name} onChange={handleName} />
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
        <Stack direction="column" spacing={2} sx={{ width: 300, padding: 2 }}>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </Stack>
      </Box>
    </div>
  );
};
