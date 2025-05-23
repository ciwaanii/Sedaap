import React from 'react';
import AddCustomerForm from '../components/AddCustomerForm';

export default function AddCustomer() {
  return (
    <div className="min-h-screen bg-purple-50 p-8 font-serif">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          Add New Customer
        </h2>
        <AddCustomerForm />
      </div>
    </div>
  );
}
