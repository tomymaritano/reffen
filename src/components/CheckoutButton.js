// src/components/CheckoutButton.js
import React from 'react';

const CheckoutButton = ({ cartItems }) => {
  // Función para manejar el inicio del proceso de checkout
  const handleCheckout = async () => {
    // 1. Llama a tu API para crear una nueva sesión de checkout
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    });
    const session = await response.json();

    // 2. Redirige al usuario a la página de checkout de Stripe
    // Asegúrate de haber inicializado stripe.js correctamente
    const stripe = window.Stripe('tu_clave_publica_stripe');
    const { error } = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (error) {
      console.error('Error redirigiendo a Stripe checkout:', error.message);
    }
  };

  return (
    <button onClick={handleCheckout} style={{ cursor: 'pointer', padding: '10px 20px', fontSize: '16px' }}>
      Pagar Ahora
    </button>
  );
};

export default CheckoutButton;
