import React,{useContext} from 'react'
import { CartContext } from '../context/cartContext'

export default function CardCheckout({item}) {
  const {DeleteItemToCart} = useContext(CartContext)

  return (
    <>
      <div className='flex flex-row bg-gray-100 dark:bg-gray-400 w-full'>
        <div>
          <img className='h-32 w-32' src={item.image}/>
        </div>
        <div className='px-4'>
          <h1>{item.title}</h1>
          <p>${item.price}</p>
          <p>Amount: {item.amount}</p>
          <p>Total: ${item.price * item.amount}</p>
        </div>
        <div className='block justify-end'>
          <button onClick={() => DeleteItemToCart(item.id)}>❌</button>
        </div>
      </div>
      <hr/>
    </>
  )
}