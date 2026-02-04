import { useState } from 'react';
//useState is used to store input value

function Search ({ onSearch }) {
    const [ username, setUsername] = useState('')


const handleSubmit = (e) => {
    e.preventDefault();
    //stops page reload
    if (!username.trim());
        return;
    onSearch(username.trim());
    //delegating responsibility to parent component
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
);
}

export default Search;

// onChange is used to update the state as the user types
//onSubmit is used to trigger the search
//onSearch is used to delegate (clean design) responsibility