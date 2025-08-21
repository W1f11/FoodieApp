import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQty, clearCart } from "../store/cartSlice";

function Cart({ onClose }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-sidebar">
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Votre Panier</h2>

      {cart.length === 0 && <p>Votre panier est vide.</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}>+</button>
          <span>{item.price * item.qty} €</span>
          <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>x</button>
        </div>
      ))}

      <h3>Total: {total} €</h3>
      {cart.length > 0 && (
        <button  className="order-btn" onClick={() => dispatch(clearCart())}>Passer la commande</button>
      )}
    </div>
  );
}

export default Cart;
