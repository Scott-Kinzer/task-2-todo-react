import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { notesData } from '../../data';
import { Note } from '../../types/noteTypes';
import type { RootState } from '../store'

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: notesData,
}

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    }
  },
})

export const { addNote, removeNote } = notesSlice.actions;

export default notesSlice.reducer;