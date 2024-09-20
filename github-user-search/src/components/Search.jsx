import React, { useState } from 'react';
import fetchUserData from '../services/githubService';


function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Handle form submission and API request
  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setLoading(true);    // Set loading state
    setError(false);     // Reset error state

    try {
      const data = await fetchUserData(username); // Fetch user data from GitHub API
      setUserData(data);                          // Store user data in state
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError(true);    // Set error state if the API call fails
    } finally {
      setLoading(false); // Stop loading once request is finished
    }
  };

  return (
    <div>
      <h2>Search for GitHub Users</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}   {/* Show Loading message while data is being fetched */}
      {error && <p>Looks like we can't find the user.</p>} {/* Show error if user not found */}
      
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.name}'s avatar`} width={100} />
          <h3>{userData.name}</h3>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
