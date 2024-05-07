
 import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { RootState } from "../store";
// import { AddItemToShoppingCart } from "../../utils";

interface CartState {
   CartProducts: string[];
}

const initialState: CartState = {
   CartProducts: []
}

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addTocart: (state, action: PayloadAction<string>) => {
         // state.CartProducts = 
         // AddItemToShoppingCart(action.payload,state.CartProducts)
          state.CartProducts = [...state.CartProducts, action.payload]
         
      }
   }
})

export const { addTocart } = cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;
export default cartSlice.reducer;


