import Categories from '../components/Categories';
import MainCarousel from '../components/MainCarousel';
import ViewArea from '../components/ViewArea';

import Products from '../components/Products';
import DiscountArea from '../components/DiscountArea';

const Home = () => {
  // Get the current language from the context (or pass it as a prop if needed)

  // Translations for the Home component

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
