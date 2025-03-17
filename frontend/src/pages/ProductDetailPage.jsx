import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product data from API
    axios.get(`/api/products/${id}`)
      .then(response => {
        setProduct(response.data.product);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    axios.post('/api/products/cart', { productId: id, quantity })
      .then(response => {
        alert('Product added to cart');
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
      });
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>
      <p className="text-lg font-bold mb-4">${product.price}</p>
      <div className="flex items-center mb-4">
        <label htmlFor="quantity" className="mr-2">Quantity:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min="1"
          className="w-16 p-2 border rounded"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetailPage;