// src/utils/api.js
const mockRestaurants = [
  { id: 1, name: 'Pizzería Buen Sabor', description: 'La mejor pizza de la ciudad.' },
  { id: 2, name: 'Hamburguesas El Gordo', description: 'Hamburguesas jugosas y enormes.' },
  { id: 3, name: 'Sushi Mar y Tierra', description: 'Frescura y calidad insuperables.' },
];

export const fetchRestaurants = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockRestaurants), 500); // Simula una llamada API con delay
  });
};
