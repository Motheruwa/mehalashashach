import React from "react";
import styles from "./productcard.module.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa'
const ProductCard = (data) => {

  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
    <div className={styles.cont}>
      <div className={styles.imgbox}><img className={styles.zimg} src={data.pic} alt={data.name}/></div>
      <div className={styles.content}>
      <span className={styles.title}>{data.name}</span>
      <span className={styles.detail}>{data.description}</span>
      <div className={styles.morebtn}>
        <NavLink state={data} className={styles.button} onClick={scrollTop} to={`/service/${data.name}`}><FaArrowRight/></NavLink>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
