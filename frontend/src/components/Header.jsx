import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>Asmadiya Technology</div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}
