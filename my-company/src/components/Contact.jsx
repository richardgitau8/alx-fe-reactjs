import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              display: 'block',
              margin: '10px 0',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              width: '100%'
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              display: 'block',
              margin: '10px 0',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              width: '100%'
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{
              display: 'block',
              margin: '10px 0',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              width: '100%',
              height: '100px'
            }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;