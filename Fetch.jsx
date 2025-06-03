import React, { useState } from "react";
import './App.css'
const RandomFactFetcher = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact("Failed to fetch fact. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Random Cat Fact</h1>
        <button onClick={fetchCatFact} style={styles.button} disabled={loading}>
          {loading ? "Fetching..." : "Get a Fact"}
        </button>
        
        {fact && <p style={styles.fact}>{fact}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    background: "linear-gradient(to bottom right, #f0e4ff, #ffd6e7)",
    padding: "1rem",
  },
  card: {
    maxWidth: "500px",
    width: "100%",
    background: "white",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "1.8rem",
    color: "#7c3aed",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#8b5cf6",
    color: "white",
    border: "none",
    borderRadius: "0.5rem",
    cursor: "pointer",
    fontSize: "1rem",
  },
  fact: {
    marginTop: "1rem",
    fontSize: "1.1rem",
    color: "#333",
  },
};

export default RandomFactFetcher;