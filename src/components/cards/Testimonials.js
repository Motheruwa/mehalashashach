import React from 'react'
import styles from './testimonials.module.css'
import TestmonialCard from './TestmonialCard'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Title from '../title/Title';

const Testimonials = () => {

  const testimonialsData=[
    {
      "id": 1,
      "name": "John Smith",
      "rate": 4,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 2,
      "name": "Sarah Johnson",
      "rate": 5,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 3,
      "name": "Michael Thompson",
      "rate": 2,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 4,
      "name": "Emily Wilson",
      "rate": 5,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 5,
      "name": "Daniel Lee",
      "rate": 4.5,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 6,
      "name": "Sophia Rodriguez",
      "rate": 3,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 7,
      "name": "David Chen",
      "rate": 5,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 8,
      "name": "Olivia Brown",
      "rate": 4.5,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 9,
      "name": "Liam Wilson",
      "rate": 4,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
    {
      "id": 10,
      "name": "Ava Thompson",
      "rate": 3,
      "note":"em, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi liem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiiem, ipsum dolor sit amet consectetur adipisicing elit. Error dolorem sequi libero in blanditiibero in blanditiis eveniet ipsa aspernatur architecto corporis odio!"
    },
  ]
  
  return (
    <div className={styles.cont}>
          <Title mainTitle={'Testimonials'} subTitle={"Feedback from our clients"}/>
          <div className={styles.lists}>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay, Pagination]}
        className={styles.myswiper}
      >
        {testimonialsData.map((l)=><SwiperSlide className={styles.slide} key={l.id}><TestmonialCard key={l.id} {...l}/></SwiperSlide>)}
      </Swiper>
          </div>
        </div>
  )
}

export default Testimonials