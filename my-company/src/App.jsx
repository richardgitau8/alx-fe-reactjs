import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const styles = {
  appContainer: {
    height: '100vh', // Make sure the app container takes the full height of the viewport
    display: 'flex',
    flexDirection: 'column',
  },
  pageContainer: {
    flex: 1, // Allow the page content to fill the remaining space below the Navbar
    overflowY: 'auto', // Handle overflow in case content exceeds the viewport height
    padding: '20px',
  },
};

function App() {
  return (
    <div style={styles.appContainer}>
      <Router>
        <Navbar />
        <div style={styles.pageContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;