import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: "data",
    initialState: {
        apiData: [],
        loadingState: true
    },
    reducers: {
        storeData(state, action) {
            state.apiData = action.payload;
        },
        setLoading(state, action) {
            state.loadingState = action.payload;
        }
    }
});

export const dataActions = dataSlice.actions;

export default dataSlice;