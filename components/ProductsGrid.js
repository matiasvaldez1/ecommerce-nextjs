import React, {useEffect,useState} from 'react'
import CardHome from './CardHome'
import Link from 'next/dist/client/link'

export default function ProductsGrid({products}) {
    const [productsPreMap,setProductsPreMap] = useState([])
    const productsMap = productsPreMap && productsPreMap.slice(0,8)

    useEffect(() => {
        if(products){
            setProductsPreMap(products)
            console.log(productsPreMap)
        }
        },[products])
    
    return (
        <div>
        <div className='grid grid-cols-4 gap-12 mx-8 my-32'>
        {productsMap ? productsMap.map(e =>{
            return (
            <CardHome 
            image={e.image}
            price={e.price}
            category={e.category}
            title={e.title}
            rate={e.rating.rate}
            />
            )
        }) : null}
        </div>
        <div className="bg-primary px-4 py-2 w-fit m-auto rounded-sm text-white cursor-pointer hover:opacity-60">
        <Link href="/"><a>View all products</a></Link>
        </div>
        </div>
    )
}
