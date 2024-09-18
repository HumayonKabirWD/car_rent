import Cars from "@/components/Cars";
import Maxwidth from "@/components/Maxwidth";
import { ShieldCheck }from "lucide-react";


export default function Home() {
  return (
    <div className="mt-5 bg-slate-50">
      <Maxwidth>
        <div className="flex">
          <img className="w-full opacity-50 md:h-[80vh]" src="/bgcar.webp" alt="" />
          <div className="absolute px-3 py-5">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-gray-600 underline">Get a car in rental</h1>
            <div className="mt-2 font-semibold text-xl flex gap-7 md:text-2xl">
              <p className="flex gap-2"><img className="h-5 md:h-7" src="/city.svg" alt="" /> In city</p>
              <p className="flex gap-2"> <img className="h-5 md:h-7" src="/village.svg" alt="" />out of city</p>
            </div>
            <ul className="mt-16 md:mt-52 md:text-xl font-semibold text-gray-600">
              <li>| Online payment system</li>
              <li>| Digitel model car</li>
              <li>| No servising cost</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
          <div className="h-44 w-full bg-gradient-to-r from-red-300 rounded-ss-[2.5rem]">
            <p className="flex justify-start text-3xl font-extrabold py-5 px-3"> <ShieldCheck className="font-extrabold h-10 mr-2"/> Every time Every where</p>
            <p className="px-10 text-gray-600">you can accese our any type of car from any where </p>
            </div>
          <div className="h-44 w-full bg-gradient-to-r from-red-300 rounded-ss-[2.5rem]">
            <p className="flex justify-start text-3xl font-extrabold py-5 px-3"> <ShieldCheck className="font-extrabold h-10 mr-2"/>Booked Sheduile </p>
            <p className="px-10 text-gray-600">you can take a advance sheduile from our servises  </p>
          </div>
          <div className="h-44 w-full bg-gradient-to-r from-red-300 rounded-ss-[2.5rem]">
            <p className="flex justify-start text-3xl font-extrabold py-5 px-3"> <ShieldCheck className="font-extrabold h-10 mr-2"/> Online Payment method</p>
            <p className="px-10 text-gray-600">we can take your payment with any online currency </p>
          </div>
        </div>
        <div className="bg-slate-300 grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-16 pb-2">
            <img className="rounded-xl" src="/car.jpg" alt="car" />
            <div className=" ml-10 mt-5 lg:mt-10 flex flex-col gap-10">
              <div className="h-56 w-1 bg-red-400 absolute ml-6"></div>
            <div className="flex h-14 w-full">
                  <div className=" h-14 w-14 rounded-full bg-gradient-to-b from-red-600 to-red-400 relative"><p className="items-center flex justify-center pt-2 font-bold text-4xl text-white">1</p></div>
                  <p className="text-3xl font-bold flex items-center ml-2">Celect your place</p>
              </div>
              <div className="flex h-14 w-full">
                  <div className=" h-14 w-14 rounded-full bg-gradient-to-b from-red-600 to-red-400 relative"><p className="items-center flex justify-center pt-2 font-bold text-4xl text-white">2</p></div>
                  <p className="text-3xl font-bold flex items-center ml-2">Choose your car</p>
              </div>
              <div className="flex h-14 w-full">
                  <div className=" h-14 w-14 rounded-full bg-gradient-to-b from-red-600 to-red-400 relative"><p className="items-center flex justify-center pt-2 font-bold text-4xl text-white">3</p></div>
                  <p className="text-3xl font-bold flex items-center ml-2">EMI payment system</p>
              </div>
            </div>
        </div>
        <div className="mt-20">
          <p className="font-semibold text-3xl md:text-4xl lg:text-5xl">Celect your <span className="bg-gradient-to-r from-red-600 to-red-400 text-transparent bg-clip-text">fevorite</span>  car</p>
          <p className=" ">this is most populer of this month</p>
        </div>
        <Cars/>
      </Maxwidth>
    </div>
  );
}
