import { render } from "react-dom";

import Link from "next/link";

import styles from "../styles/components/Header.module.css";
import { useState } from "react";

export function Header() {
  const [menu, setMenu] = useState(false);
  function toggleMenu() {
    setMenu(!menu);
  }

  return (
    <header className={styles.container}>
      <a href="#">
        <img src="logo.png" alt="Starbucks" className={styles.logo} />
      </a>

      {menu ? (
        <div
          className={`${styles.toggle} ${styles.close}`}
          onClick={toggleMenu}
        ></div>
      ) : (
        <div
          className={`${styles.toggle} ${styles.open}`}
          onClick={toggleMenu}
        ></div>
      )}

      <ul className={`${styles.options} ${menu ? styles.active : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">What's New</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}
