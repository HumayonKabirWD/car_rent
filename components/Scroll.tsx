import React from 'react';
import Image from 'next/image';
import icon1 from '../public/nissan-svgrepo-com.svg';
import icon2 from '../public/audi-svgrepo-com.svg';
import icon3 from '../public/hyundai-svgrepo-com.svg';
import icon4 from '../public/mercedes-benz-alt-svgrepo-com.svg';
import icon5 from '../public/bmw-svgrepo-com.svg';
import icon6 from '../public/tesla-svgrepo-com.svg';
import icon7 from '../public/ford-svgrepo-com.svg';
import icon8 from '../public/honda-svgrepo-com.svg';
import icon9 from '../public/toyota-svgrepo-com.svg';



const Scroll = () => {

  return (
    <div className="w-full p-8 mb-20 lg:mb-4  mx-auto pr-5">
      {/* Outer container with hidden overflow */}
      <div className="w-full overflow-hidden relative">
        {/* Scrolling container with animation */}
        <div className="flex gap-4 animate-scroll whitespace-nowrap">
          {/* First set of images */}
          <div className="flex gap-10 shrink-0">
            <Image height={50} width={50} src={icon1} alt='icon'/>
            <Image height={50} width={50} src={icon2} alt='icon'/>
            <Image height={50} width={50} src={icon3} alt='icon'/>
            <Image height={50} width={50} src={icon4} alt='icon'/>
            <Image height={50} width={50} src={icon5} alt='icon'/>
            <Image height={50} width={50} src={icon6} alt='icon'/>
            <Image height={50} width={50} src={icon7} alt='icon'/>
            <Image height={50} width={50} src={icon8} alt='icon'/>
            <Image height={50} width={50} src={icon9} alt='icon'/>
            <div className="hidden lg:flex gap-10 shrink-0">
            <Image height={50} width={50} src={icon1} alt='icon'/>
            <Image height={50} width={50} src={icon2} alt='icon'/>
            <Image height={50} width={50} src={icon3} alt='icon'/>
            <Image height={50} width={50} src={icon4} alt='icon'/>
            <Image height={50} width={50} src={icon5} alt='icon'/>
            <Image height={50} width={50} src={icon6} alt='icon'/>
            <Image height={50} width={50} src={icon7} alt='icon'/>
            <Image height={50} width={50} src={icon8} alt='icon'/>
            <Image height={50} width={50} src={icon9} alt='icon'/>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Scroll;