import React from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import RestaurantList from './components/RestaurantList';
import mockRestaurants from './utils/mockRestaurants';

function App() {
  return (
    <Box textAlign="center" fontSize="xl">
      <Box p={5}>
        <Text>Bienvenido a tu App de Restaurantes</Text>
      </Box>
      <Button colorScheme="blue">Haz tu Pedido</Button>

      <RestaurantList restaurants={mockRestaurants} />
    </Box>
  );
}

export default App;
