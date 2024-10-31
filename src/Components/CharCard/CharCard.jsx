import React, { useState } from "react";
import { Card, CardBody, Image, Stack, Heading, Text, Box, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { collection, addDoc, Timestamp } from "firebase/firestore"; 
import { db } from "../../FireBase/FireBaseConfig";
import './CharCard.css';

const CharCard = (props) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleCardClick = () => {
    navigate(`/character/${props.Id}`);
  };

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      try {
        await addDoc(collection(db, "favorites"), {
          name: props.Name,
          birthdate: props.Birthday,
          movie: props.Movie,
          addedAt: Timestamp.now()
        });
        console.log("Personaje añadido a favoritos en Firestore");
      } catch (error) {
        console.error("Error al agregar personaje a favoritos:", error);
      }
    }
  };

  return (
    <Card className="char-card" onClick={handleCardClick}>
      <Flex align="center">
        <Image
          src={props.Img}
          alt={props.Name}
          className="character-image"
        />

        <CardBody className="char-card-content">
          <Heading as="h2">{props.Name}</Heading>
          <Text>{props.Movie}</Text>
        </CardBody>

        <Box className="favorite-icon" onClick={(e) => { e.stopPropagation(); toggleFavorite(); }}>
          {isFavorite ? (
            <FavoriteIcon style={{ color: "rgb(252, 84, 0)" }} />
          ) : (
            <FavoriteBorderIcon style={{ color: "gray" }} />
          )}
        </Box>
      </Flex>
    </Card>
  );
};

export default CharCard;
