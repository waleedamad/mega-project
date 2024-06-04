import React, {  useState } from 'react';
import Data from '../CardData/CardData'; // Assuming this is imported correctly
import { Link } from 'react-router-dom';




function Card(props) {

  const [items, setItems] = useState(Data);

  const filterItems = (categItem) => {
    const updatedItems = Data.filter((curElem) => {
      return curElem.Category === categItem;
    });
    setItems(updatedItems);
  };

  const resetFilter = () => {
    setItems(Data);
  };

  return (
    <>
      <h1 className='text-center font-serif font-bold text-5xl text-blue-500 mt-12 mb-8'>OUR PRODUCTS</h1>
      <div className='flex justify-center gap-2 mt-3    '>
        <button className='bg-black text-white p-2 rounded font-serif hover:bg-blue-500 ' onClick={resetFilter}>All Products</button>
        <button className='bg-black text-white p-2 rounded font-serif hover:bg-blue-500 ' onClick={() => filterItems('snikers')}> Sneakers</button>
        <button className='bg-black text-white p-2 rounded font-serif hover:bg-blue-500 ' onClick={() => filterItems('mobile cover')}>Mobile Cover</button>
        <button className='bg-black text-white p-2 rounded font-serif hover:bg-blue-500 ' onClick={() => filterItems('cosmetic')}>Cosmetic</button>
        <button className='bg-black text-white p-2 rounded font-serif hover:bg-blue-500 ' onClick={() => filterItems('gloves')}>Gloves</button>
      </div>
      <div className="md:flex justify-center gap-2 mt-3   flex">
      <button className='bg-black text-white p-2 rounded font-serif hover:bg-blue-500 ' onClick={() => filterItems('socks')}>Socks</button>
        <button className='bg-black text-white p-2 rounded font-serif hover:bg-blue-500 ' onClick={() => filterItems('watch')}>Watch</button>
        <button className='bg-black text-white p-2 rounded font-serif hover:bg-blue-500 ' onClick={() => filterItems('womenshoes')}>WomenShoes</button>
        <button className='bg-black text-white p-2 rounded font-serif hover:bg-blue-500 ' onClick={() => filterItems('casual')}>Casual</button>
      </div>
      <div className="w-full h-full flex flex-wrap justify-center mt-4 mb-4">
        {items.map((data) => (
          <div key={data.id} className="md:w-1/6 w-1/3 p-2 flex justify-center">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center w-full overflow-hidden">
              <div className="relative w-full h-full overflow-hidden group">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 transform-gpu group-hover:scale-110"
                />
              </div>
              <h1 className="text-lg font-bold">{}</h1>
              <p className="text-sm mb-2 font-bold text-gray-700 mt-3"><span >Rs:</span> {data.price}</p>
              <Link to='/cart'><button className='bg-black hover:bg-blue-700 text-white font-serif  ml-3 md:py-2 md:px-4 rounded-full mt-2 mb-2 mx-auto block' 
              
              >Add To Cart</button></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
