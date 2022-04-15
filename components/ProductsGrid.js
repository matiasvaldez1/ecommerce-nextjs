import React, {useEffect,useState} from 'react'
import CardHome from './CardHome'
import Link from 'next/dist/client/link'

export default function ProductsGrid({products}) {
    const [productsPreMap,setProductsPreMap] = useState([])
    const productsMap = productsPreMap && productsPreMap.slice(0,8)

    useEffect(() => {
        if(products){
            setProductsPreMap(products)
        }
        },[products])
    
    return (
        <div id='products'>
            <h1 className='text-4xl font-medium my-12 sm:ml-12 dark:text-white'><a className='text-red-400 dark:text-red-600'>Some</a> of our products..</h1>
                <div className='grid grid-cols-4 gap-12 mx-8 mb-32'>
                {productsMap ? productsMap.map(e =>{
                    return (
                    <CardHome 
                    key={e.title}
                    product={e}
                    image={e.image}
                    price={e.price}
                    category={e.category}
                    title={e.title}
                    rate={e.rating.rate}
                    />
                    )
                }) : null}
                </div>
            <div className="bg-primary px-4 py-2 w-fit m-auto animate-bounce rounded-sm text-white cursor-pointer hover:opacity-60">
                <Link href="/products"><a>View all products</a></Link>
            </div>
        </div>
    )
}
