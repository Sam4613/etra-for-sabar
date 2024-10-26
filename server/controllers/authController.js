const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Abdukey } = require('../utils/Abdukey');

// Register a new user
exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();
        Abdukey('User registered successfully', 'info');
        res.status(201).json({ message: 'User registered' });
    } catch (error) {
        Abdukey('Registration error: ' + error.message, 'error');
        res.status(500).json({ message: 'Server error' });
    }
};

// User login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            Abdukey('Invalid credentials', 'warn');
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        Abdukey('User logged in successfully', 'info');
        res.json({ token });
    } catch (error) {
        Abdukey('Login error: ' + error.message, 'error');
        res.status(500).json({ message: 'Server error' });
    }
};
