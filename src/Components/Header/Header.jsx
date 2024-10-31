import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { Button } from "@chakra-ui/react";
const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="title">
        <img
          src="https://i.pinimg.com/564x/9c/3d/0c/9c3d0ceb6f9139d69218b107705a7f92.jpg"
          alt="Logo"
        />
        <span>Naruto App</span>
        <button
          className="favorite-button"
          onClick={() => navigate("/favoritos")}
        >
          Ver Favoritos
        </button>
      </div>
    </header>
  );
};

export default Header;
