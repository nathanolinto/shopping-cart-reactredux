import { Reducer } from "redux";
import { ProductActions, ProductActionTypes } from "./products.actions";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

export interface IProductState {
    readonly products: IProduct[];
}

const initialProductState: IProductState = {
    products: [],
}

export const productReducer: Reducer<IProductState, ProductActions> = (
    state = initialProductState, action
) => {
    switch (action.type) {
        case ProductActionTypes.GET_ALL: {
            return {
                ...state,
                products: action.products
            };
        }
        default: 
            return state
    }
};
// import axios from "axios";


// const initialState: ProductsState = {
//     products: []
// }

// export default async function productsReducer(state: ProductsState = initialState, action:ProductAction) {
//     switch(action.type) {
//         case actions.FETCH_PRODUCTS:
//             const result = await axios.get("https://fakestoreapi.com/products");
//             state.products = result.data;
//             return result.data;
//         case actions.SET_PRODUCTS: 
//             return {...state, products: action.payload}
        
//         default: 
//             return state;
//     }
// }

