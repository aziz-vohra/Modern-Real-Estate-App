import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': '6dab355cc6msha7a41eb61340cc8p1bc400jsn49d6c22dbc6c'
    },
  });
    
  return data;
}

