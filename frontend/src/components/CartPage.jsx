import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CartPage = () => {
  const [cart, setCart] = useState(null);
  const userId = "YOUR_USER_ID"; // Replace with actual user ID

  useEffect(() => {
    // Fetch cart data from API
    axios.get(`/api/products/cart/${userId}`)
      .then(response => {
        setCart(response.data.cart);
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });
  }, [userId]);

  const handleIncreaseQuantity = (productId) => {
    axios.put(`/api/products/cart/increase/${userId}/${productId}`)
      .then(response => {
        setCart(response.data.cart);
      })
      .catch(error => {
        console.error('Error increasing quantity:', error);
      });
  };

  const handleDecreaseQuantity = (productId) => {
    axios.put(`/api/products/cart/decrease/${userId}/${productId}`)
      .then(response => {
        setCart(response.data.cart);
      })
      .catch(error => {
        console.error('Error decreasing quantity:', error);
      });
  };

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.products.map((item) => (
        <div key={item.product._id} className="flex items-center mb-4">
          <img src={item.product.images[0]} alt={item.product.name} className="w-16 h-16 object-cover rounded mr-4" />
          <div className="flex-1">
            <h2 className="text-lg font-bold">{item.product.name}</h2>
            <p className="text-sm text-gray-700">Price: ${item.product.price}</p>
            <div className="flex items-center">
              <button
                onClick={() => handleDecreaseQuantity(item.product._id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                onClick={() => handleIncreaseQuantity(item.product._id)}
                className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartPage;