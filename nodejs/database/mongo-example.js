//const mongoose = require('mongoose')
import mongoose from 'mongoose'

//Connect to mongoDB
mongoose.connect('mongodb://localhost:27017/testdb',{
    useNewUrlParser: true, //Uses the new MongoDB connection string parser
    useUnifiedTopology: true //Better connection management, monitoring and server
})
.then(()=>console.log('Connected to MongoDB!'))
.catch(err=>console.error(err))

//Define Schema - Collection Model
const userSchema =  new mongoose.Schema({
    name: String,
    email: String
})

//Creating a collection
const User = mongoose.model('User',userSchema)

//Insert User
async function run(){
    const newUser = new User({name:'Bob', email:'bob@example.com'})
    await newUser.save()
    console.log('User inserted: ',newUser)
}

//Fetch users
const users = await User.find();
console.log('User: ',users)

run();