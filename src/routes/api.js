const express = require('express');
const router = express.Router();

// 1. Get all users
router.get('/users', (req, res) => {
    res.json({ message: 'Retrieve all users' });
});

// 2. Get a specific user by ID
router.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Retrieve user with ID: ${userId}` });
});

// 3. Create a new user
router.post('/users', (req, res) => {
    res.json({ message: 'Create a new user' });
});

// 4. Update a user by ID
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Update user with ID: ${userId}` });
});

// 5. Delete a user by ID
router.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Delete user with ID: ${userId}` });
});

// 6. Get server status
router.get('/status', (req, res) => {
    res.json({ status: 'Server is running', uptime: process.uptime() });
});

// 7. Search for users by query
router.get('/search', (req, res) => {
    const query = req.query.q;
    res.json({ message: `Search results for query: ${query}` });
});

// 8. Upload a file
router.post('/upload', (req, res) => {
    res.json({ message: 'File uploaded successfully' });
});

// 9. Get application settings
router.get('/settings', (req, res) => {
    res.json({ settings: { theme: 'dark', notifications: true } });
});

// 10. Update application settings
router.put('/settings', (req, res) => {
    res.json({ message: 'Application settings updated' });
});

module.exports = router;