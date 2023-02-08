import { getSession, signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";

export default function MainPage(){
   
    const {data} = useSession()
    const session = useSession()
    console.log(data)
    
console.log("esto es session", session)
const router = useRouter();

function redirect(){
    router.push("/accounts/signin");
}

if(!session || session.status === "unauthenticated"){
    redirect();
}
// de esta forma funciona la validacion de usuario, pero al ser desde el front tiene que renderizar algo
// si bien es totalmente manejable con un renderizado condicional puede ser y en ese te caso es un efecto que
// uno no esta buscando
    
    return (
    <div>
        <div className="mainProfile">
            {data && data.user.image && <img src={data.user.image}></img>}
            {data && data.user.name && <p>{data.user.name}</p>}
            {data && data.user.email && <p>{data.user.email}</p>}
        </div> 
        <button onClick={()=> signOut()} className="loginButtonGithub">log out</button>
    </div>
    
    )
}

export async function getServerSideProps(context){

    const session = await getSession(context)

    if(!session) return{
        redirect:{
            destination:"accounts/signin",
            permanent: false
        }
    }

    return {
        props:{}
    }
}