import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    productData: [],
    userInfo: null,
};

export const tiasSlice = createSlice({
    name: "tias",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // state.productData = action.payload;
            const item = state.productData.find(
                // state.productData = state.productData.find(
                (item) => item.id === action.payload.id
            );

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        deleteFromCart: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item.id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
        addToQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity++;
            }
        },
        minusFromQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item.id === action.payload.id
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },

        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        deleteUser: (state) => {
            state.userInfo = null;
        }
    },
});

export const
    { addToCart, deleteFromCart, resetCart, addToQuantity, minusFromQuantity, addUser, deleteUser }
        = tiasSlice.actions;
export default tiasSlice.reducer;