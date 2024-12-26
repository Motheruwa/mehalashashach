import React, { useEffect } from "react";
import styles from "./service.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";
import ProductCard from "../components/cards/ProductCard";
import pic from '../assets/pics/service1.jpg'
import pic4 from '../assets/pics/condo2.jpg'
import pic3 from '../assets/pics/condo1.jpg'
import pic2 from '../assets/pics/villa1.jpg'
import pic5 from '../assets/pics/villa2.jpg'
import pic6 from '../assets/pics/apart1.jpg'
import ProductSlide from "../components/cards/ProductSlide";
import Title from "../components/title/Title";

const Service = () => {

  useEffect(() => {
    document.title = 'Mehal Ashashach - Service';
  }, []);

  const servies = [
    {
      "id": 1,
      "name": "Apartment",
      "pic": pic,
      "description": "የሚሸጥ 500 ካሬሜትር ..... 4ኛ ዙር ጨረታ  ቆንጆ ቦታ ላይ........ቦታ አያት 49 አደባባይ ...........የቦታው ኮድ00013989ነው.................ያሸነፈበት 28,200 ብር..............ለእጅ 2,500,000"
    },
    {
      "id": 2,
      "name": "Villa",
      "pic": pic2,
      "description": "የሚሸጥ 250ካሬሜትር C+2 ...........ቦታ አያት 49  ማይፕላዛ  አካባቢ..............አስፓልት ዳር ነው  ..................መሸጫ ዋጋ 36 ሚሊዮን "
    },
    {
      "id": 3,
      "name": "Condominium",
      "pic": pic3,
      "description": "የሚሸጥ 40/60ኮንዶሚኒየም .......ቦታ አያት  ቦሌ በሻሌ አደባባይ ..........ደረጃ  7 ኛ ፎቅ..............ባለ3 መኝታ ቤት............2 ባኞ  ቤት.....1ኪቺን ቤት.......1ሳሎን ቤት........107 ካሬሜትር............እዳ የዘጋ ካርታ ያለው..............መሸጫ ዋጋ 7,400,000"
    },
    {
      "id": 4,
      "name": "Condominium",
      "pic": pic4,
      "description": "የሚሸጥ 40/60 ሀያት 2.........ቦታ አያት 49 አደባባይ ..........ደረጃ 4ኛ ፎቅ ............76  ካሬ ሜትር  ....ባለ 2 ምኝታ.......ቀሪ እዳ የለበትም.....መሸጫ ዋጋ 6000,000..............ዲጅታል ካርታ 5ዓመት የሞላው"
    },
    {
      "id": 5,
      "name": "Villa",
      "pic": pic5,
      "description": "አያት አካባቢ የሚሸጥ.........160 ካሬ G+3 ፅድት ያለ ቤት................ቤቱ 2 ሳሎን 9 መኝታ ................7 መታጠቢያ .................2 ኪችን አለው 1 የሰራተኛ መታኝ.........1 መታጠቢያ ..............3 መኪና ማቆሚያ ቦታ አለው .............ዋጋ 41 ሚሊየን"
    },
    {
      "id": 6,
      "name": "Apartment",
      "pic": pic6,
      "description": "የምስራች ሊያመልጠወት የማይገባ ......አያት አካባቢ የሚሸጥ 280 ካሬ..........የባንክ ብድር ያለበት 125 ካሬ ላይ ያረፈ G+3  ፅድት ያለ ቤት ያለው...........ባንክ   36 ሚሊየን አለበት..............6 ሚሊየን ብቻ ከፍለው  የግለዎት ያድርጉ ..............175 ካሬ  ባዶ  መሬት   ተቆርጦ   መሸጥ እሚችል ቦታ አለው ..............የቦታው አቀማመጥ ኤል ላይ.............በጣም በቅናሽ ዋጋ"
    },
  ];

  return (
    <>
      <PageIntro text={"Service"} img={zimg} />
      <ProductSlide/>
      <div className={styles.cont}>
        <div className={styles.box}>
          <Title mainTitle={'Specialization and Successful Endeavors'} subTitle={""}/>
          <div className={styles.lists}>
          {servies.map((l)=><ProductCard key={l.id} {...l}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
