import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Text, Spinner, Center } from '@chakra-ui/react';

const RestaurantDetails = () => {
  let { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    // Suponiendo que fetchRestaurant es una función que hace una petición a tu API
    fetchRestaurant(id)
      .then(data => {
        setRestaurant(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching restaurant details:", error);
        setError(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) return <Center><Spinner /></Center>;
  if (error) return <Text>Ha ocurrido un error cargando los detalles del restaurante.</Text>;
  if (!restaurant) return <Box>No se encontró el restaurante</Box>;

  return (
    <Box p="5">
      <Text fontSize="2xl" fontWeight="bold">{restaurant.name}</Text>
      <Text my="2">{restaurant.description}</Text>
      {/* Mostrar detalles del menú aquí */}
    </Box>
  );
};

export default RestaurantDetails;
