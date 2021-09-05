import Product from "../Product";

interface IProduct {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

interface ProductFeedProps {
    products: IProduct[];
    addProductCard: (product: IProduct) => void;
}

function ProductFeed ({products, addProductCard}:ProductFeedProps) {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 ">
            {products.map(product => (
                <Product key={product.id} product={product} addProductCart={addProductCard} />
            ))}
        </div>
    );
}

export {ProductFeed};