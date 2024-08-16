import React from 'react';
import webDevelopmentImage from '../assets/web-development.jpg';
import graphicsDesignImage from '../assets/graphics-design.jpg';

function Services() {
  return (
    <div style={styles.container}>
      {/* Page Title */}
      <h1 style={styles.pageTitle} data-aos="zoom-in">Our Expertise</h1>

      {/* Web Development Service */}
      <section style={styles.serviceSection} data-aos="fade-up">
        <div style={styles.imageContainer}>
          <img src={webDevelopmentImage} alt="Web Development" style={styles.serviceImage} />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.serviceTitle} data-aos="fade-right">Web Development</h2>
          <p style={styles.serviceDescription}>
            At the core of our offerings is our cutting-edge web development service. We specialize in creating
            dynamic, responsive, and visually captivating websites that not only look stunning but also perform
            exceptionally well. From simple landing pages to complex web applications, our team leverages the latest
            technologies to ensure your website stands out in the digital landscape. Let's build a digital presence that
            elevates your brand and engages your audience.
          </p>
          <button style={styles.ctaButton}>Learn More</button>
        </div>
      </section>

      {/* Graphics Design Service */}
      <section style={styles.serviceSection} data-aos="fade-up">
        <div style={styles.imageContainer}>
          <img src={graphicsDesignImage} alt="Graphics Design" style={styles.serviceImage} />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.serviceTitle} data-aos="fade-right">Graphics Design</h2>
          <p style={styles.serviceDescription}>
            Our graphics design services are crafted to create visually compelling brand experiences. Whether it's
            designing logos, brochures, or full-scale marketing materials, we ensure every design resonates with your
            brand identity. Our creative team works closely with you to deliver designs that are not only aesthetically
            pleasing but also strategically effective. Transform your brand's visual appeal with our top-notch design services.
          </p>
          <button style={styles.ctaButton}>Explore Our Work</button>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: '48px',
    margin: '50px 0',
    color: '#333',
  },
  serviceSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '100px',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flex: '1 1 45%',
    margin: '20px',
    textAlign: 'center',
  },
  serviceImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  textContainer: {
    flex: '1 1 45%',
    margin: '20px',
    textAlign: 'left',
  },
  serviceTitle: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#007bff',
  },
  serviceDescription: {
    fontSize: '18px',
    color: '#555',
    lineHeight: '1.6',
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
};

export default Services;
