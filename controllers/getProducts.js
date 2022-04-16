import {products} from '../public/products'

export async function fetchInventory() {
    // const inventory = API.get(apiUrl)
    return Promise.resolve(products)
  }