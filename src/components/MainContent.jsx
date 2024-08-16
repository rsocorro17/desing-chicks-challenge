import ProductList from './ProductList';
import useSearch from '../hooks/useSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faSearch, faDollarSign, faCubes, faSort } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const initialProducts = [
  { id: 1, name: 'Zelda Breath of the Wild', salePrice: 45.00, originalPrice: 52.50, image: '../../public/assets/images/product.jpg', game: 'OSRS', type: 'Items', feature: 'RPG', description: 'Nintendo Switch Game', quantity: 4 },
  { id: 2, name: 'Zelda Breath of the Wild 2', salePrice: 25.00, originalPrice: 35.50, image: '../../public/assets/images/product.jpg', game: 'RS3', type: 'Items', feature: 'RPG', description: 'Nintendo Switch Game', quantity: 4 },
  { id: 3, name: 'Zelda Ocarine Time', salePrice: 75.00, originalPrice: 99.50, image: '../../public/assets/images/product.jpg', game: 'OSRS', type: 'Gold', feature: 'ADVENTURE', description: 'Nintendo 64 Game', quantity: 2 },
  { id: 4, name: 'Zelda Majora´s Mask', salePrice: 15.00, originalPrice: 20.50, image: '../../public/assets/images/product.jpg', game: 'RS3', type: 'Items', feature: 'ARCADE', description: 'Nintendo 64 Game', quantity: 2 },
  { id: 5, name: 'Zelda Link to the Past', salePrice: 45.00, originalPrice: 52.50, image: '../../public/assets/images/product.jpg', game: 'CS:GO', type: 'Gold', feature: 'ADVENTURE', description: 'Nintendo Wii Game', quantity: 10 },
  { id: 6, name: 'Zelda Tears of the Kingdom', salePrice: 15.00, originalPrice: 22.50, image: '../../public/assets/images/product.jpg', game: 'RS3', type: 'Gold', feature: 'RPG', description: 'Nintendo Switch Game', quantity: 13 },
  { id: 7, name: 'Zelda Awakening', salePrice: 60.00, originalPrice: 92.50, image: '../../public/assets/images/product.jpg', game: 'CS:GO', type: 'Accounts', feature: 'RPG', description: 'Nintendo GameBoy Game', quantity: 7  },
  { id: 8, name: 'Zelda II The Adventure of Link', salePrice: 10.00, originalPrice: 25.50, image: '../../public/assets/images/product.jpg', game: 'CS:GO', type: 'Items', feature: 'RPG', description: 'Nintendo GameBoy Color Game', quantity: 9 },
  { id: 9, name: 'Zelda The Faces of Evil', salePrice: 42.00, originalPrice: 55.50, image: '../../public/assets/images/product.jpg', game: 'OSRS', type: 'Accounts', feature: 'ADVENTURE', description: 'Nintendo NES', quantity: 5 },
  { id: 10, name: 'Zelda´s Adventure', salePrice: 45.00, originalPrice: 75.50, image: '../../public/assets/images/product.jpg', game: 'RS3', type: 'Accounts', feature: 'ARCADE', description: 'Nintendo GameCube Game', quantity: 6 },
  
];

const MainContent = () => {
  const { 
    searchTerm, 
    setSearchTerm, 
    selectedGame, 
    setSelectedGame,
    priceRange, 
    setPriceRange,
    itemType, 
    setItemType,
    filteredProducts 
  } = useSearch(initialProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('Featured');
  const itemsPerPage = 8;

  const games = ['All Games', 'OSRS', 'RS3', 'CS:GO'];
  const priceRanges = ['All Prices', 'Under $15', '$25 - $50', 'Over $50'];
  const itemTypes = ['All Types', 'Gold', 'Items', 'Accounts'];
  const features = ['Featured', 'RPG', 'ADVENTURE', 'ARCADE'];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="main-content">
      <div className="content-header">
        <h1 className='title'>Buy Yours Favorite Zelda Games</h1>
        <div className="filters">
          <div className="filter-item">
            <FontAwesomeIcon icon={faGamepad} className="filter-icon" />
            <span className='filter-text' onClick={() => toggleDropdown('game')}>
              {selectedGame} ▼
            </span>
            <div className={`dropdown-content ${activeDropdown === 'game' ? 'active' : ''}`}>
              {games.map(game => (
                <p key={game} onClick={() => { setSelectedGame(game); toggleDropdown('game'); }}>{game}</p>
              ))}
            </div>
          </div>
          
          <div className="filter-item search-container">
            <FontAwesomeIcon icon={faSearch} className="filter-icon" />
            <input 
              type="text" 
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-item dropdown">
            <FontAwesomeIcon icon={faDollarSign} className="filter-icon" />
            <span className='filter-text' onClick={() => toggleDropdown('price')}>
              {priceRange} ▼
            </span>
            <div className={`dropdown-content ${activeDropdown === 'price' ? 'active' : ''}`}>
              {priceRanges.map(range => (
                <p key={range} onClick={() => { setPriceRange(range); toggleDropdown('price'); }}>{range}</p>
              ))}
            </div>
          </div>

          <div className="filter-item dropdown">
            <FontAwesomeIcon icon={faCubes} className="filter-icon" />
            <span className='filter-text' onClick={() => toggleDropdown('type')}>
              {itemType} ▼
            </span>
            <div className={`dropdown-content ${activeDropdown === 'type' ? 'active' : ''}`}>
              {itemTypes.map(type => (
                <p key={type} onClick={() => { setItemType(type); toggleDropdown('type'); }}>{type}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="products-container">
        <div className="sort-container filter-item dropdown" style={{marginLeft:'50rem'}}>
          <FontAwesomeIcon icon={faSort} className="filter-icon" />
          <span className='filter-text' onClick={() => toggleDropdown('sort')}>
            {sortBy} ▼
          </span>
          <div className={`dropdown-content ${activeDropdown === 'sort' ? 'active' : ''}`}>
            {features.map(feature => (
              <p key={feature} onClick={() => { setSortBy(feature); toggleDropdown('sort'); }}>{feature}</p>
            ))}
          </div>
        </div>
        <ProductList products={currentItems} />
        <div className="pagination">
          {Array.from({ length: Math.ceil(filteredProducts.length / itemsPerPage) }, (_, i) => (
            <button key={i} onClick={() => paginate(i + 1)} className={currentPage === i + 1 ? 'active' : ''}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;