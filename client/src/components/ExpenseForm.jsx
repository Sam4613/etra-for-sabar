import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = () => {
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        category: '',
        recurring: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');

        try {
            await axios.post('/api/expenses', formData, {
                headers: { Authorization: token },
            });
            setFormData({ description: '', amount: '', category: '', recurring: false });
        } catch (error) {
            console.error('Error adding expense', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                name="description" 
                type="text" 
                placeholder="Description" 
                value={formData.description} 
                onChange={handleChange} 
                required 
            />
            <input 
                name="amount" 
                type="number" 
                placeholder="Amount" 
                value={formData.amount} 
                onChange={handleChange} 
                required 
            />
            <input 
                name="category" 
                type="text" 
                placeholder="Category" 
                value={formData.category} 
                onChange={handleChange} 
                required 
            />
            <label>
                <input 
                    name="recurring" 
                    type="checkbox" 
                    checked={formData.recurring} 
                    onChange={handleChange} 
                />
                Recurring
            </label>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
