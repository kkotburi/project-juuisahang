import axios from 'axios';

const SERVER_DRINKS = `${process.env.REACT_APP_API_URL}/drinks`;

const getDrinks = async () => {
  const response = await axios.get(SERVER_DRINKS);
  return response;
};

export { getDrinks };
