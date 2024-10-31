import { useState, useEffect } from 'react';
import { Button, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CharCard from '../../../Components/CharCard/CharCard';
import './HomePage.css';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dattebayo-api.onrender.com/characters")
      .then(response => response.json())
      .then((data) => {
        setUsers(data.characters);
      })
      .catch(error => console.log("Error al cargar los personajes:", error));
  }, []);

  return (
    <div>
       <h1 className="page-title">Personajes</h1>
      <SimpleGrid columns={[1]} spacing="15px" mt={4}>
    {users.map((dato) => (
      <CharCard 
        key={dato.id}
        Id={dato.id}
        Name={dato.name} 
        Img={Array.isArray(dato.images) ? dato.images[0] : dato.images} 
        Movie={dato.debut?.movie} 
        Birthday={dato.personal?.birthdate}
      />

    ))}
</SimpleGrid>
    </div>
  );
};

export default HomePage;
