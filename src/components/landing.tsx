import React, { useEffect, useState } from "react";

const Landing = () =>{
    
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
        <div className="bg-blue-300 grid place-items-center min-h-screen p-10">
            <div className="grid grid-cols-2 gap-4 bg-black min-h-full  max-w-7/12">
                <div className="bg-white border-1 border-cyan-100 w-[100%] h-10">

                </div>
                <div className="bg-red-600 border-1 border-cyan-100 min-w-full h-10">
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
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input type='file' name='profileImage' onChange={handleFileInputChange} className="hover:cursor-pointer:"/>
                            </div>
                            <div>
            
                            </div>
                        </div>
                        {<div className="flex w-full my-4">
                        {!loading?
                            <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Login
                            </button>:
                            <button type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                    </path>
                                </svg>
                                loading
                            </button>}
                        </div>}
                    </form>      
                 <div>
            </div>
        </div>
    </div>
                </div>


            </div>
        </div>
    )
}

export default Landing