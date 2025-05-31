import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   name: '',
   address: '',
   eventDate: '',
   numberOfPeople: ''
}

const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {
      setFormData: (state, action) => {
         return { ...state, ...action.payload }
      }
   }
})

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;