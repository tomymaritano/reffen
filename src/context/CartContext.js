// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const stripePromise = window.Stripe('tu_clave_publica_stripe');

const handleCheckout = async (items) => {
  const stripe = await stripePromise;
  const response = await fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ items }),
  });
  const session = await response.json();
  // Redirigir al Checkout
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  });

  if (result.error) {
    // Manejar el error
    alert(result.error.message);
  }
};

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
  const intervalId = setInterval(() => {
    // Función para verificar el estado del pedido aquí
  }, 5000); // Intervalo de 5 segundos

  return () => clearInterval(intervalId);
}, []);


  const addToCart = (item) => {
    setCartItems((prevItems) => {
      // Añade la lógica para agregar al carrito aquí
      return [...prevItems, item];
    });
  };

  // Añade más funciones según sea necesario, como removeFromCart, clearCart, etc.

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
