import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Search from './components/search.jsx'
import { fetchUserData } from './services/githubService.js'
import './index.css';


function App() {
   const [user, setUser] = useState(null);
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(false);


    const handleSearch = async (username) => {
       setLoading(true);
       setError('');
       setUser(null);

        try {
          const data = await fetchUserData(username);
          setUser(data);
    } catch  {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

   return (
    <div>
      <h1>GitHub User Search</h1>

      <Search onSearch={handleSearch} />

      {loading && <p>Loading</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="100" />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;