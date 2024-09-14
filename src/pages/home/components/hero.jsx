import React from 'react'
import { heroData } from '../../../serive-data'
import { HeroCard } from '../../../components/hero-card'
import { Carousel } from 'antd';

export const Hero = () => (
  <Carousel autoplay>
    {heroData.map((item) => (
      <div key={item.id}>
        <HeroCard {...item} />
      </div>
    ))}
  </Carousel>
);
