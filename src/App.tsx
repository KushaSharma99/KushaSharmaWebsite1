import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

export default function App() {
  const [currentSection, setCurrentSection] = useState("main"); // Tracks the active section

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #4b0082, #e6e6fa)", // Gradient background
        color: "#fff", // Text color
      }}
    >
      <Header onNavigate={setCurrentSection} />
      <main style={{ flex: 1, padding: "20px" }}>
        {currentSection === "about" ? (
          <AboutSection onClose={() => setCurrentSection("main")} />
        ) : currentSection === "projects" ? (
          <ProjectsSection onClose={() => setCurrentSection("main")} />
        ) : currentSection === "blog" ? (
          <BlogSection onClose={() => setCurrentSection("main")} />
        ) : (
          <MainContent />
        )}
      </main>
      <Footer />
    </div>
  );
}

const AboutSection: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div style={styles.sectionContainer}>
    <button style={styles.closeButton} onClick={onClose}>
      &times;
    </button>
    <h1>About Me</h1>
    <p>
      Hi, I'm Kusha Sharma, a passionate software developer with a knack for
      solving real-world problems through innovative technology. I thrive on
      continuous learning and embracing challenges that push my boundaries.
    </p>
    <p>
      I believe in the power of collaboration and creativity to bring impactful
      ideas to life. With a keen eye for detail and a commitment to excellence,
      I strive to create user-centric solutions that are both functional and
      intuitive.
    </p>
    <p>
      Outside of coding, I enjoy exploring emerging technologies, broadening my
      perspective, and finding inspiration in the dynamic world around me. I’m
      driven by a desire to make a meaningful difference through my work and
      grow both personally and professionally along the way.
    </p>
  </div>
);

const ProjectsSection: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div style={styles.sectionContainer}>
    <button style={styles.closeButton} onClick={onClose}>
      &times;
    </button>
    <h1>Projects</h1>
    <ul style={styles.projectList}>
      <li>
        <strong>AI-powered French Learning Project</strong> (Sep 2024 - May
        2025)
        <p>
          I developed a web app for students to practice vocabulary and grammar
          using AI tools and other LLMs. The interaction mimics a chatbot that
          provides feedback and asks questions based on the Cengage MindTap
          ebook for Arizona State University French 101 and 102. It integrated
          OpenAI APIs to provide personalized questions and feedback, enhancing
          the learning experience.
        </p>
      </li>
      <li>
        <strong>CryptoLocker Ransomware Attack</strong> (May 2024 - Jul 2024)
        <p>
          Conducted a case study on the CryptoLocker Ransomware Attack, which
          emerged in 2013 and caused significant financial and operational
          disruptions globally. The study detailed the origins, spread, and
          impact of the attack, analyzed the evolution of ransomware tactics,
          and highlighted the ongoing risks and critical lessons learned.
        </p>
      </li>
      <li>
        <strong>Fitness Tracker Application</strong> (May 2024 - Jul 2024)
        <p>
          Designed a comprehensive fitness tracking system to help users monitor
          and manage their fitness activities and goals. Features included user
          registration and authentication, profile management, activity logging,
          goal setting and tracking, and progress visualization through charts
          and graphs.
        </p>
      </li>
      <li>
        <strong>Bike Racing Registration System</strong> (Mar 2024 - Apr 2024)
        <p>
          Developed a UML-modeled system to manage bike racing registrations,
          allowing race organizers to publish multi-stage events such as road
          races, criteriums, and time trials. Features include racer profiles,
          licensing, payment handling, and race result tracking for category
          advancements.
        </p>
      </li>
      <li>
        <strong>Networking Protocols and Traffic Analysis</strong> (Feb 2024 -
        Apr 2024)
        <p>
          Acquired practical experience in analyzing and managing network
          traffic across various layers, including data links, network (IP),
          transport (TCP), and upper-layer protocols (HTTP, HTTPS).
        </p>
      </li>
      <li>
        <strong>Several GUI Server Client Games</strong> (Feb 2024 - Apr 2024)
        <p>
          Enhanced understanding of upper-layer network protocols, analyzed
          traffic behaviors in client/server setups, and developed custom TCP
          protocols on AWS instances using multithreading and data serialization
          techniques.
        </p>
      </li>
      <li>
        <strong>Gym Scheduling System</strong> (Jan 2024 - Feb 2024)
        <p>
          Created a Java-based system to streamline appointment bookings and
          manage interactions among various user roles. Supported both public
          and private class bookings with conflict prevention features.
        </p>
      </li>
      <li>
        <strong>Digital Logic Circuits</strong> (Jan 2023 - Feb 2023)
        <p>
          Gained skills in designing combinational and sequential circuits,
          using timing diagrams to analyze circuit behaviors, and integrating
          key datapath components like ALUs into complex processor pathways.
        </p>
      </li>
    </ul>
  </div>
);
const BlogSection: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [selectedBlog, setSelectedBlog] = useState<string | null>(null);

  const blogs = [
    {
      id: "journey",
      title: "My Journey to Becoming a Software Developer",
      content: (
        <>
          <h3>My Journey to Becoming a Software Developer</h3>
          <p>
            Becoming a software developer was not just a career choice for me—it
            was a journey of self-discovery, resilience, and continuous growth.
            My path was anything but conventional, but it’s the challenges I
            faced along the way that shaped me into the person I am today. Each
            step taught me the value of persistence, adaptability, and embracing
            failure as a stepping stone. It wasn’t just about learning to
            code—it was about building confidence, solving problems, and
            uncovering my true potential. This journey has been as much about
            personal transformation as it has been about professional growth.
          </p>
        </>
      ),
    },
    {
      id: "curiosity",
      title: "Starting Out: A Seed of Curiosity",
      content: (
        <>
          <h3>Starting Out: A Seed of Curiosity</h3>
          <p>
            My love for technology started early. Growing up, I was fascinated
            by how technology could solve problems and bring ideas to life. I
            remember tinkering with computers, trying to understand how things
            worked behind the scenes. That curiosity led me to explore coding
            for the first time. Writing my first “Hello, World!” program felt
            like unlocking a new language—one that could turn my imagination
            into reality. It was the beginning of a lifelong journey of
            discovery and innovation, one where each line of code became a tool
            to create something meaningful.
          </p>
        </>
      ),
    },
    {
      id: "challenges",
      title: "Challenges Along the Way",
      content: (
        <>
          <h3>Challenges Along the Way</h3>
          <p>
            The road wasn’t always smooth. As I ventured deeper into the world
            of software development, I encountered countless challenges. From
            debugging seemingly impossible errors to learning complex concepts
            like algorithms and data structures, there were times when I felt
            overwhelmed. Balancing studies, work, and self-learning tested my
            perseverance, especially as I navigated the financial pressures of
            supporting my education and family.
          </p>
          <p>
            One of the biggest hurdles was transitioning from understanding
            theoretical concepts to applying them in real-world scenarios.
            However, every failure taught me something new. I learned that the
            key to success wasn’t about knowing everything—it was about being
            resourceful, staying persistent, and continuously learning.
          </p>
        </>
      ),
    },
    {
      id: "milestones",
      title: "Key Milestones and Growth",
      content: (
        <>
          <h3>Key Milestones and Growth</h3>
          <p>
            One defining moment in my journey was creating my first full-fledged
            application—a fitness tracker. It wasn’t just about writing code; it
            was about solving a problem, designing an intuitive user interface,
            and ensuring the functionality met user needs. That project taught
            me the importance of empathy in development—understanding the user’s
            perspective.
          </p>
          <p>
            Another milestone was working on an AI-powered French learning app.
            This project not only challenged my technical skills but also
            ignited my passion for leveraging technology to improve education.
            Collaborating with others, integrating APIs, and designing solutions
            that genuinely helped users was a fulfilling experience.
          </p>
        </>
      ),
    },
    {
      id: "today",
      title: "What Drives Me Today",
      content: (
        <>
          <h3>What Drives Me Today</h3>
          <p>
            Today, I see software development as more than just writing code;
            it’s about solving real-world problems and making a meaningful
            impact. The thrill of creating something that helps others and the
            endless opportunities for learning in this field continue to inspire
            me.
          </p>
        </>
      ),
    },
    {
      id: "future",
      title: "Looking Ahead",
      content: (
        <>
          <h3>Looking Ahead</h3>
          <p>
            My journey is far from over. I’m constantly striving to improve,
            take on new challenges, and contribute to projects that make a
            difference. Every day brings new opportunities to grow and innovate,
            and I’m excited to see where this path takes me next.
          </p>
        </>
      ),
    },
  ];

  return (
    <div style={styles.sectionContainer}>
      <button style={styles.closeButton} onClick={onClose}>
        &times;
      </button>
      <h1>Blog</h1>
      {selectedBlog ? (
        <div>
          <button
            style={styles.backButton}
            onClick={() => setSelectedBlog(null)}
          >
            &larr; Back to Blogs
          </button>
          <div>{blogs.find((blog) => blog.id === selectedBlog)?.content}</div>
        </div>
      ) : (
        <ul style={styles.blogList}>
          {blogs.map((blog) => (
            <li
              key={blog.id}
              style={styles.blogItem}
              onClick={() => setSelectedBlog(blog.id)}
            >
              {blog.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  sectionContainer: {
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#ffd580",
    color: "#4b0082",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    color: "#4b0082",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  blogList: {
    listStyleType: "none",
    padding: 0,
    textAlign: "left",
  },
  blogItem: {
    cursor: "pointer",
    textDecoration: "underline",
    color: "#4b0082",
    marginBottom: "10px",
  },
  backButton: {
    backgroundColor: "#4b0082",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};
