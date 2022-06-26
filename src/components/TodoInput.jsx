import React, { useState } from 'react';
import { Box, Button, TextField, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { createTodo } from '../redux/features/todos/todosSlice';

export const TodoInput = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  function handleChange(e) {
    setInputText(e.target.value);
  }

  function handleOnClick(e) {
    if (inputText) {
      dispatch(createTodo({ text: inputText }));
      setInputText('');
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '6rem',
        marginBottom: '2rem',
      }}
    >
      <TextField
        id="outlined-basic"
        label="Enter Todo"
        variant="outlined"
        fullWidth={true}
        value={inputText}
        onChange={handleChange}
        size="small"
        InputProps={{
          endAdornment: (
            <IconButton
              edge="end"
              aria-label="clear"
              onClick={() => {
                setInputText('');
              }}
            >
              <CloseIcon />
            </IconButton>
          ),
        }}
      />
      <Button variant="contained" onClick={handleOnClick}>
        Add Todo
      </Button>
    </Box>
  );
};
