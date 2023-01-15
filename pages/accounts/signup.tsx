import dbConnect from "lib/dbConnect";
import SignUp from "src/components/signUp";

export default function register(){
    return(
        <div>
            <SignUp />
        </div>
    )
}

export async function getServerSideProps(){
    try {
      await dbConnect()
      return {props:{a:"asdasd"}}
    } catch (error) {
      console.log('error: ', error)
    }
  }