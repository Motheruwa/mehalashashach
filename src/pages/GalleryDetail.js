import React, { useEffect } from "react";
import { useParams,useLocation, } from "react-router-dom";
import PageIntro from "../components/cards/PageIntro";
import styles from "./gallerydetail.module.css";
import zimg from "../assets/pics/back.jpg";

import 'swiper/css';
import 'swiper/css/pagination';
import Title from "../components/title/Title";

const GalleryDetail = () => {
  const { id } = useParams();
  const location=useLocation()
  const data = location.state;

  useEffect(() => {
    document.title = "Mehal Ashashach - Project Detail";
  }, []);

// eslint-disable-next-line
  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <PageIntro text={`Project - ${id}`} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
        <Title mainTitle={'Detail'} subTitle={""}/>
          <div className={styles.gallerybox}>
          </div>
          <div className={styles.lists}>
            <div className={styles.contlist}></div>
            <img className={styles.imgbox} src={data.pic} alt={id} style={{objectFit:'contain'}} />
            <div className={styles.textbox}>
              <span className={styles.detailtitle}>{id}</span>
              <span className={styles.detaildes}>{data.description}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryDetail;
