import React from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Login (Demo)</h2>
        <p>
          This is a placeholder login. For the POC, clicking login simulates
          authentication.
        </p>
        <Link
          to="/approach"
          className={styles.primaryBtn}
          onClick={() => alert("Simulated login — proceed to approach page")}
        >
          Login (Simulate)
        </Link>
      </div>
    </div>
  );
}
