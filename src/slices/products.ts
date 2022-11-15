import { createSlice } from '@reduxjs/toolkit'

const initialState: any = {
    products: [
        { id: 1, name: 'Products 1' }
    ]
}

export const productSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products = state.products.concat(action.payload)
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((p: any) => p.id !== action.payload)
        },
        updateProduct: (state, action) => {

        }
    }
})

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct, updateProduct } = productSlice.actions

export default productSlice.reducer