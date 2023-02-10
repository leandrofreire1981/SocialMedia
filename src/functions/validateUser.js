import axios from "axios"

export default async function validateUser(email){
        let answer = await axios.get(`http://localhost:3000/api/routes/users/${email}`)
        return answer.data
}