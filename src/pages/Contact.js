import React, { useEffect, useRef, useState } from "react";
import styles from "./contact.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from '../assets/contact.jpg'
import {FaMailBulk, FaMapPin, FaPhone } from 'react-icons/fa'
import MapComponent from "../components/map/Map";
import Title from "../components/title/Title";
const Contact = () => {
  useEffect(() => {
    document.title = 'Mehal Ashashach - Contact Us';
  }, []);

  const [msgSending,setMsgSending]=useState(false)
  const [msgErr,setMsgErr]=useState('')
  const [msgErrColor,setMsgErrColor]=useState('green')

  const formRef=useRef(null)

  const handelMsg=(e)=>{
    e.preventDefault();
    setMsgSending(true)
    setMsgErr('Your message has been sent. Thank you!')
    setMsgErrColor('green')
    formRef.current.reset()
  }
  return (
    <>
      <PageIntro  text={"Contact"} img={zimg}/>
      <div className={styles.cont}>
        <div className={styles.box}>
        <Title mainTitle={'Contact US'} subTitle={"You are always welcome to visit us and give us Feedbacks on our services."}/>
          <div className={styles.lists}>
            <div className={styles.locationbox}>
            <div className={styles.location}><span className={styles.icons}><FaMapPin/></span><div className={styles.infobox}><span>Location:</span><span>Ayat, Addis Ababa, NY 535022</span></div></div>
            <div className={styles.location}><span className={styles.icons}><FaMailBulk/></span><div className={styles.infobox}><span>Email:</span><span>DanielAbebe@gmail.com</span></div></div>
              <div className={styles.location}><span className={styles.icons}><FaPhone/></span><div className={styles.infobox}><span>Call:</span><a href="tel:1234567" style={{color:'black',textDecoration:'none'}}>+251 9 25 55 14 53</a></div></div>
              <div className={styles.map}>
                <MapComponent/>
              </div>
            </div>
            <form ref={formRef} onSubmit={handelMsg} className={styles.formbox}>
              <div className={styles.inputcont}><span>Your Name</span><input maxLength={20} required minLength={5} type="text"/></div>
              <div className={styles.inputcont}><span>Your Email</span><input required type="email"/></div>
              <div className={styles.inputcont}><span>Subject</span><input required maxLength={30} min={5} type="text"/></div>
              <div className={styles.inputcont}><span>Message</span><textarea required maxLength={200}></textarea></div>
              <div className={styles.formerr} style={{display:msgErr?"flex":'none',background:msgErrColor,color:'white'}}>{msgErr}</div>
              <div className={styles.btncont}>
              <button type="submit" disabled={msgSending} className={styles.sendbtn}>{msgSending?'Sending':'Send Message'}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
