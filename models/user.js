const { Schema, model, default: mongoose } = require("mongoose")

const photoSchema = new Schema({
    photoId:{
        type:String,
        required: true
    },
})

const userSchema = new Schema({
    userName:{
        type:String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    publications:{
        type: Array
    },
    profilePicture:{
        type: String
    },
    photos:[photoSchema]

})

export const User = model("User", userSchema);