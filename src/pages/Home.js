import React, { useEffect } from "react";
import styles from "./home.module.css";
import ProductShow from "../components/cards/ProductShow";
import video from "../assets/vids/2.MOV"
import ServiceReview from "../components/cards/ServiceReview";
import GalleryReview from "../components/cards/GalleryReview";
import Testimonials from "../components/cards/Testimonials";
// import ModelShow from "../components/ModelShow";
import { FaAngleDown} from "react-icons/fa";
import WorkDash from "../components/cards/WorkDash";
import ProductSlide from "../components/cards/ProductSlide";

const Home = () => {

  useEffect(() => {
    document.title = 'Mehal Ashashach - Home';
  }, []);

  return (
    <div className={styles.cont}>
      <ProductSlide/>
      <div className={styles.videobox}>
        <video className={styles.video} src={video} autoPlay loop muted />
        {/* <div className={styles.logo}>
          <div className={styles.infobox}>
            <span className={styles.moto2}><span className={styles.moto3}>Marvellous Furniture</span></span>
           <div>
           <span className={styles.moto}>We<Typewriter
            words={[' Produce ', ' Develope', ' Deliver', ' Produce ,Develope and Deliver!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></span>
           </div>
          </div>
        </div> */}
        <div className={styles.bouncebox}>
          <span><FaAngleDown size={20}/></span>
        </div>
      </div>
      <ProductShow />
      <div className={styles.box}>
        <ServiceReview/>
      <WorkDash/>
        {/* <ModelShow/> */}
        <GalleryReview/>
        <Testimonials/>
      </div>
    </div>
  );
};

export default Home;
