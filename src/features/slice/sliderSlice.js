import { createSlice } from "@reduxjs/toolkit";
import { sliderData } from "../../assets/data/dummyData";

export const sliderSlice=createSlice({
    name:'slider',
    initialState:{
        value:0,
        length:sliderData.length-1,
    },
    reducers:{
        nextSlide:(state,action)=>{
            state.value=action.payload>state.length?0:action.payload;
        },
        prevSlide:(state,action)=>{
            state.value=action.payload<0?state.length:action.payload;
        },
        dotSlice:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const{nextSlide,prevSlide,dotSlice}=sliderSlice.actions;
export default sliderSlice.reducer;