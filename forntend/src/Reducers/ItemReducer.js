import { Error_Item, Load_Item, Sucess_Add } from "../constants/ItemConstant";

const initialState = {
    cartData: []
}




export const  cartReducer=(state = initialState, action) => {
    switch (action.type) {
        case Sucess_Add:
            return { ...state, cartData: { ...state.cartData, ...action.payload } }
        default:
            return state;
    }
}