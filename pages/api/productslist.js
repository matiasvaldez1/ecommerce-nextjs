import { products } from "../../public/products"

export default function handler(req, res) {
  res.status(200).json(products)
}
