import React from 'react'
import './Product_tile.css'


function Product_tile() {
    
  return (
    <div className='row'>
        <div className='col-md-3 tile_container'>
            <div className='tile' >
                <div className='tile_image'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-half" viewBox="0 0 16 16">
                        <path d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </div>
                <h4>₹ 34,600</h4>
                <p>address</p>

            </div>
        </div>
        

    </div>
    
  )
}

export default Product_tile