import React, { useState } from 'react';
import { customersData } from '../data/data.js';
import AddCustomerForm from '../components/AddCustomerForm';
import { Link } from 'react-router-dom';

const Customers = () => {
  const [customers, setCustomers] = useState(customersData);

  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]);
  };

  return (
    <div className="p-6 bg-purple-50 min-h-screen font-serif">
      <h2 className="text-3xl font-bold mb-6 text-purple-800">Customers</h2>

      <div className="mb-4">
        <Link to="/add-customer">
          <button className="bg-purple-400 hover:bg-purple-500 text-white px-4 py-2 rounded-lg transition duration-300">
            Add Customer
          </button>
        </Link></div>

      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="w-full table-auto bg-white rounded-xl overflow-hidden">
          <thead className="bg-purple-300 text-purple-900">
            <tr>
              <th className="p-3 border border-transparent">Customer ID</th>
              <th className="p-3 border border-transparent">Customer Name</th>
              <th className="p-3 border border-transparent">Email</th>
              <th className="p-3 border border-transparent">Phone</th>
              <th className="p-3 border border-transparent">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr
                key={customer.customerId}
                className={
                  index % 2 === 0
                    ? 'bg-purple-100 hover:bg-purple-200'
                    : 'bg-purple-50 hover:bg-purple-200'
                }
              >
                <td className="p-3 border border-transparent">{customer.customerId}</td>
                <td className="p-3 border border-transparent">{customer.customerName}</td>
                <td className="p-3 border border-transparent">{customer.email}</td>
                <td className="p-3 border border-transparent">{customer.phone}</td>
                <td className="p-3 border border-transparent">{customer.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
