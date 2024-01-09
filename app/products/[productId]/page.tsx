import React from "react";

type paramsType = {
    params: {
        productId : string
    }
    
}

function ProductId({ params }: paramsType) {
  console.log(params);
    return <div>ProductId { params.productId }</div>;
}

export default ProductId;
