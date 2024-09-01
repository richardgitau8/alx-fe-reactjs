import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <Link to="/login">Go to Login</Link><br/>
      <Link to="/post/1">Go to Blog Post</Link>
    </div>
  );
}

export default Home;
