
import { useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  oldPrice: string;
  newPrice: string;
  category: string;
}

const Products = () => {
  const allProducts: Product[] = [
    { name: "Menthol E-Cigarette Kit", oldPrice: "$74.50", newPrice: "$49.50", category: "good" },
    { name: "Disposable Sub-Ohm Tank", oldPrice: "$74.50", newPrice: "$49.50", category: "good" },
    { name: "POP Extra Strawberry", oldPrice: "$74.50", newPrice: "$49.50", category: "bad" },
    { name: "Battery And Charger Kit", oldPrice: "$74.50", newPrice: "$49.50", category: "bad" },
    { name: "Battery And Charger Kit", oldPrice: "$74.50", newPrice: "$49.50", category: "bad" },
    { name: "Battery And Charger Kit", oldPrice: "$74.50", newPrice: "$49.50", category: "bad" },
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cart, setCart] = useState<Product[]>([]);

  const filterProducts = (): Product[] => {
    if (selectedCategory === "all") {
      return allProducts;
    }
    return allProducts.filter((product) => product.category === selectedCategory);
  };

  const handleAddToCart = (product: Product) => {
    const updatedCart = [...cart, product]; // Add the product object to the cart
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to local storage
  };

  return (
    <div className="products-section">
      <div className="container">
        <div className="categories">
          <h2 className="products-section-h2">Latest Arrival Products</h2>
          <div className="select_category">
            <span
              className={`select_category-span ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </span>
            <span
              className={`select_category-span ${selectedCategory === "good" ? "active" : ""}`}
              onClick={() => setSelectedCategory("good")}
            >
              Good
            </span>
            <span
              className={`select_category-span ${selectedCategory === "bad" ? "active" : ""}`}
              onClick={() => setSelectedCategory("bad")}
            >
              Bad
            </span>
          </div>
        </div>
        <div className="product-cards">
          {filterProducts().map((product, index) => (
            <ProductCard key={index} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
