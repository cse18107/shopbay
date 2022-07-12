import React from 'react'

const CarouselItem = ({slide}) => {
  return (
    <div className='carousel-item'>
        <img style={{width:"100%"}} src={slide} alt='slide'/>
    </div>
  )
}

export default CarouselItem