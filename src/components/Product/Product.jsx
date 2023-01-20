// Product.js
import React from 'react';
import styles from './product.module.css';


const Product = ({name, price, image}) => (
    <div className={styles.mainProduct}>
        <div className={styles.productContainer}>
            <div className={styles.productIcon}>
                <img src={image}  alt={name} className={styles.productImage}/>
            </div>
            <div className={styles.productInfo}>
                <h3>{name}</h3>
                <p>Price: ${price}</p>
            </div>
        </div>
    </div>
);

export default Product;
