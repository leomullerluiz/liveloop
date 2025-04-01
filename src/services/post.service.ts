import axios from 'axios';

const URL = `${import.meta.env.VITE_API_URL}`;

export const getPostDataById = async (postId: number) => {
    const response = await axios.get(`${URL}posts/${postId}`);
    return response.data;
}

export const getPostList = async () => {
    const response = await axios.get(`${URL}posts`);
    return response.data;
}