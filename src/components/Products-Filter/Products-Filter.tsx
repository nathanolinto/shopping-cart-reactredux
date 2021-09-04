import React, { ChangeEvent } from "react";

interface ProductsFilterProps {
    countProducts: number;
    categories: string[];
    onFilterProducts: (category: string) => void;
    onSortProducts: (sort: string) => void;
}

function ProductsFilter({ countProducts, categories, onFilterProducts, onSortProducts }: ProductsFilterProps) {
    
    function handleChangeFilterProducts(event: ChangeEvent<HTMLSelectElement>){
        onFilterProducts(event.target.value);
    }
    function handleChangeSortProducts(event: ChangeEvent<HTMLSelectElement>){
        onSortProducts(event.target.value);
    }

    return (
        <div className="flex justify-between p-4 bg-white">
            <div className="flex-1">
                <p>{ countProducts } Products</p>
            </div>

            <div className="flex flex-1">
                <p className="mr-2">Order</p>
                <select name="" id="" onChange={(event) => handleChangeSortProducts(event)}>
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>

            <div className="flex flex-1">
                <p className="mr-2">Filter</p>
                <select name="" id="" onChange={(event) => handleChangeFilterProducts(event)}>
                    <option value="">All</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>    
                    ))}
                </select>
            </div>

        </div>
    );
}

export { ProductsFilter };