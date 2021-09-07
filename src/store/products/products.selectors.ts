import {IAppState} from "../store";

export const selectAllProducts = (state:IAppState) => (state.productState.products);