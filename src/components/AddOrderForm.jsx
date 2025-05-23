import React, { useState } from 'react';

const AddOrderForm = ({ onAddOrder }) => {
  const [customerName, setCustomerName] = useState('');
  const [status, setStatus] = useState('Pending');
  const [totalPrice, setTotalPrice] = useState('');
  const [orderDate, setOrderDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      orderId: `ORD${Math.floor(Math.random() * 1000)}`,
      customerName,
      status,
      totalPrice,
      orderDate,
    };
    onAddOrder(newOrder);
    setCustomerName('');
    setStatus('Pending');
    setTotalPrice('');
    setOrderDate('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-pink-50 rounded-2xl shadow-lg font-serif"
    >


      <div className="mb-4">
        <label className="block text-pink-800 mb-1">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
      </div>

      <div className="mb-4">
        <label className="block text-pink-800 mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition bg-white"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-pink-800 mb-1">Total Price</label>
        <input
          type="number"
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
          required
          className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
      </div>

      <div className="mb-6">
        <label className="block text-pink-800 mb-1">Order Date</label>
        <input
          type="date"
          value={orderDate}
          onChange={(e) => setOrderDate(e.target.value)}
          required
          className="w-full p-3 rounded-lg border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 rounded-lg transition"
      >
        Add Order
      </button>
    </form>
  );
};

export default AddOrderForm;
