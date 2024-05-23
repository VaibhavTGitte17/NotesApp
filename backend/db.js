
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/inotebackend';

async function connectToMongo() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB succesfully');
    } catch (error) {
        console.error('Error not connected to the MongoDb', error.message);
     
    }
}
module.exports = connectToMongo;
