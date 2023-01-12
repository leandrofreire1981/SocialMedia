const { Schema, model, default: mongoose } = require("mongoose")

/* const comentariessSchema = new Schema({ 
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
    }) */

const comentariesSchema = new Schema({
    parentId:{
        Type: String
    },
    comentarie:{
        type: String
    }
    })

const postSchema = new Schema({
        video: {
            type: String
        },
        picture:[]
        ,
        comentariesMain:[comentariesSchema]
})

export const Post = model("Post", postSchema);





