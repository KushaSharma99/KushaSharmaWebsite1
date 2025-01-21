import React from "react";

const Footer: React.FC = () => (
  <footer style={styles.footer}>
    <p>© {new Date().getFullYear()} Kusha Sharma. All rights reserved.</p>
  </footer>
);

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px 0",
    textAlign: "center" as "center", // Explicitly type textAlign
  },
};

export default Footer;
