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
    birthDate:{
        type: String,
        required: true
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