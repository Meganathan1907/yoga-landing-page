"use client";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Image from "next/image";
import img2 from "@/app/asset/img2.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        scrolled ? "sticky top-0 left-0 w-full z-100 bg-white transition-all duration-300 ease-in " : ""
      }`}
    >
      <div className="container navbar-container ">
        
        {/* Logo */}
        <div className="navbar-logo flex items-center gap-5">
          <div className="w-20">
            <Image src={img2} alt="logo" />
          </div>
          <span className="text-gradient md:text-2xl text-sm">Divrosh Yoga Dhara</span>
        </div>

        {/* Links
        <nav className="navbar-links">
          <a href="#benefits">Benefits</a>
          <a href="#about">About</a>
          <a href="#program">Program</a>
          <a href="#testimonials">Reviews</a>
        </nav> */}

        {/* CTA */}
        <div className="navbar-cta">
          <a href="#cta" className="btn btn-primary md:text-2xl text-sm">
            Get Started
          </a>
        </div>

      </div>
    </header>
  );
};

export default Navbar;