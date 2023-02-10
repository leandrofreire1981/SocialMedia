import { signOut } from "next-auth/react"
import { useEffect } from "react"
import profileImage from "../media/profile.png"
import axios from "axios"

export default function Aside({name, email, image}){
  
    //? geting user properties from useSession and validating them with && to
    console.log(image)
    
    useEffect(()=>{
        if(email){
        (async function(){
            console.log("asdasd")
            let answer = await axios.get(`http://localhost:3000/api/routes/users/${email}`)
            console.log("asd",answer)
        })()}
    },[])

    const changePicture = (e)=> {

    }

    return (
    <div>
        <div className="asideContainer">
            {<img className="asideImage" src={image} alt={"profile image"}></img>}
            {<p className="asideName">{name}</p>}
            {<p className="asideEmail">{email}</p>}
            <p>followes</p> 
            <p>following</p> 
            <button onClick={()=> signOut()} className="loginButtonGithub">log out</button>
        </div> 
    </div>
    
    )
}