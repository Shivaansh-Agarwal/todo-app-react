import React from 'react';
import { Box, List } from '@mui/material';
import { TodosListItem } from './TodosListItem';

export const TodosList = ({ todosList }) => {
  return (
    <Box>
      <List>
        {todosList.map((todo) => {
          const { id, text } = todo;
          return <TodosListItem key={id} todoId={id} todoText={text} />;
        })}
      </List>
    </Box>
  );
};
