import '../styles/styles.scss'
import  { SessionProvider } from "next-auth/react"

function App({
   Component,
    pageProps:{ session, ...pageProps}
}) {
//Este componente envuelve a toda la aplicacion por eso aca van los estilos globales

return(
    <SessionProvider session={session}>
        <Component {...pageProps} />   
    </SessionProvider>
  )
                           
}            

export default App
// y por eso tambien lo que se carga en este componente (App), figura en todos lados              
/// y por eso el <head> tambien lo podemos poner aca para limpiar el index
                                                                      