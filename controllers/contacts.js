import { User } from "../models/User"

export const followUser = async(user, following)=>{
   await User.findByIdAndUpdate(user,{
        contacts:{
            $push:{
                following:{following}
            }
        }
    })
    let updatedUser = await user.findById(user)
    return updatedUser

}