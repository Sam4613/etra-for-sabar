import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExpenseForm from './components/ExpenseForm';
import ExpenseSummary from './components/ExpenseSummary';
import Reports from './components/Reports';
import BudgetManager from './components/BudgetManager';
import FriendActivityFeed from './components/FriendActivityFeed';
import Login from './components/Login';

const App = () => (
    <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={ExpenseSummary} />
            <Route path="/add-expense" component={ExpenseForm} />
            <Route path="/reports" component={Reports} />
            <Route path="/budget" component={BudgetManager} />
            <Route path="/friends" component={FriendActivityFeed} />
            <Route path="/login" component={Login} />
        </Switch>
    </Router>
);

export default App;
