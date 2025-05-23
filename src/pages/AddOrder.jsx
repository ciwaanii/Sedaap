import React from 'react';
import AddOrderForm from '../components/AddOrderForm';

export default function AddOrder() {
  return (
    <div className="min-h-screen bg-pink-50 p-8 font-serif">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">
          Add New Order
        </h2>
        <AddOrderForm />
      </div>
    </div>
  );
}
