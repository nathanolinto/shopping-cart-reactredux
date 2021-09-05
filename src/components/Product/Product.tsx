interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}

interface ProductProps {
    product: Product,
    addProductCart: (product: Product) => void;

}

function Product ({product, addProductCart}: ProductProps) {
    const updatedProduct = {
        ...product, 
        formatedPrice: new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price),
    };
    return (
        <div className="flex flex-col bg-white m-4 px-4 py-6">
            <a href="">
                <div className="flex justify-center my-3">
                    <img className="w-48 h-48" src={updatedProduct.image} alt={updatedProduct.title} />
                </div>
                <p className="my-3 h-12 line-clamp-2">{updatedProduct.title}</p>
            </a>
            <div className="flex items-center">
                <div className="flex flex-1 justify-center p-2">{updatedProduct.formatedPrice}</div>
                <button className="flex flex-1 justify-center bg-yellow-500 p-2" onClick={()=>addProductCart(updatedProduct)} >Add to Cart</button>
            </div>
        </div>
    );
}

export {Product};