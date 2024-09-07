const mongoose = require('mongoose');

//define THE MongoDB connection URL
const mongoURL = ('mongodb://localhost:27017/smsdb');
console.log("MongoDB Connection URL");

//set up mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', ()=> {
    console.log('Connected to MongoDB server')
})

db.on('error', ()=> {
   console.log('Connection failed!')
}) 

db.on('disconnected', ()=> {
   console.log('Disconnected from MongoDB server')
})

//export the database connection
module.exports = db;