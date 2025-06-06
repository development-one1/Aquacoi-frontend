import axios from 'axios';
import qs from 'qs';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export const getCategories = async () => {
  try {
    const query = qs.stringify({
      populate: '*', // Para incluir relaciones (como imágenes)
      sort: ['nombre:asc'],
    });

    const response = await axios.get(`${STRAPI_URL}/api/categorias?${query}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching categories from Strapi:', error);
    return [];
  }
};