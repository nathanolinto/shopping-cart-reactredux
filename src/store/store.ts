import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { productReducer, IProductState } from "./products/products.reducer";

export interface IAppState {
    productState: IProductState;
}

const rootReduce = combineReducers<IAppState>({
    productState: productReducer
});

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReduce, undefined, applyMiddleware(thunk));
    return store;
}


// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import productsReducer from "./products/products.reducer";

// const rootReduce = combineReducers({
//     products: productsReducer
// })

// const store = createStore(rootReduce, applyMiddleware(thunk));

// export type RootState = ReturnType<typeof rootReduce>
// export default store;