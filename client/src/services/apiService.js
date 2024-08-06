import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const fetchPlants = async (page = 1, limit = 20) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/all?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching plants:', error);
        throw error; 
    }
};

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

export const fetchPlantsByCategory = async (category) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/plants/category/${category}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching plants by category:', error);
        throw error;
    }
};

export const searchPlants = async (query) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search`, { params: { query } });
        console.log(JSON.stringify(response.data));
        return response.data.map(entry => entry.item);
    } catch (error) {
        console.error('Error searching plants:', error);
        throw error;
    }
};
