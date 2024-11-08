import React from 'react';
import { Home, Car, Calendar, MapPin, Icon, CircleAlert } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';

const SidebarLayout = () => {

  return (
    <div className="relative min-h-screen pb-16 lg:pb-0 ">
      <div className="h-16 w-full fixed z-10 flex items-center justify-between bg-slate-300">
        <Link href="/" className="flex items-center pl-2 lg:pl-6 gap-2">
          <Image src={logo}width={100} height={100} alt='logo'/>
          <h1 className='font-extrabold text-xl text-gray-700'>HK.Rent</h1>
        </Link>
        <div className="flex items-center gap-3 lg:gap-7 pr-3 lg:pr-8">
          <Link className='font-bold ' href="/">Home</Link>
          <Link className='font-bold' href="/configure/car">Cars</Link>
          <Link className='font-bold' href="/configure/about">About</Link>
        </div>
        
      </div>
      {/* Desktop Sidebar - hidden on mobile */}
      <div className="hidden lg:block fixed top-0 left-0 h-full w-64 mt-20 border-r-2">
        <div className="p-4">
          <nav className="space-y-8">
            <Link className='flex text-lg font-bold' href="/"><Home className='mr-2 w-5'/>Home</Link>
            <Link className='flex text-lg font-bold' href="/configure/car"><Car className='mr-2 w-5'/>Vehicle Fleet</Link>
            <Link className='flex text-lg font-bold' href="/configure/book"><Calendar className='mr-2 w-5'/>Book Now</Link>
            <Link className='flex text-lg font-bold' href="/configure/about"><CircleAlert className='mr-2 w-5'/>About</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed z-10 bottom-0 left-0 right-0 text-white bg-gray-800 lg:hidden">
        <nav className="flex justify-around items-center h-16">
            <Link className='flex text-lg font-bold' href="/"><Home className='mr-2 w-5'/></Link>
            <Link className='flex text-lg font-bold' href="/configure/car"><Car className='mr-2 w-5'/></Link>
            <Link className='flex text-lg font-bold' href="/configure/book"><Calendar className='mr-2 w-5'/></Link>
            <Link className='flex text-lg font-bold' href="/configure/about"><CircleAlert className='mr-2 w-5'/></Link>
        </nav>
      </div>

      <div className="absolute top-20 lg:ml-80 lg:mr-10 ml-0">
      </div>
    </div>
  );
};

export default SidebarLayout;