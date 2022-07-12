import React,{useEffect, useState} from 'react'
import CarouselItem from './CarouselItem/CarouselItem';
import './Carousel.css';

const Carousel = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(3);

    useEffect(()=>{
        const slideInterval = setInterval(()=>{
            setCurrentSlide((currentSlide)=>currentSlide<slides.length-1?currentSlide+1:0)
        },3000);

        return (()=>clearInterval(slideInterval))
    },[])

  return (
    <div className='carousel'>
        <div className='carousel-inner' style={{transform:`translateX(${-currentSlide*100}%)`}}>
            {slides.map((slide,index)=>{
                return <CarouselItem slide={slide} key={index}/>
            })}
        </div>
    </div>
  )
}

export default Carousel