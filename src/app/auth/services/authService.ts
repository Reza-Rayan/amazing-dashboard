import axios from 'axios';


const API_URL = import.meta.env.BASE_URL;



// Function to login
export const login = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
};


// Function to register
export const register = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/auth/register`, { email, password });
    return response.data;
};


// Function to logout
export const logout = () => {
    localStorage.removeItem('token');
};

// Function to get the current user
export const getCurrentUser = () => {
    return localStorage.getItem('token');
};
