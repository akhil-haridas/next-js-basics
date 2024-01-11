import { products } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'

function Products() {
  return (
      <div>{products.map((product) => (
       <Link
      ))}</div>
  )
}

export default Products