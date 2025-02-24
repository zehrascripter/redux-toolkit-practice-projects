import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [] // Correct structure
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload); // Fix: Properly updating state
        },
        removeTodo: (state, action) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todoList = state.todoList.map((todo) =>
                todo.id === action.payload.id ? action.payload : todo
            );
        },
        toggleTodo: (state, action) => {
            state.todoList = state.todoList.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        }
    }
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
