import Navbar from "../components/Navbar"
import ProductsGrid from "../components/ProductsGrid"
import HeroHome from "../components/HeroHome"
import { useSession } from "next-auth/react"
import CartContext from "../context/CartContext"
import Footer from "../components/Footer"
import { fetchInventory } from "../controllers/getProducts"

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
  const products = await fetchInventory()
  return {
    props: {
      products
    }
  }
}
