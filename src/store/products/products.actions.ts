import { ActionCreator, Dispatch } from "redux";
import  { ThunkAction } from "redux-thunk";
import axios from "axios";

import { IProduct, IProductState } from "./products.reducer";

export enum ProductActionTypes {
    GET_ALL = "GET_ALL",
}

export interface IProductGetAllAction {
    type: ProductActionTypes.GET_ALL;
    products: IProduct[];
}

export type ProductActions = IProductGetAllAction;

export const getAllProducts: ActionCreator<ThunkAction<Promise<any>, IProductState, null, IProductGetAllAction>> = 
() => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            dispatch({
                type: ProductActionTypes.GET_ALL,
                products: response.data,
            });
        } catch (err) {
            console.error(err);
        }
    };
};

// export const actions = {
//     FETCH_PRODUCTS: "FETCH_PRODUCTS",
//     SET_PRODUCTS: "SET_PRODUCTS",
    
// }

// export function fetchProducts(products:ProductsState) {
//     return {
//         type: actions.FETCH_PRODUCTS,
//         payload: products
//     }
// }

// export function setProducts (products: ProductsState) {
//     return {
//         type: actions.SET_PRODUCTS,
//         payload: products
//     }
// }
