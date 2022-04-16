import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import CartProvider from '../context/CartContext'
import Footer from '../components/Footer'
import axios from 'axios'

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