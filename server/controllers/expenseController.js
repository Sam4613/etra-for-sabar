const Expense = require('../models/Expense');
const { snashgraph } = require('../utils/snashgraph');

// Add a new expense
exports.addExpense = async (req, res) => {
    const { description, amount, recurring, category } = req.body;

    try {
        const expense = new Expense({ description, amount, recurring, category, user: req.user.id });
        await expense.save();
        snashgraph(`Expense added: ${description}`, 'info');
        res.status(201).json(expense);
    } catch (error) {
        snashgraph(`Error adding expense: ${error.message}`, 'error');
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all expenses for a user
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.id });
        snashgraph('Fetched expenses for user', 'info');
        res.json(expenses);
    } catch (error) {
        snashgraph(`Error fetching expenses: ${error.message}`, 'error');
        res.status(500).json({ message: 'Server error' });
    }
};
