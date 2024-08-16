import { useState } from 'react';
import { useCart } from '../hooks/useCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [currency, setCurrency] = useState('USD');
  
  const { totalItems } = useCart();

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header>
      <nav>
        <div className="nav-left adjust-nav-logo">
          <div>
            <img src="assets/images/chicksgold.png" className="header-logo" />
          </div>
          <span className='divider'>|</span> 
          <ul>
            <li className="dropdown">
              <span className='text-header' onClick={() => toggleDropdown('currency')}>CURRENCY ▼</span>
              <div className={`dropdown-content ${activeDropdown === 'currency' ? 'active' : ''}`}>
                <p onClick={() => setCurrency('USD')}>USD</p>
                <p onClick={() => setCurrency('EUR')}>EUR</p>
                <p onClick={() => setCurrency('GBP')}>GBP</p>
              </div>
            </li>
            <li className="dropdown">
              <span className='text-header' onClick={() => toggleDropdown('items')}>ITEMS ▼</span>
              <div className={`dropdown-content ${activeDropdown === 'items' ? 'active' : ''}`}>
                <p>OSRS Gold</p>
                <p>RS3 Gold</p>
                <p>OSRS Items</p>
                <p>OSRS Accounts</p>
              </div>
            </li>
            <li className="dropdown">
              <span className='text-header' onClick={() => toggleDropdown('accounts')}>ACCOUNTS ▼</span>
              <div className={`dropdown-content ${activeDropdown === 'accounts' ? 'active' : ''}`}>
                <p>OSRS Accounts</p>
                <p>RS3 Accounts</p>
                <p>CS:GO Accounts</p>
              </div>
            </li>
            <li className='text-header'>SWAP</li>
            <li className='text-header'>SELL</li>
          </ul>
        </div>
        <div className="nav-right">
          <ul>
            <li className='text-header'>{currency}</li>
            <li className="cart-icon text-header">
              CART
              <span className="cart-count">{totalItems}</span>
            </li>
            <li>
            <FontAwesomeIcon icon={faUser} className="filter-icon-user" />
              <button className="sign-in-btn">SIGN IN</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;