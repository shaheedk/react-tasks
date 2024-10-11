import React, { useState } from 'react';

const Keys = () => {
    const [items, setItems] = useState([
        { id: 1, name: "Laptop", brand: "Dell", qty: 1 },
        { id: 2, name: "Laptop", brand: "HP", qty: 1 },
        { id: 3, name: "Laptop", brand: "Lenovo", qty: 1 },
    ]);

    const changeQty = (id) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, qty: item.qty + 1 } :item 
        ));
    };
    

    return (
        <div>
            {items.map(product => (
                <div className="bg-success text-white m-2" key={product.id}>
                    <h1>{product.name}</h1>
                    <h3>Brand: {product.brand}</h3>
                    <h4>Qty: {product.qty}</h4>
                    <button onClick={() => changeQty(product.id)} type="button">
                        +
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Keys;
