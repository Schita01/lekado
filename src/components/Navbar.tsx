import { SetStateAction, useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("მთავარი");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isItem, setIsItem] = useState(0);

  // Define the navigation items in Georgian with corresponding paths
  const navLinks = [
    { name: "მთავარი", path: "/" },     
    { name: "ჩვენ შესახებ", path: "/about" },
    { name: "პროდუქცია", path: "/product" },
    { name: "ვაკანსიები", path: "/vacancies" },
    { name: "კონტაქტი", path: "/contact" },
  ];

  setIsItem

  useEffect(() => {
    const debounce = (func: { (): void; (arg0: any): any; }, delay: any | undefined) => {
      let timer: number | undefined;
      return (..._args:any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(), delay); // Invalid spread syntax using `args[]`

      };
    };

    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 150);
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (item: SetStateAction<string>) => {
    if (activeItem !== item) {
      setActiveItem(item);
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar_header">
      <div className="head-1">
        <div className="container">
          <div className="navbar_inner">
            <Link to="/" onClick={() => handleItemClick(navLinks[0].name)}>
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <form className="form">
              <button className="button-left" aria-label="Search">
                <FontAwesomeIcon
                  className="search-icon"
                  icon={faMagnifyingGlass}
                />
              </button>
              <input
                className="search-input"
                placeholder="Search..."
                required
                type="text"
              />
              <button type="reset" className="button-right" aria-label="Clear">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="clear-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </form>
            <div className="navbar_inner-right-container">
              <div className="order">
                <FontAwesomeIcon
                  className="market-icon"
                  icon={faCartShopping}
                />
                <span className="item-market">{isItem}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={isScrolled ? "scrolled head-2" : "head-2"}>
        <div className="container">
          <div className="head-2-cont">
            <ul className="head-2-ul">
              {navLinks.map((navLink, index) => (
                <Link
                  className="links"
                  to={navLink.path}
                  key={index}
                  onClick={() => handleItemClick(navLink.name)}
                >
                  <li className={activeItem === navLink.name ? "active" : ""}>
                    {navLink.name}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="hamburger-menu" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FontAwesomeIcon className="hm-menu" icon={faXmark} />
              ) : (
                <FontAwesomeIcon className="hm-menu" icon={faBars} />
              )}
            </div>
            {isMenuOpen && (
              <div className="response-nav">
                <div className="container">
                  <ul className="list list-res">
                    {navLinks.map((navLink, index) => (
                      <li
                        key={index}
                        onClick={() => handleItemClick(navLink.name)}
                        className={activeItem === navLink.name ? "active" : ""}
                      >
                        {navLink.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
