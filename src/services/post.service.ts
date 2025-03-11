import axios from 'axios';

const URL = `${import.meta.env.VITE_API_URL}posts/8`;

export const getPostDataById = async () => {
    const response = await axios.get(URL);
    return response.data;
}