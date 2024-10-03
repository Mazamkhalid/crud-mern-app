import React from 'react';

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <nav style={styles.navbar}>
          <h1 style={styles.logo}>CRUD App</h1>
          <ul style={styles.navList}>
            <li><a href="#features" style={styles.navItem}>Features</a></li>
            <li><a href="#about" style={styles.navItem}>About</a></li>
            <li><a href="#services" style={styles.navItem}>Services</a></li>
            <li><a href="#contact" style={styles.navItem}>Contact</a></li>
          </ul>
        </nav>
        <div style={styles.hero}>
          <h2 style={styles.title}>Welcome to Simple CRUD App</h2>
          <p style={styles.subtitle}>Effortless Create, Read, Update, and Delete operations.</p>
          <button style={styles.ctaButton}>Get Started</button>
        </div>
      </header>

      {/* Main Section */}
      <main style={styles.main}>
        {/* Features Section */}
        <section id="features" style={styles.section}>
          <h2 style={styles.sectionTitle}>Features</h2>
          <p style={styles.sectionText}>Experience smooth and easy CRUD operations with our intuitive interface.</p>
        </section>

        {/* About Section */}
        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About Us</h2>
          <p style={styles.sectionText}>We are committed to providing the simplest way to manage your data.</p>
        </section>

        {/* Services Section */}
        <section id="services" style={styles.section}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <p style={styles.sectionText}>From basic CRUD operations to advanced database management, we've got you covered.</p>
        </section>

        {/* Contact Section */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Get in Touch</h2>
          <p style={styles.sectionText}>Have any questions? Feel free to reach out to us anytime.</p>
        </section>
      </main>

      {/* Footer Section */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Simple CRUD App | All Rights Reserved</p>
      </footer>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#333',
    textAlign: 'center',
    margin: '0',
    padding: '0',
  },
  header: {
    backgroundColor: '#f7f7f7',
    padding: '30px 0',
    borderBottom: '2px solid #eee',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
  },
  logo: {
    fontSize: '2rem',
    color: '#4CAF50',
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  navItem: {
    color: '#4CAF50',
    textDecoration: 'none',
    fontSize: '1.1rem',
    cursor: 'pointer',
  },
  hero: {
    padding: '50px 0',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#4CAF50',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
  },
  ctaButton: {
    padding: '15px 30px',
    fontSize: '1.2rem',
    color: '#fff',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  main: {
    padding: '40px 20px',
  },
  section: {
    marginBottom: '50px',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '15px',
    color: '#333',
  },
  sectionText: {
    fontSize: '1.2rem',
    color: '#666',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    marginTop: '40px',
  },
  footerText: {
    fontSize: '1rem',
  },
};

export default Home;
