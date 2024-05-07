import { createSlice } from "@reduxjs/toolkit"; 
import { RootState } from "../store";

const initialState = {
    isOpenCartDrawer:false,
    onOpenCartDrawer:false,
    onCloseCartDrawer:false
 }

 const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
     
        isOpenCartDrawerAction:(state) =>{
            state.isOpenCarontDrawer = !state.isOpenCartDrawer;
        },
        onOpenCartDrawerAction:(state) =>{
            state.onOpenCartDrawer = true;
            state.isOpenCartDrawer =true
        },
        onCloseCartDrawerAction:(state) =>{
            state.onCloseCartDrawer = false;
            state.isOpenCartDrawer =false;
        }

    }
 })
 
 export const { isOpenCartDrawerAction,onCloseCartDrawerAction,onOpenCartDrawerAction } = globalSlice.actions;
 export const selectGlobal = (state: RootState) => state.global;
 export default globalSlice.reducer;
 