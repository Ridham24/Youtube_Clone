import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '9ed4e9a96cmsh10ebf3c10a0f829p17bfc2jsnbbf7b5f71ecf',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
}
export const FetchApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`,options) 
    return data
}
