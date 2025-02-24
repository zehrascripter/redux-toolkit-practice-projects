import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [], // Notes ka initial state
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload); // Naya note add karega
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNote: (state, action) => {
      const { id, title, content } = action.payload;
      const note = state.notes.find((n) => n.id === id);
      if (note) {
        note.title = title;
        note.content = content;
      }
    },
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;
const notesReducer = notesSlice.reducer;
export default notesReducer;
