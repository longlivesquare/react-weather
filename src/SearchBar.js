import { useState } from 'react';

const SearchBar = ({handleSearch}) => {
    const [location, setLocation] = useState('');

    const onSearch = () => {
        return handleSearch(location);
    }

    return (
        <div>
            <form onSubmit={onSearch} action='#'>
                <input 
                    type="search" 
                    id="locationSearch" 
                    value={location}
                    onChange={e => setLocation(e.target.value)}
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