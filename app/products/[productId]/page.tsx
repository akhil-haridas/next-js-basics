"use client"

import { useParams } from 'next/navigation'
import React from 'react'

function ProductId() {
    const{ productId } = useParams()
  return (
      <div>{ productId }</div>
  )
}

export default ProductId