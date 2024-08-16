import { useState, useMemo } from 'react';

export const useSearch = (initialProducts = []) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGame, setSelectedGame] = useState('All Games');
  const [priceRange, setPriceRange] = useState('All Prices');
  const [itemType, setItemType] = useState('All Types');
  const [products] = useState(initialProducts);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGame = selectedGame === 'All Games' || product.game === selectedGame;
      const matchesType = itemType === 'All Types' || product.type === itemType;
      
      let matchesPrice = true;
      if (priceRange === 'Under $50') {
        matchesPrice = product.salePrice < 50;
      } else if (priceRange === '$50 - $100') {
        matchesPrice = product.salePrice >= 50 && product.salePrice <= 100;
      } else if (priceRange === 'Over $100') {
        matchesPrice = product.salePrice > 100;
      }

      return matchesSearch && matchesGame && matchesType && matchesPrice;
    });
  }, [products, searchTerm, selectedGame, priceRange, itemType]);

  return { 
    searchTerm, 
    setSearchTerm, 
    selectedGame, 
    setSelectedGame,
    priceRange, 
    setPriceRange,
    itemType, 
    setItemType,
    filteredProducts 
  };
};

export default useSearch;