import React, { useEffect, useState } from 'react'
import styles from "./gallery.module.css";
import PageIntro from '../components/cards/PageIntro';
import zimg from '../assets/gallery.jpg'
import GalleryCard from '../components/cards/GalleryCard';
import pic from '../assets/pics/rent.jpg'
import pic2 from '../assets/pics/rent1.jpg'
import pic7 from '../assets/pics/apart1.jpg'
import pic8 from '../assets/pics/service1.jpg'
import pic10 from '../assets/pics/villa2.jpg'
import pic11 from '../assets/pics/3bb.jpg'
import pic12 from '../assets/pics/6.jpg'
import pic9 from '../assets/pics/villa1.jpg'
import pic3 from '../assets/pics/rent2.jpg'
import pic4 from '../assets/pics/meret.jpg'
import pic5 from '../assets/pics/meret1.jpg'
import pic6 from '../assets/pics/1.jpg'
import condo2 from '../assets/pics/condo2.jpg'
import Title from '../components/title/Title';
// import ModelShow from '../components/ModelShow';

const Gallerys = () => {

  useEffect(() => {
    document.title = 'Mehal Ashashach - Sites';
  }, []);

  const galleryData=[
    {
      "id": 1,
      "description": "የሚከራይ 40/60 ኮንዶሚኒየም ........አምስት ዓመት የሞላው..............ቦታ አያት 49 አደባባይ ...........ባለ3 መኝታ.........8 ኛፎቅ ..........ምቹ የሆነ አካባቢ..............105 ካሬ ሜትር ",
      "name": "ኮንዶሚኒየም",
      "type":'ኪራይ',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic
    },
    {
      "id": 2,
      "name": "አፓርታማ",
      "type":'ኪራይ',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic2,
      "description": "ኪራይ 40/60 ......መሪ ሎቄ ........ደረጀ 9 ነኛ ............ባለ2 ምኝታ 83 ካሬ ............ድጅታል ካርታ"
    },
    {
      "id": 3,
      "name": "ኮንዶሚኒየም",
      "type":'ኪራይ',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic3,
      "description": "የሚከራይ 40/60 ሀያት 2 ...ቦታ አያት 49 አደባባይ .......ደረጃ4ኛ ፎቅ .........76  ካሬ ሜትር  ..........ባለ2ምኝታ........ዲጅታል ካርታ 5ዓመት የሞላው"
    },
    {
      "id": 4,
      "name": "መሬት",
      "type":'መሬት',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic4,
      "description": "የሚሸጥ መሬት..........ሀያት አየር መንገድ አካባቢ...........350 ካሬ"
    },
    {
      "id": 5,
      "name": "መሬት",
      "type":'መሬት',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic5,
      "description": "ሽያጭ መሬት ........ ቦታ ሀያት2 ሳይት4..........86ካሬ ሜትር"
    },
    {
      "id": 6,
      "name": "አፓርታማ ",
      "type":'አፓርታማ',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic6,
      "description": "አስቸኳይ ሽያጭ 40/60........................ ባለ 3 መኝታ........................... 72  ካሬ ደረጃ 9 ኛ ያገባ እጣ የደረሰዉ .....................መሸጫ ዋጋ  3,000,000"
    },
    {
      "id": 7,
      "name": "አፓርታማ",
      "type":'አፓርታማ',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic7,
      "description": "የምስራች ሊያመልጠወት የማይገባ ......አያት አካባቢ የሚሸጥ 280 ካሬ..........የባንክ ብድር ያለበት 125 ካሬ ላይ ያረፈ G+3  ፅድት ያለ ቤት ያለው...........ባንክ   36 ሚሊየን አለበት..............6 ሚሊየን ብቻ ከፍለው  የግለዎት ያድርጉ ..............175 ካሬ  ባዶ  መሬት   ተቆርጦ   መሸጥ እሚችል ቦታ አለው ..............የቦታው አቀማመጥ ኤል ላይ.............በጣም በቅናሽ ዋጋ"
    },
    {
      "id": 8,
      "name": "አፓርታማ",
      "type":'አፓርታማ',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic8,
      "description": "የሚሸጥ 500 ካሬሜትር ..... 4ኛ ዙር ጨረታ  ቆንጆ ቦታ ላይ........ቦታ አያት 49 አደባባይ ...........የቦታው ኮድ00013989ነው.................ያሸነፈበት 28,200 ብር..............ለእጅ 2,500,000"
    },
    {
      "id": 9,
      "name": "ቪላ",
      "type":'ቪላ',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic9,
      "description": "የሚሸጥ 250ካሬሜትር C+2 ...........ቦታ አያት 49  ማይፕላዛ  አካባቢ..............አስፓልት ዳር ነው  ..................መሸጫ ዋጋ 36 ሚሊዮን "
    },
    {
      "id":10,
      "name": "ቪላ",
      "type":'ቪላ',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic10,
      "description": "አያት አካባቢ የሚሸጥ.........160 ካሬ G+3 ፅድት ያለ ቤት................ቤቱ 2 ሳሎን 9 መኝታ ................7 መታጠቢያ .................2 ኪችን አለው 1 የሰራተኛ መታኝ.........1 መታጠቢያ ..............3 መኪና ማቆሚያ ቦታ አለው .............ዋጋ 41 ሚሊየን"
    },
    {
      "id":11,
      "name": "ቪላ",
      "type":'ቪላ',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic11,
      "description": "በድጋሜ የማይገኝ እድል  አያት አካባቢ የሚሸጥ.....250 ካሬ አቀማመጥ ተውዳጅ የሆነ ማንም ያልገባበት አዲስ ቪላ ቤት  ከሌሎቹ የሚለየው........ ሁሉም መኝታ ቤቶች የራሳቸው ዘመናዊ ሻውር ሽንትቤት ከነቁምሳጥን አላቸው ............ ዋጋ 20 ሚሊየን መጨረሻው እየተባለ ነው"
    },
    {
      "id":12,
      "name": "ኮንዶሚኒየም",
      "type":'ኮንዶሚኒየም',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": pic12,
      "description": "አያት ሆሴ እሪል እስቴት ውስጥ የሚሸጥ.........82 ካሬ 2 መኝታ ቤት.......ምርጥ ተደርጎ የተሰራ.......2 ኛ ላይ ሙሉ 24 የሚሰራ stand by Generator.......ኳስ ሚዳ ያለው.......የከርሰ ምድር ውሃ ያለው.....በጣም ቆንጆ ተደርጎ የተሰራ አፖርታማ........ዋጋ 11 ሚሊየን"
    },

    {
      "id":12,
      "name": "ኮንዶሚኒየም",
      "type":'ኮንዶሚኒየም',
      "link":'https://www.zaahirahtravels.com',
      "file":'https://www.zaahirahtravels.com',
      "pic": condo2,
      "description": "የሚሸጥ 40/60 ሀያት 2.........ቦታ አያት 49 አደባባይ ..........ደረጃ 4ኛ ፎቅ ............76  ካሬ ሜትር  ....ባለ 2 ምኝታ.......ቀሪ እዳ የለበትም.....መሸጫ ዋጋ 6000,000..............ዲጅታል ካርታ 5ዓመት የሞላው"
    },
  ]

  const [filterType,setFilterType]=useState('')
  

  let filteredItems;
  if (filterType !== '') {
    filteredItems = galleryData.filter(item => item.type === filterType);
  } else {
    filteredItems = galleryData;
  }

  const types=Array.from(
    new Set(
      galleryData.map(project => project.type)  
    )
  )
  
  return (
    <>
      <PageIntro text={'Sites'} img={zimg}/>
      <div className={styles.cont}>
        <div className={styles.box}>
          <Title mainTitle={'Photos from our Experience and Products'} subTitle={''}/>
          <div className={styles.searchbox}>
            <span className={styles.searchlinks} onClick={()=>setFilterType('')} style={{background:filterType===''?'var(--fcolor)':'white',color:filterType===''?'white':'var(--fcolor)'}}>All</span>
            {types.map((l,k)=>
            <span className={styles.searchlinks} onClick={()=>setFilterType(l)} style={{background:filterType===l?'var(--fcolor)':'white',color:filterType===l?'white':'var(--fcolor)'}} key={k}>{l}</span>
            )}
          </div>
          <div className={styles.lists}>
          {
          filteredItems.map((l)=><GalleryCard key={l.id} {...l}/>)
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Gallerys