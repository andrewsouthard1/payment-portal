const express = require('express');
const router = express.Router();

// In-memory data
const products = [
  { id: 1, name: 'Basic Widget', price: 19.99 },
  { id: 2, name: 'Advanced Widget', price: 49.99 },
  { id: 3, name: 'Premium Widget', price: 99.99 }
];
let cart = [];
let payments = {};

// Home
router.get('/', (req, res) => {
  res.send('Welcome to the Online Payment Portal Demo!');
});

// List products
router.get('/products', (req, res) => {
  res.json(products);
});

// Product details
router.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// Add to cart
router.post('/cart', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  cart.push({ productId, quantity });
  res.json({ message: 'Added to cart', cart });
});

// View cart
router.get('/cart', (req, res) => {
  const detailedCart = cart.map(item => {
    const product = products.find(p => p.id === item.productId);
    return { ...item, product };
  });
  res.json(detailedCart);
});

// Checkout
router.post('/checkout', (req, res) => {
  if (cart.length === 0) return res.status(400).json({ error: 'Cart is empty' });
  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + (product.price * item.quantity);
  }, 0);
  // Mock payment processing
  const paymentId = Math.random().toString(36).substr(2, 9);
  payments[paymentId] = { status: 'success', total };
  cart = [];
  res.json({ message: 'Payment processed', paymentId, total });
});

// Payment status
router.get('/payment/:id', (req, res) => {
  const payment = payments[req.params.id];
  if (!payment) return res.status(404).json({ error: 'Payment not found' });
  res.json(payment);
});

module.exports = router; 