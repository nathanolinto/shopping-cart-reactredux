interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
}
interface CardProps {
    itens: {
        product: Product;
        amount: number;
    }[],
    removeItemCard: (id:number) => void;
}

function Cart({itens, removeItemCard}:CardProps) {
    return (
        <div>
            <div>
                You hrave {itens.length} in the cart
            </div>
            <ul>
                {itens.map(item => (
                    <li key={item.product.id}>
                        {item.product.title} - 
                        {item.product.price} - 
                        {item.amount} - 
                        <button onClick={() => removeItemCard(item.product.id)}> Remover item</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export { Cart };