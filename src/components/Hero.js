import React from "react";
import { XyzTransitionGroup } from '@animxyz/react';


function Hero() {
  const foodImageUrl = "/images/download-removebg-preview.png"; // Remplacez par votre URL

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>🍔 Bienvenue sur FoodieApp ! 🍕</h1>
        <p>
          Envie de savourer vos plats préférés sans bouger de chez vous ? FoodieApp
          vous simplifie la vie ! Découvrez un large choix de restaurants, commandez
          facilement en quelques clics et recevez votre repas rapidement, chaud et
          délicieux.
        </p>
        <div className="hero-buttons">
          <button className="btn">Commandez-Maintenant</button>
          <button className="btn">Voir Menu</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={foodImageUrl} alt="Plat FoodieApp" />
      </div>
    </div>
  );
}

export default Hero;
