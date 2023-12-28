import { configureStore } from "@reduxjs/toolkit";
import slideReducer from '../features/slice/sliderSlice';

export const store=configureStore({
    reducer:{
        slider:slideReducer
    }
})