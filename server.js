const express = require('express');
const app = express();
const db = require('./db.js');


const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); //req.body
//const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {
    res.send('Welcome to my School Management System');
    })


//Import the routes file
const studentsRoutes = require('./routes/studentsRoutes');

// Use the routes file
app.use('/students', studentsRoutes); 

app.listen(3000, () => {
    console.log('listening on port 3000');
})

