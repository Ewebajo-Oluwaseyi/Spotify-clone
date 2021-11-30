import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './data.slice'
import audioSlice from './audioSlice';

const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        audio: audioSlice.reducer
    }
})

export default store;