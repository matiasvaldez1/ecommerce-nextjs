import handler from "./api/productslist"
import axios from "axios"
import Navbar from "../components/Navbar"
import ProductsGrid from "../components/ProductsGrid"
import HeroHome from "../components/HeroHome"
import { useSession } from "next-auth/react"
import CartContext from "../context/CartContext"
import Footer from "../components/footer"
import { NEXT_URL } from "../config/config"

export default function App({products}) {
  return (
    <div className="dark:bg-slate-600">
    <Navbar />
    <HeroHome />
    <ProductsGrid products={products}/>
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
