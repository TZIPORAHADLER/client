import React, { useState, useEffect } from 'react';
import { debounce } from '../utils/utils.js';
import './SearchBar.css'; 

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const debouncedSearch = debounce(onSearch, 300);
        if (query) {
            debouncedSearch(query);
        } else {
            onSearch('');
        }
    }, [query, onSearch]);

    return (
        <div className="search-bar-container">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by Latin name or Family"
                className="search-bar-input"
            />
        </div>
    );
};

export default SearchBar;
