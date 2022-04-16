import React,{useContext} from 'react'
import CardCheckout from './CardCheckout'
import { CartContext } from '../context/CartContext'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Link from 'next/link'

export default function CartForPage() {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='dark:bg-slate-500 dark:text-white h-screen'>
      <Navbar />
      {cartItems.length > 0 ? cartItems.map(item => {
        return <CardCheckout key={item.title} item={item}/>
      })
    : <h1 className='text-center my-12 text-2xl'>Your cart is empty☹</h1>
    }
    {cartItems.length > 0 ?
      <div className="bg-blue-400 p-2 w-fit m-auto mt-12 text-white hover:opacity-70">
        <Link href={"/checkout"}>Go to checkout</Link>
      </div>
      : 
      <div className="bg-red-600 p-2 w-fit m-auto mt-12 text-white hover:opacity-70">
        <Link href={"/"}>Go to Home</Link>
      </div>}
    </div>
  )
}
