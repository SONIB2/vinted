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
        <div className="cart2-container">
            <div className="maincart-content">
                <div className="cart-section">
                    <h2 className="sectioncart-title">Shopping Bag - {cartItems.length} item(s)</h2>
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div className="itemcart-container" key={item.id}>
                                <div className="itemcart-details">
                                    <div>{item.brand}</div>
                                    <div>{item.category}</div>
                                    <div>{item.color} - {item.size}</div>
                                    <div className="quantity-selector">
                                        <button className="quantitycart-button" onClick={() => removeFromCart(item.id)}>-</button>
                                        <input type="text" value={item.quantity} readOnly className="quantitycart-input" />
                                        <button className="quantitycart-button" onClick={() => addToCart(item)}>+</button>
                                    </div>
                                </div>
                                <div>€{(item.price * item.quantity).toFixed(2)}</div>
                                <div>LOW STOCK</div>
                                <button className="removecart-button" onClick={() => removeFromCart(item.id)}>X REMOVE</button>
                            </div>
                        ))
                    ) : (
                        <p>Your cart is empty.</p>
                    )}
                </div>

                <div className="sectioncart">
                    <h2 className="sectioncart-title">DELIVERY METHODS</h2>
                    <div>You will be able to choose the delivery method later</div>
                    <div className="deliverycart-methods">
                        <div className="deliverycart-option">
                            <div>Express</div>
                            <div>4 business days</div>
                            <div>€{deliveryCost.toFixed(2)}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ordercart-summary">
                <h2 className="sectioncart-title">Your order</h2>
                <div>TOTAL FOR ITEMS</div>
                <div>€ {totalItemsPrice.toFixed(2)}</div>
                <div>DELIVERY</div>
                <div>€ {deliveryCost.toFixed(2)}</div>
                <div>The final amount will depend on the delivery method you choose</div>
                <div>ORDER TOTAL</div>
                <div className="ordercart-total">€ {orderTotal.toFixed(2)}</div>
                <button className="proceedcart-button">PROCEED WITH ORDER</button>
            </div>
        </div>
    );
};

export default Cart;
