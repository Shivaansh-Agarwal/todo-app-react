import React from 'react';
import Container from '@mui/material/Container';

export const NoTodoAdded = () => {
  return (
    <Container sx={{ textAlign: 'center' }}>
      No Todo Added. Please add a new Todo.
    </Container>
  );
};
