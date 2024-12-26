import React, { useEffect } from "react";
import styles from "./blog.module.css";
import PageIntro from "../components/cards/PageIntro";
import zimg from "../assets/gallery.jpg";

const Blog = () => {
  useEffect(() => {
    document.title = "Mehal Ashashach - Blog";
  }, []);

  return (
    <>
      <PageIntro text={"Blog - Comming Soon"} img={zimg} />
      <div className={styles.cont}>
        <div className={styles.box}>
          
        </div>
      </div>
    </>
  );
};

export default Blog;
