import { notesData } from 'data';

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Note } from 'types/noteTypes';

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: notesData,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    toggleArchiveNote: (state, action: PayloadAction<string>) => {
      const note = state.notes.find(note => note.id === action.payload);

      if (note) {
        note.isArchive = !note?.isArchive;
      }
    },
    editNote: (state, action: PayloadAction<Note>) => {
      state.notes = state.notes.map(noteItemObject => {
        if (action.payload.id === noteItemObject.id) {
          return {
            ...noteItemObject,
            ...action.payload,
          };
        }

        return noteItemObject;
      });
    },
  },
});

export const { addNote, removeNote, toggleArchiveNote, editNote } =
  notesSlice.actions;

export default notesSlice.reducer;
