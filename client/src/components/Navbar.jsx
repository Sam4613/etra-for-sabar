import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-expense">Add Expense</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/budget">Budget</Link></li>
            <li><Link to="/activity">Activity Feed</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
);

export default Navbar;
