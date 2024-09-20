import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Adjust the path as necessary

const Search = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await fetchUserData(username);
    setUsers(data);
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}  {/* Show loading message */}
      
      {users.length > 0 ? (
        users.map(user => (
          <div key={user.login} className="border p-4 my-2">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12" />
            <h2 className="text-xl">{user.login}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </div>
        ))
      ) : (
        !loading && <p>Looks like we can't find the user.</p>  // Show message if no users found
      )}
    </div>
  );
};

export default Search;
