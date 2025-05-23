import React, { useState } from 'react';
import { ordersData } from '../data/data.js';
import AddOrderForm from '../components/AddOrderForm';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState(ordersData);

  const handleAddOrder = (newOrder) => {
    setOrders([...orders, newOrder]);
  };

  return (
    <div className="p-6 bg-pink-50 min-h-screen font-serif">
      <h2 className="text-3xl font-bold mb-6 text-pink-800">Orders</h2>

      <div className="mb-4">
        <Link to="/add-order">
          <button className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg transition duration-300">
            Add Order
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full table-auto bg-white rounded-xl overflow-hidden">
          <thead className="bg-pink-300 text-pink-900">
            <tr>
              <th className="p-3 border border-transparent">Order ID</th>
              <th className="p-3 border border-transparent">Customer Name</th>
              <th className="p-3 border border-transparent">Status</th>
              <th className="p-3 border border-transparent">Total Price</th>
              <th className="p-3 border border-transparent">Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.orderId}
                className={
                  index % 2 === 0
                    ? 'bg-pink-100 hover:bg-pink-200'
                    : 'bg-pink-50 hover:bg-pink-200'
                }
              >
                <td className="p-3 border border-transparent">{order.orderId}</td>
                <td className="p-3 border border-transparent">{order.customerName}</td>
                <td className="p-3 border border-transparent">{order.status}</td>
                <td className="p-3 border border-transparent">{order.totalPrice}</td>
                <td className="p-3 border border-transparent">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
