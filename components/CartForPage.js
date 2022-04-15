import React,{useContext} from 'react'
import CardCheckout from './CardCheckout'
import { CartContext } from '../context/cartContext'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Link from 'next/link'

export default function CartForPage() {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='dark:bg-slate-500 h-screen'>
      <Navbar />
      {cartItems && cartItems.map(item => {
        return <CardCheckout key={item.title} item={item}/>
      })}
      <div className="bg-blue-400 p-2 w-fit m-auto mt-12 text-white hover:opacity-70">
        <Link href={"/checkout"}>Go to checkout</Link>
      </div>
    </div>
  )
}
