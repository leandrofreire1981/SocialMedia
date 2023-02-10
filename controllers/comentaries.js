import  { Post } from '../models/Post'

export async function getComentaries() {
    return 'hola que tal'
}

export async function postComentaries(obj) {
    const objectMongo = await Post(obj);
            const result = await objectMongo.save(); 
            return result
}