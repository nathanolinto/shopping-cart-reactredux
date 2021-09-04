import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductFeed from './components/Product-Feed';
import ProductsFilter from './components/Products-Filter';

interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [updatedProducts, setupdatedProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<string[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("https://fakestoreapi.com/products");
            setProducts(result.data);
            setupdatedProducts(result.data);
            const initCategories = result.data.map((product: Product) => {
                return product.category;
            })
            setCategories(initCategories.filter((el:string, i:number, arr:string) => arr.indexOf(el) === i));
        }
        fetchData();
    }, []);

    function handleFilterProducts(category: string) {
        setupdatedProducts(products.filter(product => product.category.indexOf(category) >= 0));
    }

    function handleSortProducts(sort: string) {
        const upProducts = updatedProducts.slice().sort((a,b) => (
            sort === "lowest" ? 
                ((a.price > b.price)? 1:-1):
            sort === "highest" ?
                ((a.price < b.price)? 1:-1):
            ((a.id > b.id)? 1:-1)
        ));
        setupdatedProducts(upProducts);
    }

    return (
        <div className="bg-gray-200">
            <Header />

            <div className="">
                <ProductsFilter countProducts={updatedProducts.length} categories={categories} onFilterProducts={handleFilterProducts} onSortProducts={handleSortProducts} />
                <ProductFeed products={updatedProducts} />
            </div>
        </div>
    );
}

export default App;
