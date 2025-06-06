import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

export async function getProductsByCategory(categorySlug: string) {
  try {
    const response = await axios.get(`${API_URL}/api/products`, {
      params: {
        /* 'filters[category][slug][$eq]': categorySlug, */
        'populate': '*'
      },
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzQ5MjM5MzkxLCJleHAiOjE3NTE4MzEzOTF9.MLyDulCQPtN1AmpEvmmRWc2GFk18MeO3n13lYZB98M4` // Añade esto
      }
    });
    return response.data.data;
  } catch (error:any) {
    console.error("Error:", error.response?.data || error.message);
    return [];
  }
}