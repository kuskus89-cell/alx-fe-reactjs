import { useState } from "react";
import { fetchUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUsers({ username, location, minRepos });
      setUsers(data);
    } catch {
      setError("No users found matching your criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Minimum Repositories (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            min={0}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {users.length > 0 &&
          users.map((user) => (
            <div
              key={user.id}
              className="flex items-center space-x-4 p-2 border-b"
            >
              <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full"/>
              <div>
                <p className="font-bold">{user.login}</p>
                <p>Location: {user.location || "N/A"}</p>
                <p>Repos: {user.public_repos}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Search;
