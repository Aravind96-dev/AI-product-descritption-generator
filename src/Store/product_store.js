import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const generateDescription = () => {
    createAsyncThunk ('product/generateDescritpion', 
        async (response) => {
            return response;
        }
    );

    const productSlice = createSlice (
      {
        name : 'product',
        initialState = {
          loading: false,
          result: ''
        },

        reducers: {},

        extraReducers: (builder) => {
          builder
          .addCase (generateDescription.pending, 
            (state) => {
              state.loading = true;
            }
          )
          .addCase(
            generateDescription.fulfilled,
    
            (state, action) => {
    
              state.loading = false;
    
              state.result =
                JSON.stringify(
                  action.payload,
                  null,
                  2
                );
            }
          )
    
          .addCase(
            generateDescription.rejected,
    
            (state) => {
              state.loading = false;
            }
          );
        }
        
      }
    )

    export default productSlice;
}