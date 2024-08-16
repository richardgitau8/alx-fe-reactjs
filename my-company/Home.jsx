import React from 'react';
import backgroundImage from '../assets/background.jpg';

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={{ ...styles.heroSection, backgroundImage: `url(${backgroundImage})` }} data-aos="fade-up">
        <h1 style={styles.heroTitle}>Welcome to Our Front-End Development Agency</h1>
        <p style={styles.heroSubtitle}>Crafting visually stunning and highly interactive websites.</p>
        <button style={styles.ctaButton}>Get Started</button>
      </section>

      {/* Services Section */}
      <section style={styles.servicesSection} data-aos="fade-up">
        <h2 style={styles.sectionTitle}>Our Services</h2>
        <div style={styles.servicesContainer}>
          <div style={styles.serviceBox} data-aos="fade-right">
            <img src="service1.png" alt="Web Design" style={styles.serviceImage} />
            <h3 style={styles.serviceTitle}>Web Design</h3>
            <p style={styles.serviceDescription}>Modern and responsive web design solutions that adapt to any device.</p>
          </div>
          <div style={styles.serviceBox} data-aos="fade-right">
            <img src="service2.png" alt="UI/UX Design" style={styles.serviceImage} />
            <h3 style={styles.serviceTitle}>UI/UX Design</h3>
            <p style={styles.serviceDescription}>User-centric designs that enhance user experience and engagement.</p>
          </div>
          <div style={styles.serviceBox} data-aos="fade-right">
            <img src="service3.png" alt="Web Development" style={styles.serviceImage} />
            <h3 style={styles.serviceTitle}>Web Development</h3>
            <p style={styles.serviceDescription}>High-performance, scalable, and secure front-end development.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section style={styles.aboutSection} data-aos="fade-up">
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.aboutDescription}>
          We are a team of creative and passionate front-end developers dedicated to delivering top-quality web solutions.
          With years of experience in the industry, we bring innovative ideas to life through clean, modern, and efficient code.
        </p>
        <button style={styles.ctaButton}>Learn More</button>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  heroSection: {
    padding: '100px 20px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    borderRadius: '10px',
  },
  heroTitle: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '24px',
    marginBottom: '30px',
  },
  ctaButton: {
    padding: '10px 20px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  servicesSection: {
    padding: '80px 20px',
  },
  sectionTitle: {
    fontSize: '36px',
    marginBottom: '40px',
  },
  servicesContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  serviceBox: {
    maxWidth: '300px',
    padding: '20px',
    textAlign: 'left',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    marginBottom: '20px',
  },
  serviceImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
    marginBottom: '20px',
  },
  serviceTitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  serviceDescription: {
    fontSize: '16px',
  },
  aboutSection: {
    padding: '80px 20px',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
  },
  aboutDescription: {
    fontSize: '18px',
    marginBottom: '30px',
  },
};

export default Home;
