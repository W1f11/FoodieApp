import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRestaurants } from "../api/restaurant";

function RestaurantsList() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRestaurants() {
      try {
        const reps = await fetchRestaurants();
        setRestaurants(reps);
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
      <h1>Restaurants</h1>
      <div className="restaurants-container">
  {restaurants.map((r) => (
    <div className="restaurant-card" key={r.restaurantID}>
      <Link to={`/restaurant/${r.restaurantID}`}>
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
