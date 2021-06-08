// Express connection
const express = require('express')
const app = express()

// MongoDB connection
const mongoose = require('mongoose')

// Model/ Schema imports
const FriendModel = require('./models/Friends')

// DB connection
mongoose.connect('mongodb+srv://dbUser:password12345@cluster0.mdav7.mongodb.net/mern-database?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true  })

// When we go to "localhost:3001/insert" that function below we'll be called
app.get('/insert', async (req, res) => {
    const friend = new FriendModel({name: "John", age: 50}) // "object" as arguments for the class constructor
    await friend.save() // it stores the data in db
    res.send("Inserted DATA") // browser's message 
})

// When we go to "localhost:3001/read" that function below we'll be called
app.get('/read', async(req, res) => {
    FriendModel.find({}, (err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result) // It shows the data in browser
        }
    })
})

app.listen(3001, () => console.log(`You're connected!`)) // node "listen" the "localhost:3001" and then shows "You're connected!" on output if everything is okay
