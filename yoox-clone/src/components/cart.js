import React from "react";
import { useCart } from "./CartContext";
import "./cart.css"; // Import the CSS file

const Cart = () => {
    const { cartItems, addToCart, removeFromCart } = useCart();

    // Llogarit totalin e produkteve në bazë të sasisë dhe çmimit
    const totalItemsPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const deliveryCost = 29.00;
    const orderTotal = totalItemsPrice + deliveryCost;

    return (
        <div className="cart-container">
            <div className="main-content">
                <div className="section">
                    <h2 className="section-title">Shopping Bag - {cartItems.length} item(s)</h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div className="item-container" key={item.id}>
                                <div className="item-details">
                                    <div>{item.brand}</div>
                                    <div>{item.category}</div>
                                    <div>{item.color} - {item.size}</div>
                                    <div className="quantity-selector">
                                        <button className="quantity-button" onClick={() => removeFromCart(item.id)}>-</button>
                                        <input type="text" value={item.quantity} readOnly className="quantity-input" />
                                        <button className="quantity-button" onClick={() => addToCart(item)}>+</button>
                                    </div>
                                </div>
                                <div>€{(item.price * item.quantity).toFixed(2)}</div>
                                <div>LOW STOCK</div>
                                <button className="remove-button" onClick={() => removeFromCart(item.id)}>X REMOVE</button>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>

                <div className="section">
                    <h2 className="section-title">DELIVERY METHODS</h2>
                    <div>You will be able to choose the delivery method later</div>
                    <div className="delivery-methods">
                        <div className="delivery-option">
                            <div>Express</div>
                            <div>4 business days</div>
                            <div>€{deliveryCost.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order-summary">
                <h2 className="section-title">Your order</h2>
                <div>TOTAL FOR ITEMS</div>
                <div>€ {totalItemsPrice.toFixed(2)}</div>
                <div>DELIVERY</div>
                <div>€ {deliveryCost.toFixed(2)}</div>
                <div>The final amount will depend on the delivery method you choose</div>
                <div>ORDER TOTAL</div>
                <div className="order-total">€ {orderTotal.toFixed(2)}</div>
                <button className="proceed-button">PROCEED WITH ORDER</button>
            </div>
        </div>
    );
};

export default Cart;
