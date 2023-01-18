import  { Post } from '../models/Post'
import { Responses } from '../models/Responses'

export async function getCommentaries() {
    let res = await Post.find( {"responses._id": "bbf139382fd401b69f2"}) //let res = await Post.find({}, "commentariesMain")
    return res
}

export async function postCommentaries(obj) {
    let res = await Responses({"commentarie": obj.comentarie})
    let r = await Post.findById(obj.parentId, {responses: 1})
    if(r){
        let parentComment = await Post.findByIdAndUpdate(obj.parentId, {responses: [r.responses, res].flat()})
        return parentComment
    }
    let rec = await getCommentaries()
    let com = searchComment(rec, obj.parentId)
    return com
}

async function searchComment(rec, parentId){
/*     for (let i = 0; i < rec.responses.length; i++) {
        if(rec.responses[i]===parentId){
            let parentComment = await Post.findByIdAndUpdate(obj.parentId, {responses: [r.responses, res].flat()}) 
        }      
    } */
    return rec
}