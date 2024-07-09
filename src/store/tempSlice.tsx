import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    temp_c: '0'
}

export const temperSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setTemperature: (state, action) => {
            state.temp_c = action.payload

        },
    },
})

// Action creators are generated for each case reducer function
export const { setTemperature } = temperSlice.actions

export default temperSlice.reducer