import  { Post } from '../models/Post'
import { Responses } from '../models/Responses'

export async function getCommentaries() {
    let res = await Post.find({}, "commentariesMain")
    return res
}

export async function postCommentaries(obj) {
    let res = await Responses({"commentarie": obj.commentarie})
    let r = await Post.findById(obj.parentId, {commentariesMain: 1})
    if(r){
        let parentComment = await Post.findByIdAndUpdate(obj.parentId, {commentariesMain: [r.commentariesMain, res].flat()})
        return parentComment
    }
    let rec = await getCommentaries()
    return rec



}