import React, { useState } from 'react';
import { ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo, updateTodo } from '../redux/features/todos/todosSlice';
import { useDispatch } from 'react-redux';

export const TodosListItem = ({ todoId, todoText }) => {
  const [isEditable, setIsEditable] = useState(false);
  const [inputText, setInputText] = useState(todoText);
  const dispatch = useDispatch();
  function handleOnClickDelete(id) {
    dispatch(
      deleteTodo({
        id: id,
      })
    );
  }
  function handleOnDoubeClickEdit(id) {
    setIsEditable(true);
  }
  function onTextChange(e) {
    setInputText(e.target.value);
  }
  function saveInputText(id, text) {
    dispatch(
      updateTodo({
        id: id,
        text: text,
      })
    );
    setIsEditable(false);
    setInputText('');
  }
  return (
    <ListItem
      sx={{
        border: '1px solid gray',
        borderRadius: '5px',
        marginBottom: '0.4rem',
      }}
      onClick={(e) => {
        if (e.detail === 2) {
          handleOnDoubeClickEdit(todoId);
        }
      }}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            handleOnClickDelete(todoId);
          }}
        >
          <DeleteIcon sx={{ color: '#e53935' }} />
        </IconButton>
      }
    >
      {isEditable ? (
        <TextField
          id="filled-basic"
          label="Update Todo Text"
          variant="filled"
          value={inputText}
          onChange={onTextChange}
          fullWidth={true}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              saveInputText(todoId, inputText);
            }
          }}
          size="small"
        />
      ) : (
        <ListItemText>{todoText}</ListItemText>
      )}
    </ListItem>
  );
};
