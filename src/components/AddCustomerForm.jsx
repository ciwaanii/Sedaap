import React, { useState } from 'react';

const AddCustomerForm = ({ onAddCustomer }) => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loyalty, setLoyalty] = useState('Bronze');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      customerId: `CUST${Math.floor(Math.random() * 1000)}`,
      customerName,
      email,
      phone,
      loyalty,
    };
    onAddCustomer(newCustomer);
    setCustomerName('');
    setEmail('');
    setPhone('');
    setLoyalty('Bronze');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-purple-50 rounded-2xl shadow-lg font-serif"
    >


      <div className="mb-4">
        <label className="block text-purple-800 mb-1">Customer Name</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
          className="w-full p-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
        />
      </div>

      <div className="mb-4">
        <label className="block text-purple-800 mb-1">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
        />
      </div>

      <div className="mb-4">
        <label className="block text-purple-800 mb-1">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full p-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
        />
      </div>

      <div className="mb-6">
        <label className="block text-purple-800 mb-1">Loyalty</label>
        <select
          value={loyalty}
          onChange={(e) => setLoyalty(e.target.value)}
          className="w-full p-3 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300 transition bg-white"
        >
          <option value="Bronze">Bronze</option>
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-400 hover:bg-purple-500 text-white font-semibold py-3 rounded-lg transition"
      >
        Add Customer
      </button>
    </form>
  );
};

export default AddCustomerForm;
