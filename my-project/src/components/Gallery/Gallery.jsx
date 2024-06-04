import React from 'react';

const data = [
  {
    img: "https://images.unsplash.com/photo-1499096382193-ebb232527fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZSUyMGNvbW1lcmNlYyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    price: 700
  },
  {
    img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZSUyMGNvbW1lcmNlYyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
    price: 500
  },
  {
    img: "https://images.unsplash.com/photo-1573416842104-dc0834c2c142?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGUlMjBjb21tZXJjZWMlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    price: 5000
  },
  {
    img: "https://images.unsplash.com/photo-1517635676447-3a480fbfd8f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGUlMjBjb21tZXJjZWMlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
    price: 1300
  },
  {
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8fDA%3D",
    price: 7000
  },
  {
    img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 2500
  },
  {
    img: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFudHxlbnwwfHwwfHx8MA%3D%3D",
    price: 1500
  },
  {
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29hdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 2000
  }
];

function Gallery() {
  return (
    <>
      <h1 className='text-center font-serif font-bold text-5xl text-blue-500 mb-12 mt-12' >GALLERY</h1>
      <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center ml-3 mr-3 items-center ">
        {data.map((item, key) => (
          <div key={key} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-95">
            <img src={item.img} alt={`Gallery ${key}`} className="w-full h-auto" />
            <p className='text-sm mb-2 font-bold text-gray-700 mt-3 text-center mb-3'>Rs:{item.price}</p>
            <button className='bg-black hover:bg-blue-700 text-white font-serif md:py-2 p-1 md:px-4 rounded-full mt-2 mb-2 mx-auto block'>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Gallery;
