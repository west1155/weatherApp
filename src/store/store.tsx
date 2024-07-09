//store.jsx
import { configureStore } from '@reduxjs/toolkit'
//Importing the reducer from countSlice
import temperReducer from "./tempSlice"

export const store = configureStore({
    reducer: {
        temper: temperReducer,
    },
})