import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import CartProvider from '../context/CartContext'
import Footer from '../components/Footer'
import axios from 'axios'

/* axios.defaults.baseURL = process.env.NEXT_APP_URL || "http://localhost:3000"; */

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </SessionProvider>
  )
}