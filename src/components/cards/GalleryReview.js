import React from 'react'
import styles from './galleryreview.module.css'
import { NavLink } from 'react-router-dom'
import GalleryCard from './GalleryCard'
import pic from '../../assets/pics/1.jpg'
import pic2 from '../../assets/pics/2.jpg'
import pic3 from '../../assets/pics/3.jpg'
import Title from '../title/Title'

const GalleryReview = () => {
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const galleryData=[
    {
      "id": 1,
      "description": "Silica Sand is a versatile and high-quality material extensively used in various industries. Its unique properties make it an indispensable component in glass manufacturing, construction projects, and foundry processes. With its fine granular structure and high silica content, Silica Sand provides stability and strength to glass products, ensuring clarity and durability. In construction, Silica Sand is used in concrete and mortar mixes, offering excellent binding properties and enhancing the overall strength of structures. Moreover, in foundry processes, Silica Sand serves as a molding material due to its ability to withstand high temperatures and facilitate the production of intricate metal castings.",
      "name": "Apartment",
      "type":'Apartment',
      "link":'',
      "file":'',
      "pic": pic
    },
    {
      "id": 2,
      "name": "Villa",
      "type":'Villa',
      "link":'',
      "file":'',
      "pic": pic2,
      "description": "በድጋሜ የማይገኝ እድል  አያት አካባቢ የሚሸጥ 250 ካሬ አቀማመጥ ተውዳጅ የሆነ ማንም ያልገባበት አዲስ ቪላ ቤት  ከሌሎቹ የሚለየው ሁሉም መኝታ ቤቶች የራሳቸው ዘመናዊ ሻውር ሽንትቤት ከነቁምሳጥን አላቸው ዋጋ 20 ሚሊየን መጨረሻው እየተባለ ነው"
    },
    {
      "id": 3,
      "name": "Condominium",
      "type":'Condominium',
      "link":'',
      "file":'',
      "pic": pic3,
      "description": "ሽያጭ 40/60 ኮንዶሚኒየም ........ ቦታ ቦሌ አያት 2 ሳይት 4 ......ባለ 2 መኝታ .......ደረጃ 6ኛ ፎቅ 76 ካሬሜትር  ......ዕዳ የዘጋ ካርታ የያዘ...........መሸጫ ዋጋ 6,200,000 "
    },
  ]
  return (
    <div className={styles.cont}>
          <Title mainTitle={'Recent Projects'} subTitle={"Photos from our Experience"}/>
          <div className={styles.lists}>
            {galleryData.map((l)=><GalleryCard key={l.id} {...l}/>)}
          </div>
          <div className={styles.moreservice}><NavLink to={'/projects'} onClick={scrollTop}>More Projects</NavLink></div>
        </div>
  )
}

export default GalleryReview