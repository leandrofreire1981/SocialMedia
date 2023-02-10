const { Schema, model, default: mongoose } = require("mongoose")

const photoSchema = new Schema({
    photoId:{
        type:String,
        required: true
    },
})

const contactsSchema = new Schema({
    following:{
       type: Array,
    },
    followers:{
        type: Array,
    },
})

//? we are gonna keep only the email and name like require fields because we want to be able of store data
// from (for example) a google's user, so if the user change their profile picture then we are gonna save them
// using their email like reference

const userSchema = new Schema({
    userName:{
        type:String,  
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        unique: true
    },
    name:{
        type: String,
    },
    lastName:{
        type: String,        
    },
    birthDate:{
        type: String,
    },
    publications:{
        type: Array
    },
    profilePicture:{
        type: String
    },
    profilePictureId:{
        type: String
    },
    photos:[photoSchema],
    social: contactsSchema
})

export const User = mongoose.models.User || model("User", userSchema);