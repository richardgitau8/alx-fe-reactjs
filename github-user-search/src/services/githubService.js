import axios from 'axios';

// Function to fetch user data from GitHub API
const fetchUserData = async (username) => {
  const apiUrl = `https://api.github.com/users/${username}`; // API endpoint

  try {
    const response = await axios.get(apiUrl);  // Make GET request to GitHub API
    return response.data;  // Return the user data
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;  // Throw error so it can be handled in the component
  }
};

export default fetchUserData;
