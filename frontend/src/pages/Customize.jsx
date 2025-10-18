import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import { userDataContext } from "../context/UserContext";
import { FaUpload } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

gsap.registerPlugin(ScrollTrigger);

const initialImages = [image1, image2, image3, image4, image5, image6, image7];

const Customize = () => {
  const { setFrontendImage, setBackendImage, selectedImage, setSelectedImage } =
    useContext(userDataContext);

  const navigate = useNavigate();
  const [previewUrls, setPreviewUrls] = useState(initialImages.map((i) => i));

  useEffect(() => {
    // Bird scroll-based animation
    gsap.fromTo(
      "#bird",
      { opacity: 1, y: -250, x: 0 },
      {
        y: -250,
        x: 800,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".scrollElement",
          start: "15% top",
          end: "60% 100%",
          scrub: 4,
          onEnter: () => gsap.to("#bird", { scaleX: 1, rotation: 0 }),
          onLeave: () => gsap.to("#bird", { scaleX: -1, rotation: -15 }),
        },
      }
    );

    // Floating animations
    gsap.to(".sun", {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(".cloud", {
      x: 100,
      duration: 60,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    });
    gsap.to(".extra-bird", {
      x: 800,
      y: "-=50",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const handleUpload = (event, index) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);

      const newPreview = [...previewUrls];
      newPreview[index] = fileUrl;
      setPreviewUrls(newPreview);

      setBackendImage(file);
      setFrontendImage(null);
      setSelectedImage(fileUrl);
    }
  };

  const handleSelect = (img) => {
    setSelectedImage(img);
    navigate("/customize2");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden scrollElement bg-gradient-to-b from-orange-200 via-pink-200 to-purple-300">
      {/* 🌅 Sunset Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="sun absolute top-20 left-1/2 w-32 h-32 rounded-full bg-yellow-400 shadow-xl transform -translate-x-1/2"></div>

        <div className="mountain mountain1 absolute bottom-0 left-0 w-[120%] h-64 bg-gray-800 rounded-t-full"></div>
        <div className="mountain mountain2 absolute bottom-0 left-1/4 w-[100%] h-56 bg-gray-700 rounded-t-full"></div>
        <div className="mountain mountain3 absolute bottom-0 right-0 w-[120%] h-64 bg-gray-600 rounded-t-full"></div>

        <div className="cloud cloud1 absolute top-10 left-10 w-32 h-16 bg-white rounded-full opacity-70"></div>
        <div className="cloud cloud2 absolute top-16 right-20 w-40 h-20 bg-white rounded-full opacity-70"></div>

        <div className="tree tree1 absolute bottom-16 left-10 w-12 h-32 bg-green-700 rounded-t-lg"></div>
        <div className="tree tree2 absolute bottom-16 left-28 w-12 h-28 bg-green-600 rounded-t-lg"></div>
        <div className="tree tree3 absolute bottom-16 right-28 w-12 h-32 bg-green-700 rounded-t-lg"></div>
        <div className="tree tree4 absolute bottom-16 right-10 w-12 h-28 bg-green-600 rounded-t-lg"></div>

        {/* Extra Birds */}
        <div className="extra-bird bird1 absolute top-32 left-0 w-16 h-16 z-10">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 50 C30 10, 70 10, 90 50 C70 90, 30 90, 10 50 Z"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="extra-bird bird2 absolute top-40 left-0 w-16 h-16 z-10">
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 50 C30 10, 70 10, 90 50 C70 90, 30 90, 10 50 Z"
              fill="#fff"
              stroke="#000"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* 🐦 Main Bird */}
      <div id="bird" className="absolute top-40 left-[-100px] w-20 h-20 z-20">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 50 C30 10, 70 10, 90 50 C70 90, 30 90, 10 50 Z"
            fill="#fff"
            stroke="#000"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Overlay for subtle depth */}
      <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none"></div>

      {/* Page Content */}
      <div className="relative z-30 py-12 px-6">
        <button
          type="button"
        onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 text-white hover:text-pink-300 transition-colors duration-300"
        >
          <IoMdArrowRoundBack size={26} />
          <span className="text-lg font-semibold tracking-wide">Back</span>
        </button>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-400 drop-shadow-md">
          Customize Your Selection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {previewUrls.map((img, index) => (
            <div
              key={index}
              className={`relative group flex flex-col items-center p-4 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 
                ${
                  selectedImage === img
                    ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 border-4 border-pink-300"
                    : "bg-gray-900/40 border-2 border-gray-700/60 backdrop-blur-md"
                }
              `}
            >
              <Card
                image={img}
                onClick={() => handleSelect(img)}
                selected={selectedImage === img}
              />

              <label className="mt-4 w-14 h-14 rounded-full flex items-center justify-center border-2 border-pink-400 bg-gradient-to-br from-purple-600 to-pink-600 text-white text-2xl cursor-pointer hover:scale-110 hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300">
                <FaUpload />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleUpload(e, index)}
                />
              </label>

              {selectedImage === img && (
                <span className="absolute top-3 right-3 text-xs font-semibold text-white bg-pink-600 px-2 py-1 rounded-full shadow-md">
                  Selected
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customize;
