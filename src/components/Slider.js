import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import camera from '../imgs/camera.jpeg'
import './slider.css'

export default function Slider() {
  return (
    <>
      <div className='m-auto text-center'>
      <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><img className='w-100 height-200px' src={camera} alt=''></img></SwiperSlide>
      <SwiperSlide><img className='w-100 height-200px' src={camera} alt=''></img></SwiperSlide>
      <SwiperSlide><img className='w-100 height-200px' src={camera} alt=''></img></SwiperSlide>
      <SwiperSlide><img className='w-100 height-200px' src={camera} alt=''></img></SwiperSlide>
      
    </Swiper>

      </div>

    </>
  
  )
}
