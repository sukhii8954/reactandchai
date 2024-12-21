import axios from 'axios';

const API_URL = 'https://api.npoint.io/dee51ea017d20efdfcc8';

export const fetchPDFs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching PDFs:', error);
    throw error;
  }
};
