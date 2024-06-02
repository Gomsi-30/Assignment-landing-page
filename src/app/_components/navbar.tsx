"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`flex justify-center w-full ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex mt-[20px] justify-center w-[800px] h-[80px]">
        <ul className="font-semibold flex gap-7 items-center justify-center w-full">
          <li className="flex items-center gap-1">
            <Image src="/Frame.png" alt="Frame" width={34} height={34} />
            <h1 className="text-2xl mt-[5px] font-bold">Uifry</h1>
          </li>
          <li className={`hover:text-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-105 ${darkMode && 'text-gray-300'}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`hover:text-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-105 ${darkMode && 'text-gray-300'}`}>
            <Link href="/about">About us</Link>
          </li>
          <li className={`hover:text-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-105 ${darkMode && 'text-gray-300'}`}>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className={`hover:text-blue-500 transition-colors duration-300 ease-in-out transform hover:scale-105 ${darkMode && 'text-gray-300'}`}>
            <Link href="/features">Features</Link>
          </li>
          <li className={`ml-auto hover:scale-105 transform transition-transform duration-300 ease-in-out ${darkMode && 'text-gray-300'}`}>
            <Link href="/download">
              <Button>Download</Button>
            </Link>
          </li>
          <li className="ml-4">
            <button onClick={toggleDarkMode} className="focus:outline-none">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;



