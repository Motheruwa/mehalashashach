import React, { useEffect } from "react";
import styles from "./about.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";
import zimg1 from "../assets/product.jpg";
import brand1 from "../assets/brands/tele.png";
import brand2 from "../assets/brands/siltet.jpg";
import brand3 from "../assets/brands/yegra.png";
import brand5 from "../assets/brands/cpanel-logo.svg";
import brand4 from "../assets/brands/safa.png";
import zimg2 from "../assets/about.jpg";
import StaffReview from "../components/cards/StaffReview";
import Title from "../components/title/Title";
// import {FaPlus, FaTimes} from 'react-icons/fa'

const About = () => {
  useEffect(() => {
    document.title = "Mehal Ashashach - About Us";
  }, []);

  // const Awards=[
  //   {id:1,pic:zimg},
  //   {id:2,pic:zimg1},
  //   {id:3,pic:zimg2},
  //   {id:4,pic:zimg2},
  //   {id:5,pic:zimg1},
  // ]

  const Partners=[
    {id:1,pic:brand1},
    {id:2,pic:brand2},
    {id:3,pic:brand3},
    {id:4,pic:brand4},
    {id:5,pic:brand5},
  ]

  // const [viewAward,setViewAward]=useState(0)

  return (
    <>
      <PageIntro text={"About Us"} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
          {/* <span className={styles.awardtitle}>Awards and Certficates</span>
          <div className={styles.titleline}>
              <span></span>
              <span></span>
              <span></span>
            </div> */}
        {/* <div className={styles.awardscont}>
            {Awards.map((l)=>(
            <div className={l.id===viewAward ?styles.viewawardbox:styles.awardbox} key={l.id}>
              <div className={l.id===viewAward ?styles.viewblackbox:styles.blackbox}>
              <span onClick={()=>setViewAward(l.id)} className={styles.viewawardbtn}><FaPlus/></span>
              <img src={l.pic} alt="award" style={{borderRadius:l.id===viewAward?'':'50%'}} className={styles.awardimg}/>
              <span className={styles.closeaward} style={{display:l.id===viewAward?'flex':'none'}} onClick={()=>setViewAward(0)}><FaTimes/></span>
              </div>
            </div>))}
          </div> */}
          <div className={styles.lists}>
            <div className={styles.contlist}></div>
            <img className={styles.imgbox} src={zimg1} alt={'about'} />
            <div className={styles.textbox}>
              <span className={styles.detailtitle}>Our History</span>
              <span className={styles.detaildes}>
              Founded in 2010 by visionary entrepreneur [Daniel Abebe], our company began as a humble venture with a passion for connecting individuals with their dream properties and vehicles. From our modest beginnings, we quickly gained recognition for our dedication to personalized service and commitment to client satisfaction. By staying true to our core values of integrity, innovation, and excellence, we have steadily grown into a trusted name in the real estate and automotive industries. With a relentless focus on quality and customer-centric solutions, we continue to shape the future of home, car, and property buying and renting experiences for our valued clients.
              </span>
            </div>
          </div>

          <div className={styles.lists}>
            <div className={styles.contlist2}></div>
            <div className={styles.textbox}>
              <span className={styles.detailtitle}>Our Mission</span>
              <span className={styles.detaildes}>
              our mission is to be the premier destination for individuals and families seeking their ideal homes, cars, and properties to buy or rent.  By offering a diverse portfolio of high-quality properties and vehicles, coupled with transparent and trustworthy transactions, we aim to exceed expectations and foster long-lasting relationships with our customers. Our commitment to integrity, innovation, and excellence drives us to consistently deliver value and satisfaction, making the process of finding and acquiring the perfect home, car, or property a rewarding journey for all.
              </span>
            </div>
            <img className={styles.imgbox} src={zimg2} alt={'about'} />
          </div>
          <Title mainTitle={'Our Executive Team'} subTitle={""}/>
            <StaffReview/>
          <Title mainTitle={'Partner that Trust Us'} subTitle={""}/>
          <div className={styles.partners}>
          {Partners.map((l)=><img key={l.id} src={l.pic} alt="award" className={styles.partnersimg}/>)}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
