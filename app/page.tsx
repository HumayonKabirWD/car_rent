"use client"


import { Check } from "lucide-react";
import Image from "next/image";
import carbg from "../public/carbg.png";
import Scroll from "@/components/Scroll";


export default function Home() {
  return (
    <div className="absolute top-20 lg:ml-80 lg:mr-10 mx-5">
      <h2 className="text-3xl lg:text-4xl font-bold capitalize">rent a car in a easy way !</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col mt-20 gap-5 ">
          <div className="flex gap-2 font-semibold capitalize p-3 bg-gradient-to-r from-slate-300 to-white rounded-xl"><Check/><span>select a car</span></div> 
          <div className="flex gap-2 font-semibold capitalize p-3 bg-gradient-to-r from-slate-300 to-white rounded-xl"><Check/><span>booking your own plan</span></div>          
          <div className="flex gap-2 font-semibold capitalize p-3 bg-gradient-to-r from-slate-300 to-white rounded-xl"><Check/><span>sent your location</span></div>          
          <div className="flex gap-2 font-semibold capitalize p-3 bg-gradient-to-r from-slate-300 to-white rounded-xl"><Check/><span>simple online payment & EMI system</span></div>        
        </div>
          <Image src={carbg} alt="carbg" width={460} height={460}/>
      </div>

      <Scroll/>

    </div>
  );
}
