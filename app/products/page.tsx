import { products } from '@/utils/constants'
import React from 'react'

function Products() {
  return (
      <div>{products.map((product) => (
          <div key={product.id}>
              <h1 className='font-bold text-2xl'>{product.name}</h1>
              <h2 className='font-bold text-3xl'>{ product.price }</h2>
          </div>
      ))}</div>
  )
}

export default Products