import { useState } from "react";

import { Header } from "../components/Header";
import { Content } from "../components/Content";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [img, setImg] = useState("img1");
  const [circleColor, setCircleColor] = useState("#017143");

  function handleChangeImg(img: string) {
    setImg(img);
    if (img === "img1") {
      setCircleColor("#017143");
    } else if (img === "img2") {
      setCircleColor("#eb7495");
    } else if (img === "img3") {
      setCircleColor("#d752b1");
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.circle} style={{ background: circleColor }}></div>
      <Header />
      <Content img={img} />
      <ul className={styles.thumb}>
        <li>
          <img
            src="images/thumb1.png"
            onClick={() => handleChangeImg("img1")}
          />
        </li>
        <li>
          <img
            src="images/thumb2.png"
            onClick={() => handleChangeImg("img2")}
          />
        </li>
        <li>
          <img
            src="images/thumb3.png"
            onClick={() => handleChangeImg("img3")}
          />
        </li>
      </ul>
      <ul className={styles.sci}>
        <li>
          <a href="#">
            <img src="images/facebook.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/twitter.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/instagram.png" />
          </a>
        </li>
      </ul>
    </section>
  );
}
