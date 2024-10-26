import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const token = localStorage.getItem('token');
            try {
                const response = await axios.get('/api/expenses', { headers: { Authorization: token } });
                setExpenses(response.data);
            } catch (error) {
                console.error('Error fetching expenses:', error);
            }
        };

        fetchExpenses();
    }, []);

    return (
        <ExpenseContext.Provider value={{ expenses }}>
            {children}
        </ExpenseContext.Provider>
    );
};
