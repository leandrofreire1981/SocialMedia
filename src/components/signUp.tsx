import { profile } from "console"
import React, { useEffect } from "react"
import {useState} from "react";
import placeHolderImage from "../media/profile.png"


const SignUp = () =>{

    const defaultUserData = {
        userName:"",
        name:"",
        lastName:"",
        email:"",
        birthDate:"",
        profileImage:false
    }

    const [userData, setUserData] = useState(defaultUserData)
    const [loading, setLoading] = useState(false)
   

    const handleChange = (e:any)=>{
        e.preventDefault()
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    function handleFileInputChange(e:any) {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0]) 
        reader.onloadend =  () => {
          setUserData({...userData, [e.target.name]: reader.result})
        }    
    }

    useEffect(()=>{
        console.log(userData)
    },[userData])

    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        if(!userData.userName&& !userData.name&&  !userData.lastName&&!userData.email&& !userData.birthDate)return alert("fill each field")
        setLoading(true)
        let answer = await fetch("http://localhost:3000/api/routes/users",{
            method: "POST",
            headers: {
                "content-Type": "application/json"
                },
            body: JSON.stringify(userData)
            })
            .then(a => a.json())
            .then(b => {
                 if(b !== "ok") throw new Error("error")
                 setUserData(defaultUserData)
                 return "nice"
        })
        .catch(error=>{
            return "something went wrong"
        })
        setLoading(false)

    }

    return( 
        <div className="loginContainer">
            <div className="formItem">
                <div className="loginTextContainer">
                    <h2>Create a new account</h2>
                    <span>
                    Already have an account ?
                    <a href="#" target="_blank">
                        Sign in
                    </a>
                </span>
                </div>
               
                <form onSubmit={handleSubmit} className="loginForm">
                    <div className="loginInput">
                        <input onChange={handleChange} type="text" id="create-account-pseudo"  name="userName" placeholder="Pseudo" value={userData.userName}/>
                    </div>
                    <div className="loginInput name">    
                        <input value={userData.name} onChange={handleChange} type="text" id="create-account-first-name" name="name" placeholder="First name"/>
                    </div>
                    <div className="loginInput name">                          
                        <input value={userData.lastName} onChange={handleChange} type="text" id="create-account-last-name"  name="lastName" placeholder="Last name"/>     
                    </div>
                    <div className="loginInput">                          
                        <input name="email" value={userData.email} onChange={handleChange} type="text" id="create-account-email"  placeholder="Email"/>                            
                    </div>
                    <div className="loginInput">           
                        <input name="birthDate" value={userData.birthDate} onChange={handleChange} type="date"  />
                    </div>
                    <div className="loginInput">
                        <input type='file' name='profileImage' onChange={handleFileInputChange} className="hover:cursor-pointer:"/>
                    </div>
                    {<div>
                    {!loading?
                        <button type="submit">
                            Login
                        </button>:
                        <button type="button">
                            loading
                        </button>}
                    </div>}
                </form>      
            </div>
        </div>
    )
}

export default SignUp