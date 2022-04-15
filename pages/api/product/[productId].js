import { products } from "../../../public/products"

export default function handlerProduct(req, res) {
    const {productId} = req.query
    const productsMock= products.filter(e => e.id === parseInt(productId))
    res.status(200).send(productsMock)
  }
