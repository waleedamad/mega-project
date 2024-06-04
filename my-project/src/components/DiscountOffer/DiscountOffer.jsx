import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const data = [
  {
    img: "https://media.istockphoto.com/id/1488818114/photo/blank-white-t-shirt-mockup-flat-lay-front-and-back-isolated.webp?b=1&s=170667a&w=0&k=20&c=2vAjKkgAZHvL3AhQ2A35rr22dQFjuykuDcpys0jdxxw=",
    Category: "Tshirt"
  },
  {
    img: "https://media.istockphoto.com/id/1501781167/photo/black-t-shirt-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=5aXbDUkbrdwcbqJg9eVFB0Vmf9TOlStT9TPTigkWZzM=",
    Category: "Tshirt"
  },
  {
    img: "https://media.istockphoto.com/id/1323480815/photo/navy-t-shirt.webp?b=1&s=170667a&w=0&k=20&c=kTg9Y0OeZA2UexWSgwataRcTebQK8stsbOlWv34w_OY=",
    Category: "Tshirt"
  },
];

function Waves() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="bg-blue-200 mb-4 ">
        <div className="w-20">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1r4_7K4GYysFFpetGGC9yw-a5mDwXSrRws9e8DW295ro8fqsSgHzVk9ZJw&s" alt="" className='rounded-full md:ml-48  rotate-45' />
        </div>
        <h1 className='text-center text-5xl font-serif font-bold md:mb-3 mb-12 text-red-400'>Special Discount</h1>
        <div className="md:flex mx-1  ">
          {data.map((item, key) => (
            <div key={key} className={`justify-between md:w-1/3 p-4 ${isVisible ? 'animate-slide-in' : ''}`}>
              <div className="border border-gray-300 rounded-lg overflow-hidden focus:touch-pan-x transform transition-transform duration-300 hover:scale-105">
                <img className="w-full h-64" src={item.img} alt="" />
                <Link to='/addtocart'><button className='bg-black hover:bg-blue-700 text-white font-serif py-2 px-4 rounded-full mt-2 mb-2 mx-auto block'>Add To Cart</button></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Waves;
