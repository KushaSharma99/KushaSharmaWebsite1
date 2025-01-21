import React from "react";

const MainContent = () => (
  <main style={styles.main}>
    <img
      src="https://i.imgur.com/95bkIWV.jpeg"
      alt="Kusha Sharma"
      style={styles.profilePic as React.CSSProperties} // Explicitly cast to React.CSSProperties
    />
    <h1 style={styles.title as React.CSSProperties}>Kusha Sharma</h1>
    <h2 style={styles.subtitle as React.CSSProperties}>Software Engineer</h2>
    <p style={styles.description as React.CSSProperties}>
      From Concept to Code - Bringing Visions to Life.
    </p>
  </main>
);

const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  } as React.CSSProperties,
  profilePic: {
    width: "450px", // Increased size
    height: "450px", // Increased size
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  } as React.CSSProperties,
  title: {
    fontSize: "3.5rem",
    color: "#4b0082",
  } as React.CSSProperties,
  subtitle: {
    fontSize: "2.5rem",
    color: "#6a5acd",
  } as React.CSSProperties,
  description: {
    fontSize: "1.5rem",
    color: "#333",
  } as React.CSSProperties,
};

export default MainContent;
