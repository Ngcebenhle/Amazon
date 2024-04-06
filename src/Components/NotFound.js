import React from 'react'
import './NotFound.css'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not_found'>
        {/* <h1>
          NotFound 404 Page
        </h1>
         */}
       <Link to='/'>

       <div>
            <img
            className='img_top'
            src='https://image-na.ssl-images-amazon.com/images/G/01/
                 error/title._TTD_.png'
                 />
        </div>

         <div>
         <img
            src='https://image-na.ssl-images-amazon.com/images/G/01/
                 error/title._TTD_.png'
                 />
         </div>
       </Link>
         
    </div>
  )
}

export default NotFound;