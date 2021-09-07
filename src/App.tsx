import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductFeed from './components/Product-Feed';
import ProductsFilter from './components/Products-Filter';
import Card from "./components/Cart"
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts } from './store/products/products.selectors';
import { getAllProducts } from './store/products/products.actions';



interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}
interface ItemCart {
    product: Product;
    amount: number;
}

function App() {

    // const dispath = useDispatch();
    // const productsRedux = useSelector(selectAllProducts);
    // console.log(productsRedux)
    // useEffect(()=> {
    //     dispath(getAllProducts());
    // }, [])
    

    const [products, setProducts] = useState<Product[]>([]);
    const [updatedProducts, setupdatedProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<string[]>([]);
    const [itemCart, setItemCart] = useState<ItemCart[]>([]);

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios.get("https://fakestoreapi.com/products");
            setProducts(result.data);
            setupdatedProducts(result.data);
            const initCategories = result.data.map((product: Product) => {
                return product.category;
            })
            setCategories(initCategories.filter((el: string, i: number, arr: string) => arr.indexOf(el) === i));
        }
        fetchData();

    }, []);


    function handleFilterProducts(category: string) {
        setupdatedProducts(products.filter(product => product.category.indexOf(category) >= 0));
    }

    function handleAddCartProduct(product: Product) {
        const updatedItemCart = [...itemCart];
        const itemCartIndex = updatedItemCart.findIndex(item => item.product.id === product.id);
        if (itemCartIndex >= 0) {
            updatedItemCart[itemCartIndex].amount++;
            setItemCart(updatedItemCart);
            return;
        }

        setItemCart([...itemCart, { product, amount: 1 }]);

    }

    function handleRemoveCartProduct(id: number) {
        const updatedItemCart = [...itemCart];
        const itemCartIndex = updatedItemCart.findIndex(item => item.product.id === id);
        if (itemCartIndex >= 0) {
            updatedItemCart.splice(itemCartIndex, 1);
            setItemCart(updatedItemCart);
        }
    }

    function handleSortProducts(sort: string) {
        const upProducts = updatedProducts.slice().sort((a, b) => (
            sort === "lowest" ?
                ((a.price > b.price) ? 1 : -1) :
                sort === "highest" ?
                    ((a.price < b.price) ? 1 : -1) :
                    ((a.id > b.id) ? 1 : -1)
        ));
        setupdatedProducts(upProducts);
    }

    return (
        <div className="bg-gray-200">
            <Header />

            <div className="">
                <Card itens={itemCart} removeItemCard={handleRemoveCartProduct} />
                <ProductsFilter countProducts={updatedProducts.length} categories={categories} onFilterProducts={handleFilterProducts} onSortProducts={handleSortProducts} />
                <ProductFeed products={updatedProducts} addProductCard={handleAddCartProduct} />
            </div>
        </div>
    );
}

export default App;
