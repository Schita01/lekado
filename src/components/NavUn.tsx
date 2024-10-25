import { SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';

const NavUn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("მთავარი");

  const handleItemClick = (item: SetStateAction<string>) => {
    setActiveItem(item);
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  const navNameArr = [
    { name: "მთავარი", path: "/" },
    { name: "ჩვენ შესახებ", path: "/about" },
    { name: "პროდუქცია", path: "/products" },
    { name: "ჩვენი გამოცდილება", path: "/experience" },
    { name: "ვაკანსიები", path: "/vacancies" },
    { name: "კონტაქტი", path: "/contact" },
  ];

  return (
    <header className='lefp'>
      <div className="container">
        <button onClick={toggleMenu} className="menu-button">
          {isMenuOpen ? 'Close Menu' : 'Open Menu'}
        </button>
        {isMenuOpen && (
          <div className="response-nav">
            <ul className="list list-res">
              {navNameArr.map((navItem, index) => (
                <li key={index}>
                  <Link
                    onClick={() => handleItemClick(navItem.name)}
                    className={activeItem === navItem.name ? "active" : ""}
                    to={navItem.path} // Set the 'to' prop for navigation
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavUn;
