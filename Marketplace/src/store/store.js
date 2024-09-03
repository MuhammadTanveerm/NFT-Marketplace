import { configureStore } from '@reduxjs/toolkit';

import productsSlice from '../feactures/productsSlice';
 
export const store= configureStore({
    reducer:{
products: productsSlice
    },
})