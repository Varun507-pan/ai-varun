import React, { useEffect } from "react";
import gsap from "gsap";

const Card = ({ image, onClick, selected }) => {
  useEffect(() => {
    // Animate sun floating
    gsap.to(".card-sun", {
      y: -5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // Animate clouds
    gsap.to(".card-cloud", {
      x: 30,
      duration: 40,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });

    // Animate extra small bird
    gsap.to(".card-bird", {
      x: 40,
      y: "-=10",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div
      onClick={onClick}
      className={`group relative w-48 h-48 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 transform
        ${
          selected
            ? "border-4 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 p-[2px]"
            : "border-2 border-gray-700 bg-gray-900/40 backdrop-blur-md shadow-lg"
        }
      `}
    >
      {/* 🌅 Sunset-style background */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#ff7e5f] to-[#feb47b]"></div>

        {/* Sun */}
        <div className="card-sun absolute bottom-4 right-1/2 translate-x-1/2 w-14 h-14 rounded-full bg-orange-400 shadow-[0_0_30px_8px_rgba(255,165,0,0.4)]"></div>

        {/* Clouds */}
        <div className="card-cloud absolute top-2 left-2 w-16 h-6 bg-white/60 rounded-full blur-md"></div>
        <div className="card-cloud absolute top-5 right-2 w-20 h-7 bg-white/50 rounded-full blur-md"></div>

        {/* Small flying bird */}
        <div className="card-bird absolute top-3 left-1/4 w-6 h-6">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M10 50 C30 10, 70 10, 90 50 C70 90, 30 90, 10 50 Z"
              fill="#fff"
              stroke="#000"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      {/* 🌄 Image container */}
      <div
        className="relative z-10 w-full h-full rounded-2xl overflow-hidden
          bg-gray-900/80 transition-transform duration-500 ease-in-out
          group-hover:scale-110"
      >
        <img
          src={image}
          alt="card"
          className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
        />
      </div>

      {/* Selected overlay */}
      {selected && (
        <div className="absolute inset-0 z-20 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 backdrop-blur-[1px] rounded-2xl"></div>
      )}
    </div>
  );
};

export default Card;
