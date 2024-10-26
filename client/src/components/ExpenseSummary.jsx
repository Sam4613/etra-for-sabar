import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

const ExpenseSummary = () => {
    const { expenses } = useContext(ExpenseContext);

    return (
        <div>
            <h2>Expense Summary</h2>
            <ul>
                {expenses.map(expense => (
                    <li key={expense._id}>
                        {expense.description}: ${expense.amount} ({expense.category})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseSummary;
