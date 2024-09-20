import axios from 'axios';

// Fetch GitHub user function
const fetchGitHubUser = async (username) => {
  try {
    const apiKey = process.env.REACT_APP_GITHUB_API_KEY; // Use environment variable
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${apiKey}`, // Include API key in the request if necessary
      },
    });
    return response.data; // Return the user data
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error; // Rethrow error to handle it in the component
  }
};

export default fetchGitHubUser;
