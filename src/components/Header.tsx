import { render } from "react-dom";

import Link from "next/link";

import styles from "../styles/components/Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <a href="#">
        <img src="logo.png" alt="Starbucks" className={styles.logo} />
      </a>

      <ul className={styles.options}>
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
