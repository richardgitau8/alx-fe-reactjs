import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>MyCompany</h1>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.navLink}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/about" style={styles.navLink}>About</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/services" style={styles.navLink}>Services</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/contact" style={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logoContainer: {
    flex: '1',
  },
  logo: {
    fontSize: '24px',
    margin: 0,
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
    transition: 'color 0.3s',
  },
  navLinkActive: {
    color: '#007bff',
  }
};

export default Navbar;
