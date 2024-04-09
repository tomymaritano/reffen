// server.js
const express = require('express');
const stripe = require('stripe')('tu_clave_secreta_stripe');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body; // Deberías pasar los ítems del carrito aquí
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: items.map(item => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // Stripe maneja los montos en centavos
        },
        quantity: item.quantity,
      };
    }),
    mode: 'payment',
    success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${req.headers.origin}/cancel`,
  });

  res.json({ id: session.id });
});

const port = process.env.PORT || 4242;
app.listen(port, () => console.log(`Listening on port ${port}`));
