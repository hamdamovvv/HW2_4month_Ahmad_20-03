import React, { useState } from 'react';
import Product from './components/Product/Product';
import SearchField from './components/SearchField/SearchField';
import styles from './App.css';
import product1 from "./assets/Product_images/Product1.jpeg";
import product2 from "./assets/Product_images/Product2.jpg";
import product3 from "./assets/Product_images/Product3.jpg";
import product4 from "./assets/Product_images/Product4.jpg";
import product5 from "./assets/Product_images/Product5.jpg";
import product6 from "./assets/Product_images/Product6.jpg";
import product7 from "./assets/Product_images/Product7.jpg";
import product8 from "./assets/Product_images/Product8.jpg";
import product9 from "./assets/Product_images/Product9.jpg";
const products = [
  {
    name: 'Mercedes-Benz Vision AVTR',
    price: 19.99,
    image: product1
  },
  {
    name: 'Mercedes-Benz Vision EQS',
    price: 29.99,
    image: product2
  },
  {
    name: 'Mercedes-Benz Vision EQ Silver Arrow',
    price: 39.99,
    image: product3
  },
  {
    name: 'Mercedes-Benz CLS ',
    price: 49.99,
    image: product4
  },
  {
    name: 'Mercedes-Benz SLS',
    price: 59.99,
    image: product5
  },

  {
    name: 'Mercedes-Benz GL63',
    price: 69.99,
    image: product6
  },

  {
    name: 'Mercedes-Benz Maybach',
    price: 79.99,
    image: product7
  },

  {
    name: 'Mercedes-Benz A180',
    price: 89.99,
    image: product8
  },

  {
    name: 'Mercedes-Benz E63 AMG',
    price: 99.99,
    image: product9
  },

];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  return (
    <div className={styles.appContainer}>
      <SearchField
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
        <div className={styles.productContainer}>
        {filteredProducts.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

    </div>
  );
}

export default App;