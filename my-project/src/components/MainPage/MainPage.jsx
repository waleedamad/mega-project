import React, { useEffect, useState } from 'react';
import '../MainPage/MainPage.css';
import Gallery from '../Gallery/Gallery';
import Waves from '../DiscountOffer/DiscountOffer';
import About from '../About/About';
import Contact from '../Contact/Contact';

function MainPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-img" id='bgimg'>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className={`text-animation-container ${isVisible ? 'slide-in' : ''} mt-16 md:mt-32 md:ms-16 text-center md:text-left`}>
            <p className='font-serif text-3xl md:text-5xl font-bold text-gray-800'><span className='text-blue-500'>NEW </span> COLLECTIONS</p>
            <p className={`text-xl md:text-3xl font-serif mt-2 text-gray-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}> GET THE BEST <span className='text-blue-500'>PRODUCTS</span></p>
            <p className={`text-lg md:text-2xl font-serif mt-2 text-gray-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>START YOUR <span className='text-blue-500'>FAVOURITE</span> SHOPPING</p>
            <button className={`rounded bg-black text-white p-2 md:p-1 h-10 mt-4 mx-auto md:ms-0 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>Explore More</button>
          </div>
          <div className="mt-8 md:mt-16 mr-0 md:mr-12 w-full md:w-auto">
            {/* Replace the existing src with your desired image URL */}
            <img className='w-full md:w-[510px] h-auto' src="https://i.pinimg.com/474x/76/e6/b9/76e6b9355380c85fe9a80dddae96172c.jpg" alt="Image" />
          </div>
        </div>
      </div>
      <Waves />
      <About />
      <Gallery />
      <Contact />
    </>
  );
}

export default MainPage;
