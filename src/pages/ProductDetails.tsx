import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productName } = useParams(); // Get product name from URL params

  const allProducts = [
    { name: 'Menthol E-Cigarette Kit', oldPrice: '$74.50', newPrice: '$49.50', category: 'good' },
    { name: 'Disposable Sub-Ohm Tank', oldPrice: '$74.50', newPrice: '$49.50', category: 'good' },
    { name: 'POP Extra Strawberry', oldPrice: '$74.50', newPrice: '$49.50', category: 'bad' },
    { name: 'Battery And Charger Kit', oldPrice: '$74.50', newPrice: '$49.50', category: 'bad' },
    { name: 'Battery And Charger Kit', oldPrice: '$74.50', newPrice: '$49.50', category: 'bad' },
    { name: 'Battery And Charger Kit', oldPrice: '$74.50', newPrice: '$49.50', category: 'bad' },
  ];

  const product = allProducts.find((p) => p.name === productName);

  return product ? (
    <div className="product-details">
        <div className="vacancy_top">
                <span className='top-span'>პროდუქცია</span>
            </div>
            
      <div className="container">
        <div className="product-details-container">
          <div className="product-details-img">
            {/* Add image if needed */}
          </div>
          <div className="product-details-info">
            <span className='product-details-info-span'>{product.name}</span>
            <div className="price_prod-det">
            <p className='product-details-info-p'>New Price: {product.newPrice}</p>
            <p className='product-details-info-p'>Old Price: {product.oldPrice}</p>
            </div>
            <span className='product-details-info-span'>{product.category}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p>Product not found</p>
  );
};

export default ProductDetails;
