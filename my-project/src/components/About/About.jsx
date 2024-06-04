import React from 'react';

function About() {
  return (
    <>
      <h1 className='text-center text-5xl font-serif font-bold mt-12 text-blue-500 mb-4'>ABOUT US</h1>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 py-12 px-4 md:px-8 lg:px-16">
        {/* Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img className="w-full md:rounded-lg h-80 object-cover" src="https://media.istockphoto.com/id/1467976868/photo/the-convenience-of-shopping-online.webp?b=1&s=170667a&w=0&k=20&c=lAmij1MEFu7mxaexsA_Sa3EkkOjY5MBE4zFhmJd_JcA=" alt="About us" />
        </div>
        {/* Content */}
        <div className="md:w-1/2">
          <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-bold mb-6 mt-3 text-blue-400">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className="text-center md:text-left text-lg md:text-xl lg:text-2xl">Quasi tenetur necessitatibus voluptas voluptatum earum repellendus expedita nam, nulla, aliquid molestiae sed culpa aliquam ipsam perspiciatis eos saepe alias, dolor dolores explicabo consequatur facere quisquam!</p>
        </div>
      </div>
    </>
  );
}

export default About;
