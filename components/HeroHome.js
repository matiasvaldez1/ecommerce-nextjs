import React from 'react'
import image from '../public/logo.jpg'

export default function HeroHome() {
  return (
    <div className='bg-white w-10/12 my-[5rem] flex m-auto rounded-md'>
        <div>
            <img className='border-2 rounded-md' src="https://cdn.discordapp.com/attachments/936327021150208030/962937125165207562/unknown.png" alt="image"></img>
        </div>
        <div className='p-16 space-y-28'>
            <p className='text-xl'>In Loudrop store you will find the best products at the best prices, ensuring quality to all of our customers</p>
            <div className='flex justify-center'>
                <button className='bg-primary p-4 rounded-md text-white mx-auto hover:opacity-25'>See products</button>
            </div>    
        </div>
    </div>
  )
}
