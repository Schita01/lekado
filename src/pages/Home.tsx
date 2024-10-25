import React, { useContext } from 'react';
import Categories from '../components/Categories';
import MainCarousel from '../components/MainCarousel';
import ShopCard from '../components/ProductCard';
import ViewArea from '../components/ViewArea';
import VacancyCard from '../components/VacancyCard';
import ProductCard from '../components/ProductCard';
import Products from '../components/Products';
import DiscountArea from '../components/DiscountArea';
import TopBrand from '../components/TopBrand';

const Home = () => {
  // Get the current language from the context (or pass it as a prop if needed)

  // Translations for the Home component
  const translations = {
    Eng: {
      title: "Welcome to Our Shop",
      description: "Discover the best products tailored for you.",
    },
    Geo: {
      title: "ჩვენი მაღაზიის კეთილი იყოს თქვენი მობრძანება",
      description: "აღმოაჩინეთ საუკეთესო პროდუქცია თქვენთვის.",
    },
    Rus: {
      title: "Добро пожаловать в наш магазин",
      description: "Откройте для себя лучшие товары, подобранные для вас.",
    },
  };

  // Get the current translation based on the selected language

  return (
    <section className='home-section'>
      <div className="home-container">
        <MainCarousel />
        <h1 className="home-title">{}</h1> {/* Dynamic title based on language */}
        <p className="home-description">{}</p> {/* Dynamic description */}
        <Categories />
        <ViewArea />
        <Products/>
        <DiscountArea/>
        {/* <TopBrand/> */}
      </div>
    </section>
  );
}

export default Home;
