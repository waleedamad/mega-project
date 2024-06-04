import React from 'react';

function AddToCart() {
  

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        
          <div  className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="flex flex-col items-center p-4">
              <img  src='https://plus.unsplash.com/premium_photo-1683120718239-b5927e299e77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2"></h2>
              <p className="text-gray-700 mb-4 font-serif">Rs:3500 </p>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300">
                Remove
              </button>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default AddToCart;
