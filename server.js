const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const checklistRoutes = require('./routes/checklists');

const app = express();

mongoose.connect('mongodb://localhost:27017/checklist_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/checklists', checklistRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

