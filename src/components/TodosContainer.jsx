import React from 'react';
import { Container, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { TodoInput } from './TodoInput';
import { NoTodoAdded } from './NoTodoAdded';
import { TodosList } from './TodosList';

export const TodosContainer = () => {
  let todosList = useSelector((state) => state.todos.todosList);
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h3" sx={{ marginBottom: '2rem' }}>
        Todo App
      </Typography>
      <TodoInput />
      {todosList.length !== 0 ? (
        <TodosList todosList={todosList} />
      ) : (
        <NoTodoAdded />
      )}
    </Container>
  );
};
