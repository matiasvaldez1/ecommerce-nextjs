import Link from 'next/link'
import React, {useState,useContext} from 'react'
import {CartContext} from '../context/CartContext'
import { toast,ToastContainer } from 'react-toastify'

export default function CardHome({title,price,category,image,rate,product,id}) {
  const {AddItemToCart} = useContext(CartContext)
  const notify = () =>{
  toast.success("Success Notification !", {
    position: toast.POSITION.TOP_CENTER
  })
};

  return (
      <>
    <div className='flex-col justify-center space-y-4 text-center dark:text-white'>
      <Link href={"/product/" + id}>
        <img src={image} className="aspect-[2/2] hover:opacity-60 cursor-pointer" />
      </Link>
            <div className='flex bg-primary w-fit dark:shadow-red-200 dark:shadow-md shadow-red-200 shadow-xl m-auto hover:opacity-75 active:translate-y-1'>
                <button onClick={() => {AddItemToCart(product); notify()}} className='flex divide-x-2'>
                  <div className='bg-primary px-4 py-2 rounded-sm text-white cursor-pointer'>${price}</div>
                  <p className='my-auto p-2 rounded-sm'>🛒</p>
                </button>
            </div>
            <h1 className='max-h-32'>{title}</h1>
            <p>{category}</p>
            <p>⭐{rate}</p>
    </div>
    </>
  )
}
