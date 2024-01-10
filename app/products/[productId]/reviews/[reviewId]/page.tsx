import React from "react";

function ReviewId({
  params,
}: {
  params: { productId: string; reviewId: string };
    }) {
    
    const { productId, reviewId } = params
    
    return <div>ProductID : { productId} ReviewId : { reviewId}</div>;
}

export default ReviewId;
