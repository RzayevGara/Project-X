import React from 'react'
import Rating from '@mui/material/Rating';

function Comment() {
  return (
    <div className="comment">
        <div className="comment-rating">
            <p>4</p>
            <Rating name="read-only" value={4} size="large" readOnly />
        </div>
        <div className="comment-user">
            <p className="user-name">Gunel Mammadova</p>
            <p className="user-product">Yaddaş - 64, Rəng - Qara</p>
            <p className="user-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh tortor sit. Consectetur sit auctor odio quis suspendisse tincidunt quis. Et tristique amet aenean nibh porttitor quis aliquam integer. Consectetur lacus, volutpat malesuada libero. Sollicitudin libero pharetra a.</p>
        </div>
    </div>
  )
}

export default Comment