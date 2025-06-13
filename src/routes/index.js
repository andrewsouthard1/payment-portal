const express = require('express');
const userRoutes = require('./users');
const authRoutes = require('./auth');
const paymentRoutes = require('./payment');

const setRoutes = (app) => {
    app.use('/api/users', userRoutes);
    app.use('/api/auth', authRoutes);
    app.use('/api/payment', paymentRoutes);
};

module.exports = setRoutes;