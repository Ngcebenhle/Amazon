import React from 'react'
import {Route} from 'react-router-dom'
import './Home.css'
import Products from './Products'

const Home = () => {
  return (
    <div className='home'>

            {/* <h1>Home page</h1>
            <Route path = '/home/username'>
                <p> Welcome Username</p>
            </Route> */}
          
          <div className='home_contaner'>
              <img
              className='home_image'
              src='https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg' 
              alt=''/>

              <Products/>
          </div>
         

    </div> 
  )
}

export default Home