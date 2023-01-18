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

/* const comentariesSchema = new Schema({
    comentarie:{
        type: String
    },
    response: {
        type: Array
    }
})
 */
const postSchema = new Schema({
        video: {
            type: String
        },
        picture:[],
        responses:{
            type: Array
        }
})

export const Post = model("Post", postSchema);





