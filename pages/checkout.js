import React,{useEffect,useContext} from 'react'
import {CartContext} from '../context/CartContext'
import NavBar from '../components/Navbar'
import CardCheckout from '../components/CardCheckout'
import { useRouter } from 'next/router'

export default function CartPage() {
    const {cartItems}= useContext(CartContext)
    const router = useRouter()
    
    const handleRedirect = () =>{
      setTimeout(() => {
        router.push("/status")
      }, 3000);
      window.localStorage.removeItem("cartProducts")
    }
    useEffect(() => {
      if(cartItems.length === 0){
      router.push("/")}
    }, [cartItems])
    
    const total = cartItems?.reduce(
      (previous, current) => previous + current.amount * current.price,
      0
    ).toFixed(2);
    
  return (
        <div className='dark:bg-slate-600 h-screen dark:text-white'>
            <NavBar />
            <h1 className='text-3xl mx-12 my-12 sm:my-2'>Checkout Page</h1>
            <div className='flex-col sm:grid sm:grid-cols-4'>
                <div className='col-span-3 p-4'>
                  {cartItems && cartItems.map(item => {
                    return <CardCheckout key={item.title} item={item}/>
                  })}
                </div>
                <div className='border-2 mr-4 sm:h-[450px] flex flex-col gap-2'>
                  <h1 className='text-3xl flex justify-center'>Overview</h1>
                  {cartItems && cartItems.map(price => {
                    return (
                      <>
                        <h1>{price.title}</h1>
                        <h1 className='text-lg'>${price.amount * price.price}</h1>
                      </>
                    )
                  })}
                  <h1 className='text-lg'>Shipping Cost: Free</h1>
                  <h1 className='text-xl'>Total: ${total}</h1>
                  <button onClick={() => handleRedirect()} className='bg-blue-600 text-white px-4 py-1 rounded-md active:translate-y-1'>Pay</button>
                </div>
            </div>
        </div>
  )
}
