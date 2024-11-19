
import React from 'react';

const PopularCars = () => {
  const cars = [
    {
      name: "Tesla Model 3",
      image: "/car/tesla03.jpeg", // Replace with actual image URLs
      price: "$799/month",
    },
    {
      name: "BMW X5",
      image: "/car/BMWX5.jpeg", // Replace with actual image URLs
      price: "$699/month",
    },
    {
      name: "Audi Q7",
      image: "/car/Audiq.jpeg", // Replace with actual image URLs
      price: "$899/month",
    },
    {
      name: "Mercedes-Benz C-Class",
      image: "/car/Mercedes.jpeg", // Replace with actual image URLs
      price: "$849/month",
    },
    {
      name: "Audi 47",
      image: "/car/Audi.jpeg", // Replace with actual image URLs
      price: "$799/month",
    },
    {
      name: "BMW 3",
      image: "/car/BMW3.jpeg", // Replace with actual image URLs
      price: "$699/month",
    },
    {
      name: "Ford F-150",
      image: "/car/Ford.jpeg", // Replace with actual image URLs
      price: "$899/month",
    },
    {
      name: "Honda Accord",
      image: "/car/Honda.jpeg", // Replace with actual image URLs
      price: "$849/month",
    },
    {
      name: "Hynda Elantra",
      image: "/car/Hyunda.jpeg", // Replace with actual image URLs
      price: "$799/month",
    },
    {
      name: "Kia Sportage",
      image: "/car/kia.jpeg", // Replace with actual image URLs
      price: "$899/month",
    },
    {
      name: "Mazda CX-5",
      image: "/car/mazeda.jpeg", // Replace with actual image URLs
      price: "$849/month",
    },
    {
      name: "Nissan Altima",
      image: "/car/Nissan.jpeg", // Replace with actual image URLs
      price: "$799/month",
    },
  ]
  return (
    <section className="bg-gray-100 py-10 px-6 max-w-4xl mx-auto p-8 text-center top-20 ml-5 lg:ml-80 md:ml-60 absolute pb-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Popular Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                height={200}
                width={300}
                src={car.image}
                alt={car.name}
                className="w-full h-44 py-5"
              />
              <div className="p-2">
                <h3 className="text-xl font-bold text-gray-700">{car.name}</h3>
                <p className="text-gray-600 text-lg">{car.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCars;
