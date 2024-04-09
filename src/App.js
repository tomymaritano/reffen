import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import { CartProvider } from './context/CartContext';
// Importa otros componentes según necesites

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<RestaurantList />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            {/* Define otras rutas aquí */}
          </Routes>
        </Router>
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;
