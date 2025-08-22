import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRestaurants, fetchRestaurantImage } from "../api/restaurant";

function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRestaurants() {
      try {
        const reps = await fetchRestaurants();

        // Charger les images Unsplash pour chaque resto
        const imagesMap = {};
        for (let r of reps) {
          const img = await fetchRestaurantImage(r.restaurantName);
          imagesMap[r.restaurantID] = img;
        }

        setRestaurants(reps);
        setImages(imagesMap);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadRestaurants();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p style={{ color: "red" }}>Erreur : {error}</p>;

  return (
    <div>
      <h1 id="restaurants-container">Restaurants</h1>
      <div className="restaurants-container">
        {restaurants.map((r) => (
          <div className="restaurant-card" key={r.restaurantID}>
  <img
    src={images[r.restaurantID]}
    alt={r.restaurantName}
    style={{
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
      marginTop: "10px",
    }}
  />

  <Link 
    to={`/restaurant/${r.restaurantID}`} 
    style={{ display: "block", marginTop: "10px", fontWeight: "bold", fontSize: "18px", color: "#2c3e50" }}
  >
    {r.restaurantName}
  </Link>

  <p>{r.address}</p>
</div>

        ))}
      </div>
    </div>
  );
}

export default RestaurantsList;
