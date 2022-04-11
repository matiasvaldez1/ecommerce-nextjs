import Link from 'next/link'
import React, {useState} from 'react'

export default function CardHome({title,price,category,image,rate}) {
  return (
      <>
    <div className='flex-col justify-center space-y-4 text-center'>
        <img src={image} className="aspect-[2/2]" />
            <div className='flex bg-primary w-fit divide-x-2 shadow-red-200 shadow-xl m-auto hover:opacity-75'>
                <button className='bg-primary px-4 py-2 rounded-sm text-white cursor-pointer'>${price}</button>
                <p className='my-auto p-2 rounded-sm'>🛒</p>
            </div>
            <h1>{title}</h1>
            <p>{category}</p>
            <p>{rate}</p>
    </div>
    </>
  )
}
