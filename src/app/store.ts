import { configureStore } from "@reduxjs/toolkit"
import LoginSlice from "./feauture/LoginSlice"

export const store = configureStore({
    reducer:{
        login:LoginSlice
    }
})