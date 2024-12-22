// services/photoService.ts

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

/**
 * Récupère toutes les Posts depuis l'API.
 * @returns {Promise<Post[]>} Une promesse contenant une liste de Posts.
 */
export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(API_URL + "?_limit=6");

  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }

  return response.json();
};

/**
 * Récupère une Post par son ID depuis l'API.
 * @param id - L'identifiant de la Post.
 * @returns {Promise<Post>} Une promesse contenant une seule Post.
 */
export const fetchPostById = async (id: number): Promise<Post> => {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }

  return response.json();
};
