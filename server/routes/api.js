const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const { addExpense, getExpenses } = require('../controllers/expenseController');
const auth = require('../middleware/auth');

// User authentication routes
router.post('/register', register);
router.post('/login', login);

// Expense management routes
router.post('/expenses', auth, addExpense);
router.get('/expenses', auth, getExpenses);

module.exports = router;
