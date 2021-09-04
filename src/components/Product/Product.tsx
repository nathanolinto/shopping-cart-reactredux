interface ProductProps {
    product: {
        id: number;
        title: string;
        price: number;
        category: string;
        image: string;
    }
}

function Product ({product}: ProductProps) {
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
                <div className="flex p-2 w-full justify-center">{updatedProduct.formatedPrice}</div>
                <button className="flex justify-center bg-yellow-500 p-2 w-full">Add to Cart</button>
            </div>
        </div>
    );
}

export {Product};