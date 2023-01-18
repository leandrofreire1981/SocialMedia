import { fileURLToPath } from "url";
import { User } from "/models/User.js"
import  uploadToCloudinary  from "src/cloudinary/uploadToCloudinary.js"

export const postUser = async (obj)=>{
    const { profilePicture, profilePictureId } = await uploadToCloudinary(obj.profileImage)
    obj.profilePictureId = profilePicture
    obj.profilePictureId = profilePictureId
    let structure = await User(obj);
    let userCreated = await structure.save(obj);
    console.log(userCreated)
    return userCreated;
}

export const getUser = async (obj)=>{
    let users = await User.find();
    return users;
}

export const putUser = async (id,obj)=>{
    console.log(id)
    let user = await User.findByIdAndUpdate(id,obj)
    let userUpdated = await User.findById(id);
    return userUpdated;
}

export const deleteUser = async (obj)=>{
    let structure = await User(obj);
    let userCreated = await structure.save(obj);
    return userCreated;
}

