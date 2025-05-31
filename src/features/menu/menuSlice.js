import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
   name: 'menu',
   initialState: {
      selectedItems: []
   },
   reducers: {
      toggleItem: (state, action) => {
         const itemId = action.payload;

         // if item already selected, remove it  
         if (state.selectedItems.includes(itemId)) {
            state.selectedItems = state.selectedItems.filter((id) => id !== itemId)
         } else {
            // otherwise, add it
            state.selectedItems.push(itemId)
         }
      },
      clearMenu: (state) => {
         state.selectedItems = []
      }
   }
})

export const { toggleItem, clearMenu } = menuSlice.actions;

export default menuSlice.reducer;