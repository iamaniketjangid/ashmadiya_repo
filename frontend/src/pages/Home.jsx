import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const nav = useNavigate();

  const fetchData = async () => {
    try {
      // adjust URL depending on where backend is hosted
      const response = await fetch("http://localhost:4000/api/info");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setInfo(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Welcome to Asmadiya Technology</h1>
        <p className={styles.subtitle}>POC: CI/CD for Node.js applications on AWS</p>

        {/* Render API info */}
        {loading && <p>Loading company info...</p>}
        {error && <p style={{ color: "red" }}>Error: {error}</p>}
        {info && (
          <div className={styles.apiInfo}>
            <h3>{info.company}</h3>
            <p>{info.details}</p>
          </div>
        )}

        <button
          className={styles.primaryBtn}
          onClick={() => nav("/login")}
        >
          Click here to Login to explore more about my approach
        </button>

        <div className={styles.footerNote}>
          <small>Interview POC — demonstrates automatic build & deploy</small>
        </div>
      </div>
    </div>
  );
}
