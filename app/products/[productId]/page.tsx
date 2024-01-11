import React from 'react'

interface paramsType {
    params : { productId : string }
}

function ProductId({ params }: paramsType) {
    console.log(params.productId)

    const id: number = parseInt(params.productId)
    
  return (
      <div>ProductId : { params.productId }</div>
  )
}

export default ProductId