import  { Post } from '../models/Post'

export async function getComentaries() {
    return 'hola que tal'
}

export async function postComentaries(obj) {
/*     const objectMongo = await Post(obj);
            console.log("holaaaa ",objectMongo)
            const result = await objectMongo.save(); */
            return {'post comentaries': obj}

}