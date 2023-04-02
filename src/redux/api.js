import axios from 'axios';

const YOUR_APP_KEY = 'd86083f566ace717da50d7cd237d998c';
const YOUR_APP_ID = '419ab6ef';

export const getRecipes = async (query) => {
  console.log('api');
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  return await axios.get(url);
};
