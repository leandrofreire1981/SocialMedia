import { User } from "../models/User.js"

export const postUser = async (obj)=>{
    let structure = await User(obj);
    let userCreated = await structure.save(obj);
    return userCreated;
}

export const getUser = async (obj)=>{
    let structure = await User(obj);
    let userCreated = await structure.save(obj);
    return userCreated;
}

export const putUser = async (obj)=>{
    let structure = await User(obj);
    let userCreated = await structure.save(obj);
    return userCreated;
}

export const deleteUser = async (obj)=>{
    let structure = await User(obj);
    let userCreated = await structure.save(obj);
    return userCreated;
}