import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductFeed from './components/Product-Feed';


function App() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://fakestoreapi.com/products");
            setProducts(result.data);
        }

        fetchData();
    }, []);
    return (
        <div className="bg-gray-200">
            <Header />

            <div className="px-3">
                <ProductFeed products={products} />
            </div>
        </div>
    );
}

export default App;
