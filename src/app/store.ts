import { configureStore } from "@reduxjs/toolkit"
import LoginSlice from "./feauture/LoginSlice"
import CartSlice from "./feauture/CartSlice"
import GlobalSlice from "./feauture/GlobalSlice"
import {persistStore,persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage"



const persistCartConfigue = { 
    key: 'cart',
    storage,
}

const persistCart = persistReducer(persistCartConfigue,CartSlice)

export const store = configureStore({
    reducer:{
        cart:persistCart,
        login:LoginSlice,
        global:GlobalSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

export const  persistor= persistStore(store);