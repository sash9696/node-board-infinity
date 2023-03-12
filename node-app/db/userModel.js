const mongoose = require('mongoose');


//user schema

const UserSchema = new mongoose.Schema({
    //email field

    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, 'Email Exist']
    },

    //password field
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: false,
    }
})

// export UserSchema

//create a usertable if there is no table with that name already
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema)