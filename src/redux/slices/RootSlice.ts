import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        vin: "VIN",
        year: "Year",
        make: "Make",
        model: "Model",
        color: "Color",
    },
    reducers: {
        chooseVin: (state, action) => { state.vin = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseColor: (state, action) => { state.color = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseVin, chooseYear, chooseMake, chooseModel, chooseColor} = rootSlice.actions