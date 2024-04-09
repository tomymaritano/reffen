// src/components/RestaurantList.js
import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Text, Spinner, Center } from "@chakra-ui/react";
import { fetchRestaurants } from "../utils/api";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchRestaurants()
      .then((data) => {
        setRestaurants(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <Center>
        <Spinner />
      </Center>
    );
  if (error)
    return <Text>Ha ocurrido un error cargando los restaurantes.</Text>;

  return (
    <Box padding="4">
      <SimpleGrid columns={[1, null, 3]} spacing="4px">
        {restaurants.map((restaurant) => (
          <Box
            key={restaurant.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="5"
          >
            <Link to={`/restaurant/${restaurant.id}`}>
              <Text fontSize="xl" fontWeight="bold">
                {restaurant.name}
              </Text>
              <Text mt="4">{restaurant.description}</Text>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RestaurantList;
