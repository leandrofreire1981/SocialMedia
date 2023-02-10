import next, { NextApiRequest, NextApiResponse } from "next";
import { deleteUser, getUser, postUser, putUser } from "../../../../controllers/users.js"

export default async function userRouter (req: NextApiRequest, res: NextApiResponse){

    const method = req.method
    
    switch (method) {
        case "GET":
           
            break;
        case "POST":
           
            break;
        case "PUT":
            try {
                const {email} = req.body;
                 let users = await getUser(email)
                res.status(200).json(users);
            } catch (error) {
                res.status(404).send("something went wrong");
                console.log({error: error});
            }     
            break;    
        case "DELETE":
      
            break;
        default:
            break;
    }
}