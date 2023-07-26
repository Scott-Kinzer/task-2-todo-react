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
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default notesSlice.reducer