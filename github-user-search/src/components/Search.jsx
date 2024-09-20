import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);  // Set error state if API call fails
    } finally {
      setLoading(false);  // Stop loading state
    }
  };

  return (
    <div>
      <h2>Search for GitHub Users</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>["Looks like we cant find the user"]{/* Error message */}
      
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width={100} />
          <h3>{userData.name || 'No name available'}</h3>
          <p>{userData.login}</p>  {/* Display GitHub login (username) */}
          <p>{userData.bio || 'No bio available'}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
