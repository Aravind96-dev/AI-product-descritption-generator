import { configureStore } from '@reduxjs/toolkit';

import productReducer from './product_store';

export const store = configureStore (
    {
        reducer: {
            product: productReducer
        }
    }
)
