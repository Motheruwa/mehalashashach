import React, { useState } from "react";
import { NavLink,useLocation  } from "react-router-dom";
import styles from "./topnavbar.module.css";
import logo from '../../assets/logo.png'
import { RiMenu4Line } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";

const TopNavBar = () => {

  const Links=[
    // {id:1,href:'/',name:'Home'},
    {id:2,href:'/about',name:'About Us'},
    {id:3,href:'/service',name:'Service'},
    {id:4,href:'/projects',name:'Sites'},
    // {id:5,href:'/blog',name:'Blog'},
    {id:6,href:'/contact',name:'Contact'},
  ]

  const [showMenu,setShowMenu]=useState(false)
  const location =useLocation()

  const scrollTop=()=>{
    window.scrollTo({ top: 0, behavior:'instant' });
  }

  return (
    <div className={styles.cont}>
      <div className={styles.navbox}>
        <NavLink className={styles.logobox} to='/' onClick={scrollTop}>
          <img className={styles.logo} src={logo} alt="logo"/>
        </NavLink>
        <div className={styles.linkbox}>
          {Links.map((link=><NavLink onClick={()=>scrollTop()} style={{color:location.pathname===link.href || ((location.pathname.startsWith(`/service`) && location.pathname.startsWith('/service')===link.href.startsWith('/service'))||(location.pathname.startsWith(`/projects`) && location.pathname.startsWith('/projects')===link.href.startsWith('/projects')))?'var(--fcolor)':'gray'}} key={link.id} to={link.href}>{link.name}</NavLink>))}
        </div>
        <div className={styles.menulinkbox} style={{top:showMenu?'0':'-120%'}}>
            <div className={styles.closemenu} onClick={()=>setShowMenu(false)}><AiFillCloseCircle size={30}/></div>
          {Links.map((link=><NavLink onClick={()=>{setShowMenu(false);scrollTop()}} style={{color:location.pathname===link.href?'var(--fcolor)':'rgba(0,0,0,.7)'}} key={link.id} to={link.href}>{link.name}</NavLink>))}
        </div>
        <div className={styles.menubox} onClick={()=>setShowMenu(true)}><RiMenu4Line size={25}/></div>
      </div>
    </div>
  );
};

export default TopNavBar;
