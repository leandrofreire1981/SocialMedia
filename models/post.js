const { Schema, model, default: mongoose } = require("mongoose")

const comentariessSchema = new Schema({ 
    comentedBy:"",
    text:"",
    likes:{
        likedBy:[],
        count:{
            type: Number,
            default: this.likedBy.length    
            }
        },
    answers:[]
    })

const comentariesSchema = new Schema({
    parentId:{
        Type: String,
        default: null
    },
    comentarie:{
        type: String
    },
    answers:[comentariesSchema]
    })

const postSchema = new Schema({
        video:"",
        picture:[]
        ,
        comentariesMain:[comentariesSchema]
})