import {cloudinary} from ("./utils.js");

export const uploadToCloudinary = async(file)=>{
    let ini = file.slice(0,4);
    let result;
    if(ini === "http") result = await cloudinary.V2.uploader.upload(file)
    else{ 
        result = await cloudinary.V2.uploader.upload(file)
    }
    return{
        "imaegeId":result.public_id
    }
}