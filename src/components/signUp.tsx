import React, { useEffect } from "react"
import {useState} from "react"


const SignUp = () =>{

    const defaultUserData = {
        userName:"",
        name:"",
        lastName:"",
        email:"",
        birthDate:""
    }

    const [userData, setUserData] = useState(defaultUserData)

   

    const handleChange = (e:any)=>{
        e.preventDefault()
        setUserData({...userData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e:any)=>{
        e.preventDefault()
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
        alert(answer)

    }

    return(      
            <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Create a new account
                </div>
                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account ?
                    <a href="#" target="_blank" className="text-sm text-blue-500 underline hover:text-blue-700">
                        Sign in
                    </a>
                </span>
                <div className="p-6 mt-8">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input  onChange={handleChange} type="text" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="userName" placeholder="Pseudo" value={userData.userName}/>
                            </div>
                        </div>
                        <div className="flex gap-4 mb-2">
                            <div className=" relative ">
                                <input value={userData.name} onChange={handleChange} type="text" id="create-account-first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" placeholder="First name"/>
                            </div>
                            <div className=" relative ">
                                    <input value={userData.lastName} onChange={handleChange} type="text" id="create-account-last-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="lastName" placeholder="Last name"/>
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input name="email" value={userData.email} onChange={handleChange} type="text" id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                                </div>
                            </div>
                        <div className="flex flex-col mb-2">
                        <div className=" relative ">
                            <input name="birthDate" value={userData.birthDate} onChange={handleChange} type="date"  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
                            </div>
                        </div>
                        <div className="flex w-full my-4">
                            <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Login
                            </button>
                        </div>
                    </form>      
                 <div>
            </div>
        </div>
    </div>


    )
}

export default SignUp