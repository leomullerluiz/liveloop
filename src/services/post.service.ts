import axios from 'axios';

const URL = `${import.meta.env.VITE_API_URL}`;

export const getPostDataById = async () => {
    const response = await axios.get(`${URL}posts/8`);
    return response.data;
}