require('dotenv').config()
const {cloudinary} = require('./utils')

 const uploadToCloudinary = async(file)=>{
    console.log(cloudinary)
    let ini = file.slice(0,4);
    let result;
    if(ini === "http") result = await cloudinary.uploader.upload(file)
    else{ 
        let a = {archivo: file}
        result = await cloudinary.uploader.upload(a.archivo)
    }
    return{
        "profilePictureId":result.public_id,
        "profilePicture": result.secure_url
    }
}

module.exports = uploadToCloudinary;