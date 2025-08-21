import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMenuByRestaurant } from "../api/restaurant";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function RestaurantDetail() {
  const { id } = useParams(); // id du restaurant
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadMenu() {
      try {
        const restaurantMenu = await fetchMenuByRestaurant(id);
        setMenu(restaurantMenu);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadMenu();
  }, [id]);

  if (loading) return <p>Chargement du menu...</p>;
  if (error) return <p style={{ color: "red" }}>Erreur : {error}</p>;

  return (
    <div>
      <h1>Menu du restaurant</h1>
      <div className="menu-container">
        {menu.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price} €</p>
            {item.dsc && <p className="description">{item.dsc}</p>}
            <button  className="btn" onClick={() => dispatch(addToCart(item))}>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantDetail;
