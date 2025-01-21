import React, { useState } from "react";

// Define the type for props
interface HeaderProps {
  onNavigate: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [showEmail, setShowEmail] = useState(false); // State to toggle email visibility

  const handleEmailClick = () => {
    setShowEmail(!showEmail); // Toggle the visibility of the email
  };

  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          <li>
            {/* About navigation */}
            <a
              href="#"
              style={styles.link}
              onClick={(e) => {
                e.preventDefault();
                onNavigate("about"); // Trigger navigation to "About" section
              }}
            >
              About
            </a>
          </li>
          <li>
            {/* Projects navigation */}
            <a
              href="#"
              style={styles.link}
              onClick={(e) => {
                e.preventDefault();
                onNavigate("projects"); // Trigger navigation to "Projects" section
              }}
            >
              Projects
            </a>
          </li>
          <li>
            {/* Blog navigation */}
            <a
              href="#"
              style={styles.link}
              onClick={(e) => {
                e.preventDefault();
                onNavigate("blog"); // Trigger navigation to "Blog" section
              }}
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <div>
        {/* Email Icon */}
        <a
          href="#"
          style={styles.icon}
          aria-label="Email"
          onClick={handleEmailClick} // Toggle email on click
        >
          <i className="fas fa-envelope"></i>
        </a>
        {/* Show Email Address */}
        {showEmail && (
          <span style={styles.emailText}>kushamodgil99@gmail.com</span>
        )}

        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/kusha-sharma-84ba89174/"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/kushasharma99"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.icon}
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  nav: {
    display: "flex",
  },
  ul: {
    display: "flex",
    listStyleType: "none",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
  },
  icon: {
    marginLeft: "10px",
    fontSize: "1.5rem",
    color: "#fff",
    textDecoration: "none",
    cursor: "pointer",
  },
  emailText: {
    marginLeft: "10px",
    color: "#fff",
    fontSize: "1rem",
    backgroundColor: "#555",
    padding: "5px 10px",
    borderRadius: "5px",
  },
};

export default Header;
