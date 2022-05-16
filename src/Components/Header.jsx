import React from 'react'
import Carousel from './Carousel'
import Navbar from './Navbar'

const Headser = ({addToCart}) => {
  return (
      <>
      <div className='container'>
    <Navbar addToCart={addToCart} />
    </div>
    <div className='container-fluid p-0'>
    <Carousel />
    </div>
    </>
  )
}

export default Headser