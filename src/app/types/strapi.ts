export interface StrapiCategory {
  id: number;
  attributes: {
    nombre: string;
    slug: string;
    descripcion?: string;
    imagen?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
    createdAt: string;
    updatedAt: string;
    publishedAt?: string;
  };
}