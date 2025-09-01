import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import Picturelogo from "../assets/images/Picturelogo.png";
import BgImage from "../assets/images/WPS Photo Edit2.png";

import bg from "../assets/images/bg.png";
import Dot from "../assets/images/dot.png";
import Dot2 from "../assets/images/dot2.png";
import Dot3 from "../assets/images/dot3.png";
import Icon1 from "../assets/images/icon1.png";
import Icon2 from "../assets/images/icon2.png";
import Left from "../assets/images/left.png";
import Service1 from "../assets/images/service1.png";
import Service2 from "../assets/images/service2.png";
import Service3 from "../assets/images/service3.png";
import Service4 from "../assets/images/service4.png";
import Bg3 from "../assets/images/bg3.png";
import Project1 from "../assets/images/project1.png";
import Project2 from "../assets/images/project2.png";
import Project3 from "../assets/images/project3.png";
import Project4 from "../assets/images/project4.png";
import Testimonial from "../assets/images/testimonial.png";
import Chose from "../assets/images/chose.png";
import Blog1 from "../assets/images/blog1.png";
import Blog2 from "../assets/images/blog2.png";
import Blog3 from "../assets/images/blog3.png";
import Robot from "../components/Robot";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
  
  return (
    
  <div className="bg-white  max-w-full overflow-x-hidden font-roboto mx-5">
   
  <header className="bg-white shadow-md fixed w-full z-50">
  <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-3 md:px-8">
    
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img src={Picturelogo} alt="Logo" className="w-20 h-10" />
    </div>

    {/* Desktop Menu */}
    <nav className="hidden md:flex items-center space-x-6 font-medium">
      <Link to="/" className="text-green-700 font-bold hover:underline">Home</Link>
      <Link to="/dashboard" className="text-green-700 font-bold hover:underline">Owner Dashboard</Link>
      <Link to="/Agritecdashboard" className="text-green-700 font-bold hover:underline">Farmer Dashboard</Link>
      <Link to="/supportchat" className="text-green-700 font-bold hover:underline">SupportChat</Link>
      
      {/* Sign Up Button (text only) */}
      {/* Sign Up Button (text only) */}
<Link
  to="/signup"
  className="bg-green-700 px-4 py-2 rounded text-white font-medium hover:bg-green-800"
>
  Sign Up
</Link>


<Link
  to="/login"
  className="flex items-center justify-center bg-green-700 px-4 py-2 rounded text-white hover:bg-green-800"
>
  <svg xmlns="http://www.w3.org/2000/svg" 
    className="w-5 h-5" fill="none" viewBox="0 0 24 24" 
    stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" 
      d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4" />
    <path strokeLinecap="round" strokeLinejoin="round" 
      d="M20 8v6m3-3h-6" />
  </svg>
</Link>

    </nav>

    {/* Mobile Menu Toggle */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 text-green-700 focus:outline-none"
    >
      ☰
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="md:hidden flex flex-col space-y-4 px-4 pb-4 bg-white shadow">
      <Link to="/" className="block py-2 text-green-700">Home</Link>
      <Link to="/about" className="block py-2 text-green-700">Owner Dashboard</Link>
      <Link to="/services" className="block py-2 text-green-700">Farmer Dashboard</Link>
      <Link to="/contact" className="block py-2 text-green-700">Supportchat</Link>

      {/* Sign Up (text only) */}
      <Link
        to="/signup"
        className="flex items-center justify-center bg-green-700 px-4 py-2 rounded text-white"
      >
        Sign Up
      </Link>

      {/* Login (icon only, with Register’s old icon) */}
      <Link
        to="/login"
        className="flex items-center justify-center bg-green-700 p-2 rounded text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" 
          className="w-5 h-5" fill="none" viewBox="0 0 24 24" 
          stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" 
            d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4" />
          <path strokeLinecap="round" strokeLinejoin="round" 
            d="M20 8v6m3-3h-6" />
        </svg>
      </Link>
    </div>
  )}
</header>


 

   <section
  className="pt-20 w-full bg-no-repeat bg-center bg-cover sm:bg-cover md:bg-cover"
  style={{
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",       
    backgroundPosition: "center",  
  }}
>
  <div
    className="container mx-auto px-4 md:px-8 py-20 text-white"
    data-aos="fade-up"
  >
        <div className="flex mb-8">
          <img
            src="src/bg2.png"
            alt=""
            className="h-32 sm:h-40 object-cover rounded-lg"
          />
        </div>
       
      </div>
    </section>


    <section
      className="container mx-auto px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -mt-16 relative z-10"
    >
      <div
        className="bg-white shadow-lg rounded-lg p-6 text-center"
        data-aos="fade-up"
      >
        <h3 className="text-xl font-semibold text-orange-400">Feature 1</h3>
        <p className="mt-2 text-black font-bold">We are using new technology</p>
        <div className="flex justify-center">
          <img
            src={Dot}
            alt=""
            className="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div
        className="bg-white shadow-lg rounded-lg p-6 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 className="text-xl font-semibold text-orange-400">Feature 2</h3>
        <p className="mt-2 text-black font-bold">Precision spraying robot</p>
        <div className="flex justify-center">
          <img
            src={Dot2}
            alt=""
            className="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div
        className="bg-white shadow-lg rounded-lg p-6 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 className="text-xl font-semibold text-orange-400">Feature 3</h3>
        <p className="mt-2 text-black font-bold">Farm digitalization</p>
        <div className="flex justify-center">
          <img
            src={Dot3}
            alt=""
            className="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>


    <section
      id="about"
      className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center gap-10"
    >
      <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
        <img
          src={Left}
          alt="Farm"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover rounded-lg"
        />
      </div>
      <div className="md:w-1/3" data-aos="fade-left">
        <p className="text-[17px] font-semibold text-orange-400">Our Introduction</p>
        <h2 className="text-3xl font-bold text-black">
          Agriculture Farm Automation
        </h2>
        <p className="mt-4 text-green-600">
          AgriBot is the advance global agricultural robot for tunnel farms.
        </p>
        <p className="mt-4 text-sm">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="flex items-center gap-2">
            <img
              src={Icon1}
              alt="Farm"
              className="w-12 h-12 object-cover rounded-lg"
            />
            <h1 className="text-lg font-semibold">Precision spraying</h1>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={Icon2}
              alt="Farm"
              className="w-12 h-12 object-cover rounded-lg"
            />
            <h1 className="text-lg font-semibold">Precision spraying</h1>
          </div>
        </div>
        <div className="mt-6 text-sm">
          <p>Lorem Ipsum is not simply random text.</p>
          <p>Making this the first true generator on the internet</p>
        </div>
        <a
          href="#"
          className="mt-6 inline-block bg-green-700 px-6 py-3 rounded text-white font-medium"
          >Learn More</a
        >
      </div>
    </section>

    
    <section id="services" className="bg-orange-50 py-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-[17px] font-bold mb-4 text-orange-400" data-aos="fade-up">
          Our Services
        </h2>
        <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
          What We Offer
        </h2>
      </div>
    </section>
    <Robot />
    <div
      className="container mx-auto px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 -mt-30 relative z-10"
    >
      <div className="shadow-lg rounded-lg p-6" data-aos="zoom-in">
        <img src={Service1} alt="" className="mx-auto mb-4" />
      </div>
      <div
        className="shadow-lg rounded-lg p-6"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <img src={Service2} alt="" className="mx-auto mb-4" />
      </div>
      <div
        className="shadow-lg rounded-lg p-6"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img src={Service3} alt="" className="mx-auto mb-4" />
      </div>
      <div
        className="shadow-lg rounded-lg p-6"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <img src={Service4} alt="" className="mx-auto mb-4" />
      </div>
    </div>


    <section className="w-full">
      {/* Navbar */}
      <nav className="bg-green-700 py-4">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-white font-semibold text-base md:text-lg">
          <li>Agriculture Robots</li>
          <li>Projects Completed</li>
          <li>Satisfied Clients</li>
          <li>Expert Engineers</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div
        className="relative h-[70vh] md:h-[90vh] flex items-center px-6 md:px-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Heading */}
        <h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-xl leading-tight">
          Agriculture Matters to the Future of Development
        </h1>
      </div>
    </section>
 



   
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
          Explore Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
            <img
              src={Project1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={Project2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={Project3}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={Project4}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      id="about"
      className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-center bg-orange-50"
    >
      <div className="md:w-1/4 mb-6 md:mb-0" data-aos="fade-left">
        <p className="text-lg font-semibold text-orange-400">Our Testimonial</p>
        <h2 className="text-3xl font-bold text-black">
          What they are talking about Agribot
        </h2>
        <p className="mt-4 text-sm">
          There are many variations of passages of available but the majortity
          have sufferred alteration in some form by injected humor or random
          word which don’t look even.
        </p>
        <a
          href="#"
          className="mt-6 inline-block bg-green-700 px-6 py-3 rounded text-white font-medium"
          >View all testimonial</a
        >
      </div>
      <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
        <img
          src={Testimonial}
          alt="Farm"
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover rounded-lg"
        />
      </div>
    </section>

   
    <section className="py-16">
      <div
        className="container mx-auto md:px-8 flex flex-col md:flex-row items-center justify-center gap-10"
      >
        <div className="md:w-1/3" data-aos="fade-right">
          <img
            src={Chose}
            className="rounded-lg shadow-lg w-full h-auto"
            alt=""
          />
        </div>
        <div className="md:w-1/3" data-aos="fade-left">
          <p className="text-[17px] font-bold text-orange-400">Our Farm Benefits</p>
          <h2 className="text-3xl font-bold">Why Choose Us Agribot Market</h2>
          <p className="text-sm">
            There are many variations of passages of available but the majortity
            have sufferred alteration in some form by injected humor or random
            word which don’t look even.
          </p>
          <ul className="mt-4 space-y-2 text-gray-600">
            <li>✔ To Increase Food Availability</li>
            <p className="text-sm">
              There are variation You need to be sure there is anything hidden
              in the middle of text.
            </p>
            <li>✔ Professional Engineers</li>
            <p className="text-sm">
              There are variation You need to be sure there is anything hidden
              in the middle of text.
            </p>
            <li>✔ Quality Robot</li>
            <p className="text-sm">
              There are variation You need to be sure there is anything hidden
              in the middle of text.
            </p>
          </ul>
          <a
            href="#"
            className="mt-6 inline-block bg-green-700 px-6 py-3 rounded text-white font-medium"
            >Discover More</a
          >
        </div>
      </div>
    </section>

  
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[17px] font-bold text-orange-400">From the Blog</p>
        <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">
          News & Articles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow w-full" data-aos="fade-up">
            <img src={Blog1} alt="" className="w-full h-auto" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">
                Bringing Food Production Back To Cities
              </h3>
              <p className="text-sm text-gray-600">
                Learn how to make your farm eco-friendly.
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow w-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={Blog2} alt="" className="w-full h-auto" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">
                The Future of Farming, Smart Spraying Solutions
              </h3>
              <p className="text-sm text-gray-600">
                The latest innovations in farming.
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-lg shadow w-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={Blog3} alt="" className="w-full h-auto" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">
                Agronomy and relation to Other Sciences
              </h3>
              <p className="text-sm text-gray-600">
                Why going organic is worth it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="bg-orange-50">
      <footer className="bg-neutral-700 text-white py-12 text-sm">
        <div
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div>
            <p className="mb-4">
              Your company’s short description goes here. It can be two lines
              long to explain your mission.
            </p>
            <div className="flex space-x-4 text-yellow-400 text-xl">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Explore</h3>
            <div className="w-12 h-1 bg-green-500 mb-4"></div>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span>➤</span> <a href="#">About</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>➤</span> <a href="#">Service</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>➤</span> <a href="#">Our Project</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>➤</span> <a href="#">Meet the Engineer</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>➤</span> <a href="#">Latest News</a>
              </li>
              <li className="flex items-center space-x-2">
                <span>➤</span> <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">News</h3>
            <div className="w-12 h-1 bg-green-500 mb-4"></div>
            <div className="mb-6">
              <p>Bringing food production back to cities</p>
              <p className="text-gray-400 text-sm">July 5 2022</p>
            </div>
            <div>
              <p>Another headline here</p>
              <p className="text-gray-400 text-sm">August 12 2022</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <div className="w-12 h-1 bg-green-500 mb-4"></div>
            <p className="flex items-center space-x-2">
              <span>📞</span> <span>15607165221</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>✉️</span> <span>info@example.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <span>📍</span> <span>Your Location</span>
            </p>
            <div className="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 w-full border border-gray-300 rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
              />
              <button
                className="bg-green-500 px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="bg-gray-950 flex flex-col sm:flex-row justify-between text-white text-sm py-5 px-4 sm:px-20"
      >
        <p>© All Copyright 2024 by shawonetc Themes</p>
        <p>Terms of Use Privacy Policy</p>
      </div>
    </section>

 </div>

  )
}

export default Home;