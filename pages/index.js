import handler from "./api/productslist"
import axios from "axios"
import Navbar from "../components/Navbar"
import ProductsGrid from "../components/ProductsGrid"
import HeroHome from "../components/HeroHome"

export default function App({products}) {
  console.log(products)
  return (
    <>
    <Navbar/>
    <HeroHome />
    <ProductsGrid products={products}/>
    </>
  )
}
export async function getStaticProps(){
  const res = await axios.get('http://localhost:3000/api/productslist')
  const products = await res.data

  return {
    props: {
      products
    }
  }
}
