import { createSlice } from "@reduxjs/toolkit";



const initialState = {

    contacts: {
		items: []
}}



const slice = createSlice({
    name : 'filter',
    initialState,
    reducers:{
        changeFilter:(state, action) => {
            state.name = action.payload;
        }
    },
})

export const filtersReducer = slice.reducer;
export const {changeFilter} = slice.actions;
