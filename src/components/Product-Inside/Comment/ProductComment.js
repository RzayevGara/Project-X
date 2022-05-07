import React from 'react'
import Comment from './Comment'
import CommentForm from './CommentFrom'

function ProductComment() {
  return (
    <div className="product-comment">
        <Comment/>
        <Comment/>
        <CommentForm/>
    </div>
  )
}

export default ProductComment