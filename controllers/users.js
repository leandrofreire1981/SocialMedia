import { User } from "/models/User.js"

export const postUser = async (obj)=>{
    let structure = await User(obj);
    let userCreated = await structure.save(obj);
    return userCreated;
}

export const getUser = async (obj)=>{
    let users = await User.find();
    console.log(users)
    return users;
}

export const putUser = async (id,obj)=>{
    let user = await User.findByIdAndUpdate(id,obj)
    let userUpdated = await User.findById(id);
    return userUpdated;
}

export const deleteUser = async (obj)=>{
    let structure = await User(obj);
    let userCreated = await structure.save(obj);
    return userCreated;
}