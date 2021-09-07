import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from "react-redux";
import { Store } from "redux";
import configureStore, {IAppState} from "./store/store";
import { getAllProducts } from './store/products/products.actions';

import App from './App';

interface IProps {
    store: Store<IAppState>;
}

const store = configureStore();
store.dispatch(getAllProducts());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);