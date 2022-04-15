import React,{useContext,useState,useEffect} from 'react'
import NavBar from '../components/Navbar'
import { CartContext } from '../context/CartContext'
import Link from 'next/link'
import CardHome from '../components/CardHome'
import axios from 'axios'
import Footer from '../components/Footer'
import { NEXT_URL } from '../config/config'

export default function Products({products}) {
    const [productsState,setProductsState] = useState(products)
    const [type,setType] = useState("")
    const [typeR,setTypeR] = useState("")
    const [typeAZ,setTypeAZ] = useState("")

    const handlePrice = (e) =>{
        if(e.target.value === "asc"){
            setProductsState(() => productsState.sort(function(a,b){
                if(a.price > b.price) return 1
                if(a.price < b.price) return -1
                return 0
            }))
            setType(e.target.value)
        }else{
            setProductsState(() => productsState.sort(function(a,b){
                if(a.price < b.price) return 1
                if(a.price > b.price) return -1
                return 0
            }))
            setType(e.target.value)
        }     
    }

    const handleRating = (e) =>{
        if(e.target.value === "ascR"){
            setProductsState(() => productsState.sort(function(a,b){
                if(a.rating.rate > b.rating.rate) return 1
                if(a.rating.rate < b.rating.rate) return -1
                return 0
            }))
            setTypeR(e.target.value)
        }else{
            setProductsState(() => productsState.sort(function(a,b){
                if(a.rating.rate < b.rating.rate) return 1
                if(a.rating.rate > b.rating.rate) return -1
                return 0
            }))
            setTypeR(e.target.value)
        }     
    }

    const handleAZ = (e) =>{
        if(e.target.value === "ascAZ"){
            setProductsState(() => productsState.sort(function(a,b){
                if(a.title > b.title) return 1
                if(a.title < b.title) return -1
                return 0
            }))
            setTypeAZ(e.target.value)
        }else{
            setProductsState(() => productsState.sort(function(a,b){
                if(a.title < b.title) return 1
                if(a.title > b.title) return -1
                return 0
            }))
            setTypeAZ(e.target.value)
        }     
    }

    return (
        <div className='dark:bg-slate-600 h-full'>
        <NavBar />
        <div className='w-full h-8 bg-red-400 dark:bg-slate-500 flex justify-evenly text-white'>
            <select className='bg-red-400 border-2 border-red-500 dark:bg-transparent dark:border-0' onChange={(e) => handlePrice(e)}>
                <option selected disabled>Order by Price</option>
                <option value="asc">Asc</option>
                <option value="des">Desc</option>
            </select>
            <select className='bg-red-400 border-2 border-red-500 dark:bg-transparent dark:border-0' onChange={(e) => handleRating(e)}>
                <option selected disabled>Order by Rating</option>
                <option value="ascR">Asc</option>
                <option value="desR">Desc</option>
            </select>
            <select className='bg-red-400 border-2 border-red-500 dark:bg-transparent dark:border-0' onChange={(e) => handleAZ(e)}>
                <option selected disabled>Order A-Z</option>
                <option value="ascAZ">Asc</option>
                <option value="desAZ">Desc</option>
            </select>
        </div>
        <div className='grid grid-cols-5 gap-4 m-8'>
            {productsState && productsState.map(e => {
                return (
                    <CardHome 
                    key={e.title}
                    product={e}
                    image={e.image}
                    price={e.price}
                    category={e.category}
                    title={e.title}
                    rate={e.rating.rate}
                    id={e.id}
                    />
                )
            })}
        </div>
        <Footer />
        </div>
    )
}

export async function getStaticProps(){
    const res = await axios.get(`${NEXT_URL}/api/productslist`)
    const products = await res.data
  
    return {
      props: {
        products
      }
    }
  }
