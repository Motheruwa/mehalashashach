import React, { useEffect, useState } from "react";
import styles from "./productshow.module.css";
import who from "../../assets/imgs/whomain.png";
import what from "../../assets/imgs/whatmain.png";
import why from "../../assets/imgs/whymain.png";

import { FaDotCircle } from "react-icons/fa";

const ProductShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [selectedItem,setSelectedItem]=useState(1)

  // useEffect(() => {
  //   setIsVisible(true);
  // }, [selectedItem]);

  useEffect(() => {
    setIsVisible(false);
    const interval = setInterval(() => {
      setSelectedItem((prevItem) => (prevItem === 3 ? 1 : prevItem + 1));
    }, 11000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 10000);
    return () => clearTimeout(timeout);
  }, [selectedItem]);

  const minerals = [
    {
      id: 1,
      name: 'Who We Are',
      img:who,
      description: "At Mehal ashashach, we get reimagining real estate to make it easier to unlock life’s next chapter. We live in an always-on world, and we believe the challenges of moving to your new place of living shouldn’t get in the way of moving forward. That’s why we’re on a mission to give people a simpler, more seamless way to buy, sell and rent a new home. As the most-visited real estate website in Ethiopia, Betdelala and its affiliates offer customers an on-demand experience for selling, buying, and renting nearly seamless end-to-end service.",
    },
    {
      id: 2,
      name: 'What we Do',
      img:what,
      description: "At Mehal ashashach, we aimed to make the home renting and selling process simpler at their fingertips. BetDelala creates a seamless real estate transaction experience for today’s on-demand world. Sellers, Agents and Agencies can use BetDelala to post home for rent as well as for selling. Provide a dashboard to manage the homes they post, engage with clients and get reports about their posts. allows users who are looking for a home to rent or buy to search homes based on their preference such as using a map to search home in specific location or using search criteria based on different home features and attributes. We  allows users to save time, get a variety of choices and genuine information to get their dream home",
    },
    {
      id: 3,
      name: 'Why Us',
      img:why,
      description: "At Mehal ashashach, we stand apart by prioritizing your digital success above all else. Our dedication to delivering tailored solutions, staying ahead of industry trends, and consistently achieving results speaks volumes. When you choose us, you're choosing a partner committed to realizing your digital vision with unmatched creativity, expertise, and passion. Experience the difference Marvellous Furniture can make for your online presence today.",
    },
  ];

  const products=[
    {id:1,rol:<FaDotCircle/>},
    {id:2,rol:<FaDotCircle/>},
    {id:3,rol:<FaDotCircle/>},
]
  return (
    <div className={styles.box}>
      <div className={styles.cont}>
      <div className={styles.slider}>
        <div className={styles.lines}>{products.map(l=><span key={l.id} style={{background:selectedItem >= l.id?'var(--fcolor)':'transparent'}} className={styles.line}></span>)}</div>
        {/* <div className={styles.nums}>{products.map(l=><span key={l.id} style={{background:selectedItem===l.id?'var(--fcolor)':'transparent',color:selectedItem===l.id?'white':'var(--fcolor)'}}  className={styles.rolnum}>{l.rol}</span>)}</div> */}
        <div className={styles.nums}>{products.map(l=><span key={l.id} style={{background:selectedItem===l.id?'var(--fcolor)':'transparent',color:selectedItem===l.id?'white':'var(--fcolor)'}} onClick={()=>setSelectedItem(l.id)} className={styles.rolnum}>{l.rol}</span>)}</div>
      </div>
      <div className={styles.contentbox}>
      <div className={styles.content}>
        <span className={isVisible ? styles.title:styles.hiddentitle}>{minerals.find((mineral) => mineral.id === selectedItem).name}</span>
        <span className={isVisible ? styles.description : styles.hiddendes}>{minerals.find((mineral) => mineral.id === selectedItem).description}</span>
        {/* <div className={styles.orderbtnbox}>
          <NavLink className={isVisible ? styles.orderbtn:styles.hiddenorderbtn}>Order Now</NavLink>
        </div> */}
      </div>
      <div className={styles.imgs}><img className={isVisible ? styles.showimg:styles.hideimg} src={minerals.find((mineral) => mineral.id === selectedItem).img} alt="mineral"/></div>
      </div>
    </div>
    </div>
  );
};

export default ProductShow;
