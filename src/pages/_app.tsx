import type { AppProps } from 'next/app'
import 'styles/imports.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
