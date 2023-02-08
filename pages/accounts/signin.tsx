import dbConnect from "lib/dbConnect";
import { getSession } from "next-auth/react";
import Landing from "../../src/components/landing";

export default function signIn(){
    return(
        <div>
            <Landing />
        </div>
    )
}

export async function getServerSideProps(context:any){

    const session = await getSession(context)

    if(session) return{
        redirect:{
            destination:"http://localhost:3000/main",
            permanent: false
        }
    }

    return {
        props:{}
    }
}