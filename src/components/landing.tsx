import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"

const Landing = () =>{

     const session = useSession()
     console.log(session)
    //  if(session) {
    //      return (
    //          <div>
    //              Signed in as {session.user.email} 
    //              <button onClick={()=> signOut()}>Sign out</button>
    //          </div>
    //      )
    //  }
    //  return (
    //      <div>
    //          Not signed in 
    //          <button onClick={()=> signIn()}>Sign in</button>
    //      </div>
    //  )

    const defaultUserData = {
        userName:"",
        password:""
    }

    const [userData, setUserData] = useState(defaultUserData)
    const [loading, setLoading] = useState(false)
   
    const handleChange = (e:any)=>{
        e.preventDefault()
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        console.log(userData)
    },[userData])

    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        if(!userData.userName || !userData.password)return alert("fill each field")
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
                <div className="loginOptionsContainer">
                        <h1>Sign in to Tok Tok</h1>
                    <button onClick={()=> signIn("github")} className="loginButtonGithub">Continue with Github</button>
                    <button className="loginButtonGoogle">Continue with Google</button>
                    <h1>or</h1>
                    <form onSubmit={handleSubmit} className="loginForm">
                        <div className="loginInput">
                            <input onChange={handleChange} type="text" id="create-account-pseudo"  name="userName" placeholder="Email or password" value={userData.userName}/>
                        </div>   
                        <div className="loginInput">                          
                            <input name="password" value={userData.password} onChange={handleChange} type="password" id="create-account-email"  placeholder="password"/>                            
                        </div>
                        {<div>
                        {!loading?
                            <button type="submit" className="logginSubmit">
                                Login
                            </button>:
                            <button type="button" className="logginSubmitLoading">
                                loading
                            </button>}
                        </div>}
                    </form>
                </div>   
            </div>
    )
 }

export default Landing