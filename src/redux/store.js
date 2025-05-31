import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../features/form/formSlice'
import menuReducer from '../features/menu/menuSlice';

export const store = configureStore({
   reducer: {
      form: formReducer,
      menu: menuReducer,
   }
})