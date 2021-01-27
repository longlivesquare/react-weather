import { useState } from 'react';

const SearchBar = ({handleSearch}) => {
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        return handleSearch(location);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="search" 
                    id="locationSearch" 
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder='Location'
                    required
                />
                <button type='submit'>
                    Search
                </button>
            </form>
        </div>
    )
};

export default SearchBar;