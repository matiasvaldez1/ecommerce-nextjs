import React,{useContext,useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import { CartContext } from '../../context/CartContext';
import {fetchInventory} from '../../controllers/getProducts'
import { fetchProduct } from '../../controllers/getProduct';

export default function ProductById({product}) {
    const {AddItemToCart,cartItems} = useContext(CartContext)
    const [buyed,setBuyed] = useState(false)
    const oneProduct = product[0];

    return (
        <div className='dark:bg-slate-600 dark:text-white'>
        <Navbar />
        <div className='w-5/12 m-auto space-y-2 text-lg pb-12'>
            <h1 className='text-2xl'>{oneProduct.title}</h1>
            <img className='h-full w-full hover:opacity-90' src={oneProduct.image} alt={oneProduct.title}/>
            <p className='underline decoration-red-500'>{oneProduct.category}</p>
            <p className='underline decoration-orange-500 text-xl'>Description:</p>
            <p>{oneProduct.description}</p>
            <p className='underline decoration-green-500 text-2xl py-6 text-center'>Price: ${oneProduct.price}</p>
            <div className='flex justify-center'>
                {buyed ?
                <button disabled className='p-2 bg-red-600 text-white rounded-md hover:opacity-60'>Added to Cart</button>
                :
                <button className='p-2 bg-red-600 text-white rounded-md hover:opacity-60' onClick={() => {AddItemToCart(oneProduct);setBuyed(true)}}>Add to cart</button>}
                </div>
        </div>
        </div>
    )}

export const getStaticPaths = async() =>{
    const data = await fetchInventory()
    const paths = data.map(product =>{return {params:{id:product.id.toString()}}})
    
    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async(context) =>{
    const id = context.params.id
    const data = await fetchProduct(id)

    return {
        props: {product: data}
    }
}
