import axios from 'axios';

const API_URL = 'https://api-liveloop.leomullerluiz.com/wp-json/wp/v2/posts/8';

export const getPostDataById = async () => {
    const response = await axios.get(API_URL);
    return response.data;
}