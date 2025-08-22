// src/api/Restaurant.js

const FAKE_RESTAURANT_URL =
  "https://cors-anywhere.herokuapp.com/https://fakerestaurantapi.runasp.net/api/Restaurant";

// 🔑 Ta clé Unsplash
const UNSPLASH_ACCESS_KEY = "WahZaw7_w7Uk7L-Agpthb1nUXUyeKa9jp6wY_T0aE4g";

// 📌 Récupérer tous les restaurants (API fake)
export const fetchRestaurants = async () => {
  const response = await fetch(FAKE_RESTAURANT_URL);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des restaurants");
  }
  return await response.json();
};

// 📌 Récupérer le menu d’un restaurant (exemple avec burgers)
export const fetchMenuByRestaurant = async (restaurantId) => {
  const response = await fetch(
    `https://free-food-menus-api-two.vercel.app/burgers`
  );
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération du menu du restaurant");
  }
  return await response.json();
};

// 📸 Récupérer une image Unsplash pour un restaurant
export const fetchRestaurantImage = async (restaurantName) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
      restaurantName + " restaurant"
    )}&client_id=${UNSPLASH_ACCESS_KEY}&per_page=1`
  );

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération de l'image du restaurant");
  }

  const data = await response.json();
  if (data.results.length > 0) {
    return data.results[0].urls.small; // ✅ petite image pour affichage
  } else {
    return "https://via.placeholder.com/400x300?text=No+Image"; // fallback si rien trouvé
  }
};
