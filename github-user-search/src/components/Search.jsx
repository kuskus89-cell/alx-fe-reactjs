import { useState } from 'react';
//useState is used to store input value

function Search ({ onSearch }) {
    const [ username, setUsername] = useState('')
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
   
const handleSubmit = async (e) => {
    e.preventDefault();
    //stops page reload
    if (!username.trim());
        return;
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
    <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder="Enter Github username"
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
}

export default Search;

// onChange is used to update the state as the user types
//onSubmit is used to trigger the search
//onSearch is used to delegate (clean design) responsibility