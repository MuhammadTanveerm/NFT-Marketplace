import { createSlice } from "@reduxjs/toolkit";
import { initialProducts } from "../Sampledata/Data";

import { Creaters } from "../Sampledata/CreaterProfile"

const initialState = {
    items:initialProducts,

    creaters:Creaters,
    // items: [
    //   { id: 1, name: 'Product 1', price: 100, imageUrl: '/images/product1.jpg' },
    //   { id: 2, name: 'Product 2', price: 150, imageUrl: '/images/product2.jpg' },
    //   // Add more products as needed
    // ],
  };

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

      // selectAllProducts(state, action) {
      //   state.items=state.products.items;
      // },
    },
  });
  export const TopCreator = (state) => state.products.creaters;
  export const selectAllProducts = (state) => state.products.items;
export default productsSlice.reducer;