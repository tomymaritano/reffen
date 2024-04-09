// src/components/RestaurantList.js
import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

const RestaurantList = ({ restaurants }) => {
  return (
    <Box padding="4">
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {restaurants.map((restaurant) => (
          <Box key={restaurant.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p="5">
            <Text fontSize="xl" fontWeight="bold">{restaurant.name}</Text>
            <Text mt="4">{restaurant.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RestaurantList;
