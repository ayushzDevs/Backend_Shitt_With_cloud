const mongoose = require('mongoose');

const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://ash:Ayush@backend0.bisfpsq.mongodb.net/");
        console.log("Connected to MongoDB");
    }

    catch(err){
    console.error("Error connecting to MongoDB", err);
    process.exit(1);
}
}


module.exports = connectDB;