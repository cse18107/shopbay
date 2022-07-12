import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Carousel1 from '../../img/carol1.jpg';
import Carousel2 from '../../img/carol2.jpg';
import Carousel3 from '../../img/carol3.jpg';
import Carousel4 from '../../img/carol4.jpg';

const carousel = [Carousel1,Carousel2,Carousel3,Carousel4];

const Home = () => {
  return (
    <div>
      <Carousel slides={carousel}/>
    </div>
  )
}

export default Home