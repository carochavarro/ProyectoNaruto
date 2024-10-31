import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  VStack,
  Card,
  CardBody,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import "./CharacterDetailPage.css";

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    fetch(`https://dattebayo-api.onrender.com/characters/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los detalles del personaje");
        }
        return response.json();
      })
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" color="orange.500" />
      </Box>
    );
  }

  if (!character) {
    return <p>No se encontraron detalles para este personaje.</p>;
  }

  return (
    <Box className="character-page-container" p={4}>
      <Card className="character-card">
        <HStack spacing={4} p={4} flexWrap="wrap" justifyContent="center">
          {character.images &&
            character.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${character.name} Image ${index + 1}`}
                boxSize="200px"
                objectFit="cover" // Esto asegura que la imagen se ajuste bien
                borderRadius="md"
              />
            ))}
        </HStack>

        <CardBody>
          <Heading as="h1" size="lg" mb={4} className="character-name">
            {character.name}
          </Heading>

          <Divider />

          <VStack align="start" mt={4} spacing={4} className="character-info">
            <Box>
              <Heading size="md" className="section-heading">
                Familia
              </Heading>
              {character.family && (
                <Box>
                  <Text>
                    <strong>Padre:</strong> {character.family.father}
                  </Text>
                  <Text>
                    <strong>Madre:</strong> {character.family.mother}
                  </Text>
                  {character.family.son && (
                    <Text>
                      <strong>Hijo:</strong> {character.family.son}
                    </Text>
                  )}
                  {character.family.daughter && (
                    <Text>
                      <strong>Hija:</strong> {character.family.daughter}
                    </Text>
                  )}
                  {character.family.wife && (
                    <Text>
                      <strong>Esposa:</strong> {character.family.wife}
                    </Text>
                  )}
                  {character.family.adoptiveSon && (
                    <Text>
                      <strong>Hijo Adoptivo:</strong>{" "}
                      {character.family.adoptiveSon}
                    </Text>
                  )}
                  {character.family.godfather && (
                    <Text>
                      <strong>Padrino:</strong> {character.family.godfather}
                    </Text>
                  )}
                </Box>
              )}
            </Box>

            <Divider />

            <Box>
              <Heading size="md" className="section-heading">
                Juego
              </Heading>
              <Text>{character.debut?.game}</Text>
            </Box>

            <Divider />

            <Box>
              <Heading size="md" className="section-heading">
                Apariciones
              </Heading>
              <Text>{character.debut?.appearsIn}</Text>
            </Box>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default CharacterDetailPage;
