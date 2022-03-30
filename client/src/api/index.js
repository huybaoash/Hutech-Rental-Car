import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) =>
axios.post(`${URL}/posts/update`, payload);

export const fetchUsers = () => axios.get(`${URL}/users`);
export const createUser = (payload) => axios.post(`${URL}/users`, payload);
export const updateUser = (payload) =>
axios.post(`${URL}/users/update`, payload);

export const fetchCars = () => axios.get(`${URL}/cars`);
export const createCar = (payload) => axios.post(`${URL}/cars`, payload);
export const updateCar = (payload) =>
axios.post(`${URL}/cars/update`, payload);