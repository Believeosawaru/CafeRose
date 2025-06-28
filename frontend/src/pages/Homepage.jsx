import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

SwiperCore.use([Autoplay]);

import Header from "../components/Header";
import hero from "../assets/restaurant-interior.jpg";

import food1 from "../assets/food-img-1.jpg";
import food2 from "../assets/food-img-3.jpg";
import food3 from "../assets/food-img-2.jpg";

import breakfast from "../assets/icons/breakfast.svg";
import drink from "../assets/icons/drink.svg";
import lunch from "../assets/icons/lunch.svg";
import pastry from "../assets/icons/pastry.svg";

export default function Homepage() {
  const dishes = [
    {
      img: "https://cdn.pixabay.com/photo/2022/10/12/22/09/spaghetti-bolognese-7517639_1280.jpg",
      name: "Spaghetti Bolognese.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2023/05/28/14/13/ai-generated-8023787_640.jpg",
      name: "Margherita Pizza",
    },
    {
      img: "https://cdn.pixabay.com/photo/2024/10/21/11/46/ai-generated-9137121_640.jpg",
      name: "Sushi Platter",
    },
    {
      img: "https://cdn.pixabay.com/photo/2014/11/05/15/57/new-years-eve-518032_1280.jpg",
      name: "Grilled Salmon",
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/12/04/16/49/tandoori-3856045_640.jpg",
      name: "Chicken Tikka Masala",
    },
    {
      img: "https://cdn.pixabay.com/photo/2024/09/21/04/22/ai-generated-9062921_1280.png",
      name: "Beef Tacos",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_640.jpg",
      name: "Caesar Salad",
    },
    {
      img: "https://cdn.pixabay.com/photo/2015/03/20/15/13/ramen-682343_640.jpg",
      name: "Ramen Bowl",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
      name: "Pancake Stack",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/01/23/08/45/cake-2001781_640.jpg",
      name: "Chocolate Cake",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      {/* Navbar */}
      <Header />

      {/* Hero Section */}
      <section className="relative flex-grow min-h-screen">
        {/* Background Image */}
        <div
          className="bg-center bg-cover absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url(${hero})`,
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center max-w-4xl mx-auto my-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-red-600 tracking-wide animate-fadeIn font-serif">
            Welcome to Café Rosé & Bistro
          </h2>
          <p className="mt-6 text-white text-lg max-w-3xl leading-relaxed animate-fadeIn delay-300 font-sans">
            Discover the heart of Limerick with our handcrafted coffee, fresh
            pastries, and warm ambiance. A floral-inspired haven where every sip
            feels like home.
          </p>
          <button className="mt-8 bg-red-600 hover:bg-red-700 transition-colors duration-300 px-10 py-4 rounded-md font-semibold shadow-lg animate-fadeIn delay-500 font-sans">
            View Menu
          </button>
        </div>
      </section>

      {/* Slideshow */}
      <section className="bg-black py-16">
        <h2 className="text-4xl font-serif text-center text-red-600 mb-8">
          Our Delicious Dishes
        </h2>
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            loop
            centeredSlides
            slidesPerView="auto"
            spaceBetween={30}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 0.8,
              slideShadows: false,
            }}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            speed={5000}
            allowTouchMove={false}
            className="py-4"
          >
            {dishes.map((dish, idx) => (
              <SwiperSlide key={idx} className="!w-60 flex justify-center">
                <div className="relative overflow-hidden rounded-xl shadow-lg w-full h-44">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40" />
                  <p className="absolute bottom-0 text-white font-sans text-sm bg-black w-full text-center p-2 opacity-80">
                    {dish.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-white text-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-serif text-red-600 font-bold">
            Our Menu
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
            {/* Breakfast */}
            <div className="flex flex-col items-center text-center">
              <img src={breakfast} alt="Breakfast" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold font-serif text-red-500">
                Breakfast
              </h3>
              <ul className="mt-4 space-y-2 text-sm font-sans text-gray-700">
                <li>Full Irish Breakfast</li>
                <li>Avocado Toast</li>
                <li>Scrambled Eggs & Croissant</li>
              </ul>
            </div>

            {/* Lunch */}
            <div className="flex flex-col items-center text-center">
              <img src={lunch} alt="Lunch" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold font-serif text-red-500">
                Lunch
              </h3>
              <ul className="mt-4 space-y-2 text-sm font-sans text-gray-700">
                <li>Grilled Chicken Sandwich</li>
                <li>Soup of the Day</li>
                <li>Vegan Wrap</li>
              </ul>
            </div>

            {/* Pastries */}
            <div className="flex flex-col items-center text-center">
              <img src={pastry} alt="Pastries" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold font-serif text-red-500">
                Pastries
              </h3>
              <ul className="mt-4 space-y-2 text-sm font-sans text-gray-700">
                <li>Almond Croissant</li>
                <li>Chocolate Danish</li>
                <li>Fresh Muffins</li>
              </ul>
            </div>

            {/* Drinks */}
            <div className="flex flex-col items-center text-center">
              <img src={drink} alt="Drinks" className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-semibold font-serif text-red-500">
                Drinks
              </h3>
              <ul className="mt-4 space-y-2 text-sm font-sans text-gray-700">
                <li>Latte / Cappuccino</li>
                <li>Herbal Teas</li>
                <li>Fresh Juices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Food Showcase */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-20 bg-black w-full">
        {[food1, food2, food3].map((img, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row items-center md:space-x-12  ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg shadow-lg flex-1 group">
              <img
                src={img}
                alt={`Delicious food ${i + 1}`}
                className="w-full h-72 md:h-96 object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${0.3 + i * 0.3}s` }}
              />
            </div>

            {/* Text */}
            <div className="flex-1 mt-8 md:mt-0 text-center md:text-left">
              <h3
                className="text-4xl font-serif text-red-600 mb-4 animate-fadeInUp"
                style={{ animationDelay: `${0.6 + i * 0.3}s` }}
              >
                {i === 0
                  ? "Handcrafted Coffee"
                  : i === 1
                  ? "Freshly Baked Pastries"
                  : "Cozy Ambiance"}
              </h3>
              <p
                className="text-gray-100 font-sans text-lg leading-relaxed animate-fadeInUp md:mr-10"
                style={{ animationDelay: `${0.9 + i * 0.3}s` }}
              >
                {i === 0
                  ? "Experience the rich aromas and bold flavors of our carefully sourced beans brewed to perfection."
                  : i === 1
                  ? "Taste the warmth and freshness of our daily baked pastries, made with love and the finest ingredients."
                  : "Enjoy a welcoming and cozy space, perfect for catching up with friends or enjoying a peaceful moment alone."}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-700 py-12 px-6 mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-xl font-bold text-red-500 tracking-wide font-serif">
            Café Rosé & Bistro
          </h3>
          <ul className="space-y-3 text-sm font-sans">
            {/* Address */}
            <li className="flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 10 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
              <span>40 Roches Street, Limerick, V94 KC42, Ireland</span>
            </li>

            {/* Phone */}
            <li className="flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 5a2 2 0 012-2h1l3 5-4 4c1.38 2.92 4.08 5.62 7 7l4-4 5 3v1a2 2 0 01-2 2h-1c-9.39 0-17-7.61-17-17V5z" />
              </svg>
              <a
                href="tel:+35361315791"
                className="text-gray-500 hover:underline"
              >
                +353 61 315 791
              </a>
            </li>

            {/* Facebook */}
            <li className="flex items-center justify-center gap-3">
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12z" />
              </svg>
              <a
                // href="https://facebook.com/caferose"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:underline"
              >
                facebook.com/caferose
              </a>
            </li>
          </ul>

          {/* Footer Note */}
          <p className="text-xs text-gray-500 pt-4">
            © 2025 Café Rosé Limerick. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </div>
  );
}
