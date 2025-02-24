import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter-reducer";
import todoReducer from "./reducers/todo";
import notesReducer from "./reducers/notesSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo : todoReducer,
        notes : notesReducer
    },
});