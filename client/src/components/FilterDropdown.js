import React from 'react';
import './FilterDropdown.css'; 

const FilterDropdown = ({ setSelectedCategory, categories }) => {
    return (
        <div className="filter-dropdown-container">
            <select
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-dropdown-select"
            >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                    <option key={index} value={category.Category}>
                        {category.Category}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterDropdown;
