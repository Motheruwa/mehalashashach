import React from 'react'
import ProductCard from './ProductCard'
import styles from './servicereview.module.css'
import { NavLink } from 'react-router-dom'
import pic from '../../assets/pics/1.jpg'
import pic4 from '../../assets/pics/6.jpg'
import pic5 from '../../assets/pics/3bb.jpg'
import Title from '../title/Title'

const ServiceReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const servies = [
    {
      "id": 1,
      "name": "Apartments",
      "pic": pic,
      "description": "አስቸኳይ ሽያጭ 40/60........................ ባለ 3 መኝታ........................... 72  ካሬ ደረጃ 9 ኛ ያገባ እጣ የደረሰዉ .....................መሸጫ ዋጋ  3,000,000"
    },
    {
      "id": 2,
      "name": "Condominium",
      "pic": pic4,
      "description": "አያት ሆሴ እሪል እስቴት ውስጥ የሚሸጥ.........82 ካሬ 2 መኝታ ቤት.......ምርጥ ተደርጎ የተሰራ.......2 ኛ ላይ ሙሉ 24 የሚሰራ stand by Generator.......ኳስ ሚዳ ያለው.......የከርሰ ምድር ውሃ ያለው.....በጣም ቆንጆ ተደርጎ የተሰራ አፖርታማ........ዋጋ 11 ሚሊየን"
    },
    {
      "id": 3,
      "name": "Villa",
      "pic": pic5,
      "description": "በድጋሜ የማይገኝ እድል  አያት አካባቢ የሚሸጥ.....250 ካሬ አቀማመጥ ተውዳጅ የሆነ ማንም ያልገባበት አዲስ ቪላ ቤት  ከሌሎቹ የሚለየው........ ሁሉም መኝታ ቤቶች የራሳቸው ዘመናዊ ሻውር ሽንትቤት ከነቁምሳጥን አላቸው ............ ዋጋ 20 ሚሊየን መጨረሻው እየተባለ ነው"
    },
  ];
  return (
    <div className={styles.cont}>
          <Title mainTitle={'Our Service'} subTitle={"Create your own paradiset get inspired. See below"}/>
          <div className={styles.lists}>
            {servies.map((l)=><ProductCard key={l.id} {...l}/>)}
          </div>
          <div className={styles.moreservice}><NavLink to={'/service'} onClick={scrollTop}>More Service</NavLink></div>
        </div>
  )
}

export default ServiceReview