import Link from 'next/link'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import image from '../public/logo.jpg'

export default function HeroHome() {
  return (
    <>
    <div className='bg-white dark:bg-slate-600 w-10/12 my-[5rem] flex m-auto rounded-md'>
        <div>
            <img className='border-2 rounded-md' src="https://cdn.discordapp.com/attachments/936327021150208030/962937125165207562/unknown.png" alt="image"></img>
        </div>
        <div className='p-16 space-y-28'>
            <p className='text-xl dark:text-white'>In Loudrop store you will find the best products at the best prices, ensuring quality for all our customers.</p>
            <div className='flex justify-center'>
              <Link href={"/products"}>
                <button className='bg-primary px-2 py-1.5 rounded-md text-white mx-auto hover:opacity-25 dark:animate-pulse'>See products</button>
              </Link>
            </div>    
        </div>
    </div>
    </>
  )
}
