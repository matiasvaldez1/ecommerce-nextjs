import {products} from '../public/products'

export async function fetchProduct(id) {
    const productsMock= products.filter(e => e.id === parseInt(id))
    return Promise.resolve(products)
  }