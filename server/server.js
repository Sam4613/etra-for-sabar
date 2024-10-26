const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

// Connect to MongoDB
mongoose.connect(`mongodb://sabar:AeiIqQCDrbbMsyJY@localhost:27017/expense-sharing-app`, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
