import { products } from '@/utils/constants'
import React from 'react'

interface paramsType {
    params : { productId : string }
}

function ProductId({ params }: paramsType) {
    console.log(params.productId)

    const id: number = parseInt(params.productId)
    
    let product = products[id]

    
  return (
      <div>
          <h1 className='font-bold'>{product.name}</h1>
          <h2 className='font-bold'>{ product.price}</h2>
      </div>
  )
}

export default ProductId