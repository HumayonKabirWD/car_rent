"use client"
// components/CarBookingForm.js
import { useState } from 'react';

export default function page() {
  const [formData, setFormData] = useState({
    pickUpLocation: '',
    dropOffLocation: '',
    pickUpDate: '',
    dropOffDate: '',
    carType: '',
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // You can add form submission logic here, like sending the data to an API
    console.log('Booking Data:', formData);
  };

  return (
    <div className=" flex justify-center ">
    <div onSubmit={handleSubmit} className="w-fit lg:w-[720px] mx-auto p-6 bg-gray-100 rounded-lg shadow-md top-20 lg:ml-80 lg:mr-10 m-5 absolute pb-20">
      <h2 className="text-2xl font-bold mb-4">Car Rental Booking</h2>
      
      
          <label className="block mb-2 font-medium">Pick-Up Location</label>
          <input
          type="text"
          name="pickUpLocation"
          value={formData.pickUpLocation}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
          required
          />

      <label className="block mb-2 font-medium">Drop-Off Location</label>
      <input
        type="text"
        name="dropOffLocation"
        value={formData.dropOffLocation}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2 font-medium">Pick-Up Date</label>
      <input
        type="date"
        name="pickUpDate"
        value={formData.pickUpDate}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2 font-medium">Drop-Off Date</label>
      <input
        type="date"
        name="dropOffDate"
        value={formData.dropOffDate}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2 font-medium">Car Type</label>
      <select
        name="carType"
        value={formData.carType}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      >
        <option value="">Select a Car Type</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="van">Van</option>
        <option value="luxury">Luxury</option>
      </select>

      <label className="block mb-2 font-medium">Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2 font-medium">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <label className="block mb-2 font-medium">Phone</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Book Now
      </button>
    </div>
    </div>
  );
}
