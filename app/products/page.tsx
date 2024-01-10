import { products } from '@/utils/constants'
import React from 'react'

function Products() {
  return (
      <div>{products.map((product) => (
          <div key={product.id}>
              <h1>{product.name}</h1>
              <h2>{ product.price }</h2>
          </div>
      ))}</div>
  )
}

export default Products