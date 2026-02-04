import axios from "axios";

export async function fetchUsers({ username, location, minRepos }) {
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=10`; // limit to 10 results

  const response = await axios.get(url);

  // response.data.items is an array of users
  return response.data.items;
}
