import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../FireBase/FireBaseConfig";
import "./Favoritos.css";


const Favoritos = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const querySnapshot = await getDocs(collection(db, "favorites"));
      const favoritesData = querySnapshot.docs.map((doc) => doc.data());
      setFavorites(favoritesData);
    };

    fetchFavorites();
  }, []);

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">Mis Personajes Favoritos</h2>
      {favorites.length === 0 ? (
        <p>No hay personajes en favoritos.</p>
      ) : (
        favorites.map((fav, index) => (
          <div key={index} className="favorite-item">
            <p className="character-name">{fav.name}</p>
            <p className="character-info">
              Fecha de Cumpleaños: {fav.birthdate || "No disponible"}
            </p>
              <p className="added-date">
              Agregado el: {fav.addedAt?.toDate().toLocaleString()}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Favoritos;
