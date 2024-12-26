import React, { useEffect, useState } from 'react'
import styles from './productslide.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Navigation  } from 'swiper/modules';

import pic from '../../assets/pics/rent.jpg'
import pic2 from '../../assets/pics/rent1.jpg'
import pic3 from '../../assets/pics/rent2.jpg'
import pic4 from '../../assets/pics/meret.jpg'
import pic5 from '../../assets/pics/meret1.jpg'
import pic6 from '../../assets/pics/1.jpg'

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Title from '../title/Title';

const ProductSlide = () => {
    const galleryData=[
        {
          "id": 1,
      "description": "የሚከራይ 40/60 ኮንዶሚኒየም ........አምስት ዓመት የሞላው..............ቦታ አያት 49 አደባባይ ...........ባለ3 መኝታ.........8 ኛፎቅ ..........ምቹ የሆነ አካባቢ..............105 ካሬ ሜትር ",
      "name": "ኮንዶሚኒየም",
      "type":'ኪራይ',
      "pic": pic
        },
        {
          "id": 2,
      "name": "አፓርታማ",
      "type":'ኪራይ',
      "pic": pic2,
      "description": "ኪራይ 40/60 ......መሪ ሎቄ ........ደረጀ 9 ነኛ ............ባለ2 ምኝታ 83 ካሬ ............ድጅታል ካርታ"
    
        },
        {
          "id": 3,
      "name": "ኮንዶሚኒየም",
      "type":'ኪራይ',
      "pic": pic3,
      "description": "የሚከራይ 40/60 ሀያት 2 ...ቦታ አያት 49 አደባባይ .......ደረጃ4ኛ ፎቅ .........76  ካሬ ሜትር  ..........ባለ2ምኝታ........ዲጅታል ካርታ 5ዓመት የሞላው"
    
        },
        {
         "id": 4,
      "name": "መሬት",
      "type":'መሬት',
      "pic": pic4,
      "description": "የሚሸጥ መሬት..........ሀያት አየር መንገድ አካባቢ...........350 ካሬ"
   
        },
        {
          "id": 5,
      "name": "መሬት",
      "type":'መሬት',
      "pic": pic5,
      "description": "ሽያጭ መሬት ........ ቦታ ሀያት2 ሳይት4..........86ካሬ ሜትር"
   
        },
        {
          "id": 6,
      "name": "አፓርታማ ",
      "type":'አፓርታማ',
      "pic": pic6,
      "description": "አስቸኳይ ሽያጭ 40/60........................ ባለ 3 መኝታ........................... 72  ካሬ ደረጃ 9 ኛ ያገባ እጣ የደረሰዉ .....................መሸጫ ዋጋ  3,000,000"
        },
      ]
      
      const [currentSlideIds, setCurrentSlideIds] = useState([]);
      const [middleItemId, setMiddleItemId] = useState(null);

      const handleSlideChange = (swiper) => {
        const { activeIndex, slides } = swiper;
        const visibleSlideIds = slides
          .filter((slide, index) => index >= activeIndex && index < activeIndex + swiper.params.slidesPerView)
          .map((slide) => parseInt(slide.getAttribute('data-id'), 10));
    
        setCurrentSlideIds(visibleSlideIds);
      };
    
      useEffect(() => {
        if (currentSlideIds.length > 0) {
          const middleIndex = Math.floor(currentSlideIds.length / 2);
          setMiddleItemId(currentSlideIds[middleIndex]);
        } else {
          setMiddleItemId(null);
        }
      }, [currentSlideIds]);
    

  // const getCurrentVisibleItemIds = () => {
  //   return currentSlideIds;
  // };

  return (
    <div className={styles.cont}>
          <Title mainTitle={'Featured Services'} subTitle={"CHECK OUT OUR PRODUCTS AND SERVICE"}/>
          <div className={styles.list}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            onSlideChange={handleSlideChange} 
            loop={true}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.50': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@0.75': {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
            modules={[Autoplay,Navigation ]}
        className={styles.myswiper}
      >
        {galleryData.map((l)=>(
            <SwiperSlide className={styles.slide} key={l.id} data-id={l.id}>
            <div className={middleItemId===l.id ?styles.activeitembox:styles.itembox} >
                <img className={styles.itemimg} src={l.pic} alt={l.name}/>
                <div className={styles.itemtxt}>
                    <span className={styles.itemtitle}>{l.name}</span>
                    <span className={styles.itemdes}>{l.description}</span>
                </div>
            </div>
            
        </SwiperSlide>
        ))}
        <div className={styles.customNavigation}>
              <FaAngleLeft className={styles.navbtnl}/>
              <FaAngleRight className={styles.navbtnr}/>
          </div>
      </Swiper>

          </div>
    </div>
  )
}

export default ProductSlide