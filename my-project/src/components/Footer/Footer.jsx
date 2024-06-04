import React from 'react';

function Footer() {
  const date = new Date();

  // Formatting date into a readable string
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  return (
    <footer className="bg-blue-500 py-7  bottom-0 w-full">
      <div className="container mx-auto text-center text-white font-serif text-xl font-bold">
        <p className="">© {formattedDate} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
