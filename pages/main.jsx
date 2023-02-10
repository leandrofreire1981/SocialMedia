import { getSession, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import dbConnect  from "../lib/dbConnect"
import Aside from "../src/components/aside";
import validateUser from "../src/functions/validateUser";

export default function MainPage({name, email, image}){
  
    //? geting user properties from useSession and validating them with && to

    const changePicture = ()=> {
        
    }

    return (
    <div>
        <Aside name={name} email={email} image={image}></Aside>
    </div>
    
    )
}

export async function getServerSideProps(context){

    try {
        await dbConnect()
      } catch (error) {
        console.log('error:', error)
      }
    
    const session = await getSession(context)

    if(!session) return{
        redirect:{
            destination:"accounts/signin",
            permanent: false
        }
    }

    let user = await validateUser(session.user.email)
    
    return {
        props:{...user.data}
    } 
}