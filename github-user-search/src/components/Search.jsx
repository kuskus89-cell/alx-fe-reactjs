import { useState } from 'react';
//useState is used to store input value

function Search ({ onSearch }) {
    const [ username, setUsername] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!username.trim()) return;

  setLoading(true);
  setError('');
  setUser(null);

  try {
    const data = await fetchUserData(username);
    setUser(data);
  } catch {
    setError("Looks like we can't find the user");
  } finally {
    setLoading(false);
  }
};

return (
  <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>

    {loading && <p>Loading...</p>}
    {error && <p>{error}</p>}
    {user && (
      <div>
        <img src={user.avatar_url} alt={user.login} width="100" />
        <p>{user.login}</p>
      </div>
    )}
  </div>
);
}
    
   



export default Search;

