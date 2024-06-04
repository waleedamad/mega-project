import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="" style={{backgroundColor:'#15616d'}}>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <h1 className='text-orange-600 text-4xl font-serif font-bold'>Waleed Store</h1>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                <Link
                  to="/"
                  className=" text-white font-serif  rounded-md px-3 py-2 text-sm font-medium  hover:bg-black hover:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="text-white t font-serif hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Product
                </Link>
                <Link
                  to="/about"
                  className="text-white font-serif hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-white font-serif hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/cart"
                  className="text-white font-serif hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Cart
                </Link>
                <Link
                  to="/dashboard"
                  className="text-white font-serif hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
              </div>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <Link
                to="/login"
                className="text-white font-serif hover:bg-black hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Product
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </Link>
            <Link
              to="/cart"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Cart
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium "
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
