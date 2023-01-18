import  { Post } from '../models/Post'
import uploadToCloudinary from '../src/cloudinary/uploadToCloudinary'

export async function getPublications(){
    let p = await Post.find()
    return p
}

export async function postPublication(obj){
    let imgLink = await uploadToCloudinary(obj.pictures)
    let objMongo = await Post({picture: [imgLink], responses: []})
    let res = await objMongo.save()
    return res
}