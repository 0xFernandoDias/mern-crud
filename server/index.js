// Express connection
const express = require('express')
const app = express()

// MongoDB connection
const mongoose = require('mongoose')

// Cors does the connection between the Client and the Server
const cors = require('cors')

app.use(cors())
app.use(express.json())

// DB connection
mongoose.connect('mongodb+srv://dbUser:password12345@cluster0.mdav7.mongodb.net/mern-database?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true  })

// Model/ Schema imports
const FriendModel = require('./models/Friends')

// When we go to "localhost:3001/insert (localhost:3001/addfriend)" that function below we'll be called
app.post('/addfriend', async (req, res) => { // req = down, res = up
    // server
    const name = req.body.name // req.body = "axios.post(link, {name, age})"
    const age = req.body.age

    // db
    const friend = new FriendModel({name , age}) // "object" as arguments for the class constructor
    await friend.save() // it stores the data in db
    res.send("Success") // browser's message
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
