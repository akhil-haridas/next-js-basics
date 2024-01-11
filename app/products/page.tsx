import { products } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

function Products() {
  return (
      <div>{products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
             <div key={product.id}>
              <h1 className='font-bold text-2xl'>{product.name}</h1>
              <h2 className='font-bold text-3xl'>{ product.price }</h2>
          </div></Link>
      ))}</div>
  )
}

export default Products