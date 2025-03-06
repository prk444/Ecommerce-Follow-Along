import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/Productcard';

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from API
    axios.get('/api/products/allWithUserEmail')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleDeleteClick = (productId) => {
    axios.delete(`/api/products/deleteProduct/${productId}`)
      .then(response => {
        setProducts(products.filter(product => product._id !== productId));
      })
      .catch(error => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map(product => (
        <ProductCard
          key={product._id}
          name={product.name}
          image={product.images[0]}
          description={product.description}
          price={product.price}
          email={product.user.email}
          onDeleteClick={() => handleDeleteClick(product._id)}
        />
      ))}
    </div>
  );
}

export default ProductPage;