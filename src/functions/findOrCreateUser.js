import axios from "axios"

//? this function is going to try to find the user with its email
// for now, if we dont't find the user we are goin to continue with the data from foogle or github and when 
//the user it's gonna need to store data into our data base then we are gonna save them using their email like reference

export async function getOrCreate(email){
    try {       
        let user = await axios.get("http://localhost:3000/api/routes/users",{email});
        if(!user.length){
            throw ("not user yet")
        }
            return user
        } catch (error) {
            return error
        }
     return user
}