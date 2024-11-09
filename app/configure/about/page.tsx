import Image from "next/image";
import about from "@/public/young-couple-talking-sales-person-car-showroom.jpg";


// components/AboutSection.js
export default function AboutSection() {
  const year = new Date().getFullYear()
  
    return (
      <section className="max-w-4xl mx-auto p-8 text-center top-20 ml-5 lg:ml-80 md:ml-60 absolute pb-20">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10">
            <div className="flex items-center">
                <Image className=" rounded-xl shadow-2xl" src={about} alt="about"/>
            </div>
            <div className=" mt-10">
                <p className="text-lg mb-4"> Welcome to <span className="font-semibold">HkRental</span>, your trusted car rental   service! We aim to provide you with the best travel experience by offering a wide range   of vehicles suited to your needs, from compact cars and SUVs to luxury sedans and vans.
                </p>
            </div>
        </div>
        <div className="flex items-center justify-center h-16 bg-slate-100 mt-20">
          <p className="text-sm"> &copy; Hk.Rental from 2020 to {year} </p>
        </div>
        
      </section>
    );
  }
  