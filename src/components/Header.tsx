"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);


  const navLinks = [
    {label:"Home", href:"/"},
    { label: "Stock Market", href: "#stock-market" },
    { label: "Technology", href: "#technology" },
    { label: "Beauty", href: "#beauty" },
    { label: "Health", href: "#health" },
  ];

  return (
    <header className="flex md:flex-col max-w-6xl mx-auto md:gap-4 w-full justify-between items-center p-3  ">
      {/* Logo */}
      <div className="flex w-full items-center justify-between ">
        <span className="hidden md:block"><IoMdSearch size={25}/></span>
        <h1 className="text-2xl md:text-3xl font-playfair font-bold">BUSINESSLY</h1>
<button className="hidden md:block border font-medium hover:bg-black hover:text-white border-black p-8 py-2">SubScribe</button>
      </div>

      
      <nav className="hidden md:flex gap-8">
      {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className=" text-gray-700  hover:text-black"
          >
            {link.label}
          </Link>
        ))}
        
      </nav>


      {/* Hamburger Menu for Small Screens */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 flex flex-col items-start p-4">
          
          
          {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="py-2 w-full hover:text-blue-600"
            onClick={(()=>setIsOpen(false))}
          >
            {link.label}
          </Link>
        ))}
        </div>
      )}
    </header>
  );
}
