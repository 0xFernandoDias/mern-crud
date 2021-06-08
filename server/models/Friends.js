const mongoose = require('mongoose') // that's like a class creation

const FriendSchema = new mongoose.Schema({ // we're creating and defining the schema according the mongoose class
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: false
    }
})

// model(name, schema)
const FriendModel = mongoose.model('friends-collections', FriendSchema) // the Model to be exported

module.exports = FriendModel