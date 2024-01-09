import React from "react";

function ProductId({ params }: { params: { productId: string } }) {
  console.log(params);
  return <div>ProductId</div>;
}

export default ProductId;
