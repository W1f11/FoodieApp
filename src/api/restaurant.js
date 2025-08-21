// src/api/Restaurant.js

const FAKE_RESTAURANT_URL = "https://cors-anywhere.herokuapp.com/https://fakerestaurantapi.runasp.net/api/Restaurant";

// Récupérer tous les restaurants
export const fetchRestaurants = async () => {
  const response = await fetch(FAKE_RESTAURANT_URL);
  if (!response.ok) throw new Error("Erreur lors de la récupération des restaurants");
  return await response.json();
};

// Récupérer le menu d’un restaurant par son ID
export const fetchMenuByRestaurant = async (restaurantId) => {
  const response = await fetch(`https://free-food-menus-api-two.vercel.app/burgers`);
  if (!response.ok) throw new Error("Erreur lors de la récupération du menu du restaurant");
  return await response.json();
};
