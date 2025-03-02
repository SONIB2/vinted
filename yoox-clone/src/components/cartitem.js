import React, { useState } from 'react';

const CartItem = ({ item, onRemove }) => {
 const [quantity, setQuantity] = useState(1); // Initialize quantity with 1

 const increaseQuantity = () => {
 setQuantity(quantity + 1);
 };

 const decreaseQuantity = () => {
 if (quantity > 1) {
 setQuantity(quantity - 1);
 }
 };

 return (
 <div className="item-container">
 <img src={item.image} alt={item.name} className="item-image" />
 <div className="item-details">
 <div>{item.brand}</div>
 <div>{item.name}</div>
 <div>{item.description}</div>
 <div className="quantity-selector">
 <button className="quantity-button" onClick={decreaseQuantity}>-</button>
 <input type="text" value={quantity} readOnly className="quantity-input" />
 <button className="quantity-button" onClick={increaseQuantity}>+</button>
 </div>
 </div>
 <div>€{item.price}</div>
 <div>{item.stock}</div>
 <button className="remove-button" onClick={onRemove}>
 X REMOVE
 </button>
 </div>
 );
};

export default CartItem;
