import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to toggle dropdowns
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Function to close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setActiveDropdown(null);
      }
      if (!event.target.closest(".search-box")) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className="w-full py-4 px-6 bg-white relative">  
      <nav className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4 relative">
          {/* Hamburger Menu */}
          <div className="dropdown relative">
            <button onClick={() => toggleDropdown("menu")}>
              <FaBars className="text-xl text-green-600" />
            </button>
            {activeDropdown === "menu" && (
              <div className="absolute left-0 top-10 bg-white shadow-lg border rounded-md py-2 w-40">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Login
                </button>
                <hr />
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Registration
                </button>
                <hr />
                <button className="block w-full text-left px-4 py-2 text-green-600 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Language Dropdown */}
          <div className="dropdown relative">
            <button
              className="flex items-center gap-2 text-black hover:text-green-600"
              onClick={() => toggleDropdown("language")}
            >
              <span>ENG</span>
              <span className="text-xs">▼</span>
            </button>
            {activeDropdown === "language" && (
              <div className="absolute left-0 top-10 bg-white shadow-lg border rounded-md py-2 w-40">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  English
                </button>
                <hr />
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Vietnamese
                </button>
                <hr />
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  French
                </button>
              </div>
            )}
          </div>

          {/* Currency Dropdown */}
          <div className="dropdown relative">
            <button
              className="flex items-center gap-2 text-green-600"
              onClick={() => toggleDropdown("currency")}
            >
              <span>USD</span>
              <span className="text-xs">▼</span>
            </button>
            {activeDropdown === "currency" && (
              <div className="absolute left-0 top-10 bg-white shadow-lg border rounded-md py-2 w-40">
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  USD
                </button>
                <hr />
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  VND
                </button>
                <hr />
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  EURO
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Center Section */}
        <div className="flex items-center gap-6 text-lg font-medium">
          <button className="text-green-600">Store</button>
          <button>About</button>
          <button className="flex justify-center mb-1">
            <img
              src="https://htmlbeans.com/html/botanical/images/logo.png"
              alt="Logo"
              className="h-12"
            />
          </button>

          <button>Blog</button>
          
          <button>Contact</button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 relative">
          {/* Search Button */}
          <div className="search-box relative">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <CiSearch className="text-xl text-gray-700 hover:text-green-600 transition duration-200" />
            </button>
            {isSearchOpen && (
              <div className="absolute top-12 right-0 bg-white border shadow-md p-2 flex items-center rounded-md w-64">
                <input
                  type="text"
                  className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  className="text-green-600 font-bold px-2"
                  onClick={handleSearch}
                >
                  Go
                </button>
              </div>
            )}
          </div>

          {/* Wishlist Button */}
          <button className="relative">
            <GrFavorite className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </button>

          {/* Cart Button */}
          <button className="relative">
            <IoCartOutline className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
