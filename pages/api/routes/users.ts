import next, { NextApiRequest, NextApiResponse } from "next";
import { deleteUser, getUser, postUser, putUser } from "../../../controllers/users.js"

export default async function userRouter (req: NextApiRequest, res: NextApiResponse){

    const method = req.method
    
    switch (method) {
        case "GET":
            try {
                // let users = await getUser()
                res.status(200).json("users");
            } catch (error) {
                res.status(404).send("something went wrong");
                console.log({error: error});
            }     
            break;
        case "POST":
            try {
                const body = req.body;
                let users = await postUser(body);
                console.log("asdas");
                res.status(201).json(users);
            } catch (error) {
                res.status(404).send("something went wrong");
                console.log({error: error});
            }
            break;
        case "PUT":
            try {
                let users = await putUser()
                res.status(201).json(users)
            } catch (error) {
                res.status(404).send("something went wrong")
                console.log({error: error})
            }
            break;    
        case "DELETE":
            try {
                let users = await deleteUser()
                res.status(201).json(users)
            } catch (error) {
                res.status(404).send("something went wrong")
                console.log({error: error})
            }
            break;
        default:
            break;
    }
}