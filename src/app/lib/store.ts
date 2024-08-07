import { configureStore } from '@reduxjs/toolkit';
import { RootReducer } from "./rootReducer";


const store = configureStore({ reducer: RootReducer });



export default store;
