import Product from "../Product";

interface ProductFeedProps {
    products: {
        id: number;
        title: string;
        price: number;
        category: string;
        image: string;
    }[]
}

function ProductFeed ({products}:ProductFeedProps) {
    return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 ">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export {ProductFeed};