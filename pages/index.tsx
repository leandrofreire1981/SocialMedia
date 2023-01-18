import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import dbConnect from '../lib/dbConnect.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>    
      <Head>
        <title>Leangram</title>       {/* titulo de la pestaña por defecto siempre y cuando la pagina donde estemos no tenga head */}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        hola
      </main>
    </>
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
