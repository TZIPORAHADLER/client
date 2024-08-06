import React, { useEffect, useState } from 'react';
import PlantDetail from './PlantDetail';
import FilterDropdown from './FilterDropdown';
import Modal from './Modal';
import SearchBar from './SearchBar';
import { fetchPlants, fetchCategories, fetchPlantsByCategory, searchPlants } from '../services/apiService';
import Grid from './Grid.css'; 

const PlantGrid = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(20); 

  useEffect(() => {
    const loadPlants = async () => {
      try {
        const data = await fetchPlants(currentPage, limit);
        setPlants(data); 
        setFilteredPlants(data);
      } catch (error) {
      }
    };

    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (error) {
      }
    };

    loadPlants();
    loadCategories();
  }, [currentPage]); 

  useEffect(() => {
    const loadFilteredPlants = async () => {
      try {
        if (selectedCategory) {
          const data = await fetchPlantsByCategory(selectedCategory);
          setFilteredPlants(Array.isArray(data) ? data : []);
        } else {
          setFilteredPlants(plants);
        }
      } catch (error) {
      }
    };

    loadFilteredPlants();
  }, [selectedCategory, plants]);

  const handleSearch = async (query) => {
    try {
      const data = await searchPlants(query);
      setFilteredPlants(Array.isArray(data) ? data : []);
    } catch (error) {
    }
  };

  const loadMorePlants = async () => {
    setCurrentPage(prevPage => prevPage + 1); 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>House Plants</h1>
      <div class="serchfilter">
      <SearchBar onSearch={handleSearch} />
      <FilterDropdown setSelectedCategory={setSelectedCategory} categories={categories} /></div>
      <table style={{ width: '100%', maxWidth: '1200px', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Latin Name</th>
            <th>Family</th>
            <th>Category</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {filteredPlants.map(plant => (
            <tr key={plant.id}>
              <td>{plant['Latin name']}</td>
              <td>{plant.Family}</td>
              <td>{plant.Categories}</td>
              <td>
                <button onClick={() => setSelectedPlant(plant)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPlant && (
        <Modal onClose={() => setSelectedPlant(null)}>
          <PlantDetail plant={selectedPlant} />
        </Modal>
      )}
      <button onClick={loadMorePlants} style={{ marginTop: '20px' }}>
        Load More
      </button>
    </div>
  );
};

export default PlantGrid;
