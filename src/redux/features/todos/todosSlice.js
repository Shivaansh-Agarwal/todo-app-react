import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todosList: JSON.parse(localStorage.getItem('todos')) ?? [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        text: action.payload.text,
      };
      state.todosList.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(state.todosList));
    },
    updateTodo: (state, action) => {
      state.todosList.forEach((todo, index) => {
        if (todo.id === action.payload.id) {
          state.todosList[index].text = action.payload.text;
        }
      });
      localStorage.setItem('todos', JSON.stringify(state.todosList));
    },
    deleteTodo: (state, action) => {
      state.todosList = state.todosList.filter(
        (todo) => todo.id !== action.payload.id
      );
      localStorage.setItem('todos', JSON.stringify(state.todosList));
    },
  },
});

export const { createTodo, updateTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
