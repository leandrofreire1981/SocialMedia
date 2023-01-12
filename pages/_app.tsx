import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {//Este componente envuelve a toda la aplicacion por eso aca van los estilos globales
  return <Component {...pageProps} />                           // y por eso tambien lo que se carga en este componente (App), figura en todos lados              
}                                                                 /// y por eso el <head> tambien lo podemos poner aca para limpiar el index
                                                                      