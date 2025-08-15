import React from 'react'

const Home = () => {
  return (
    
  
  <div class="bg-white text-gray-800 max-w-full overflow-x-hidden">
   
    <header class="bg-white shadow-md fixed w-full z-50">
      <div
        class="container mx-auto flex justify-between items-center py-4 px-4 md:px-8"
      >
        
        <div class="flex items-center space-x-2">
          <img src="src/Picturelogo.png" alt="Logo" class="w-20 h-10" />
          <span class="font-bold text-lg text-green-800">AgriBot</span>
        </div>

       
        <nav class="hidden md:flex space-x-6 font-medium">
          <a
            href="register.html"
            target="_blank"
            class="mt-2 inline-block bg-green-700 px-6 py-2 rounded text-white font-medium"
            >Register</a
          >
          <a
            href="login.html"
            target="_blank"
            class="mt-2 inline-block bg-green-700 px-6 py-2 rounded text-white font-medium"
            >Login</a
          >
        </nav>

       
        <button
          class="md:hidden p-2 text-green-700 focus:outline-none"
          id="menu-toggle"
        >
          ☰
        </button>
      </div>

     
      <div
        id="mobile-menu"
        class="md:hidden hidden flex-col space-y-4 px-4 pb-4 bg-white shadow"
      >
        <a
          href="register.html"
          target="_blank"
          class="block bg-green-700 px-4 py-2 rounded text-white text-center"
          >Register</a
        >
        <a
          href="login.html"
          target="_blank"
          class="block bg-green-700 px-4 py-2 rounded text-white text-center"
          >Login</a
        >
      </div>
    </header>

   
    <section
      class="pt-20 bg-cover bg-center w-full"
      style="background-image: url('src/WPS Photo Edit2.png')"
    >
      <div
        class="container mx-auto px-4 md:px-8 py-20 text-white"
        data-aos="fade-up"
      >
        <div class="flex mb-8">
          <img
            src="src/bg2.png"
            alt=""
            class="h-32 sm:h-40 object-cover rounded-lg"
          />
        </div>
        <a
          href="#"
          class="mt-6 inline-block bg-green-700 px-6 py-3 rounded text-white font-medium"
          >Get Started</a
        >
      </div>
    </section>


    <section
      class="container mx-auto px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 -mt-16 relative z-10"
    >
      <div
        class="bg-white shadow-lg rounded-lg p-6 text-center"
        data-aos="fade-up"
      >
        <h3 class="text-xl font-semibold text-orange-400">Feature 1</h3>
        <p class="mt-2 text-black font-bold">We are using new technology</p>
        <div class="flex justify-center">
          <img
            src="src/dot.png"
            alt=""
            class="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div
        class="bg-white shadow-lg rounded-lg p-6 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h3 class="text-xl font-semibold text-orange-400">Feature 2</h3>
        <p class="mt-2 text-black font-bold">Precision spraying robot</p>
        <div class="flex justify-center">
          <img
            src="src/dot2.png"
            alt=""
            class="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      <div
        class="bg-white shadow-lg rounded-lg p-6 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h3 class="text-xl font-semibold text-orange-400">Feature 3</h3>
        <p class="mt-2 text-black font-bold">Farm digitalization</p>
        <div class="flex justify-center">
          <img
            src="src/dot3.png"
            alt=""
            class="w-24 sm:w-32 h-24 sm:h-32 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>


    <section
      id="about"
      class="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center gap-10"
    >
      <div class="md:w-1/2 flex justify-center" data-aos="fade-right">
        <img
          src="src/left.png"
          alt="Farm"
          class="w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover rounded-lg"
        />
      </div>
      <div class="md:w-1/3" data-aos="fade-left">
        <p class="text-lg font-semibold text-orange-400">Our Introduction</p>
        <h2 class="text-3xl font-bold text-black">
          Agriculture Farm Automation
        </h2>
        <p class="mt-4 text-green-600">
          AgriBot is the advance global agricultural robot for tunnel farms.
        </p>
        <p class="mt-4 text-sm">
          There are many variations of passages of lorem ipsum available but the
          majority have suffered alteration in some form by injected humor or
          random word which don’t look even.
        </p>
        <div class="mt-6 flex flex-col sm:flex-row items-center gap-5">
          <div class="flex items-center gap-2">
            <img
              src="src/icon1.png"
              alt="Farm"
              class="w-12 h-12 object-cover rounded-lg"
            />
            <h1 class="text-lg font-semibold">Precision spraying</h1>
          </div>
          <div class="flex items-center gap-2">
            <img
              src="src/icon2.png"
              alt="Farm"
              class="w-12 h-12 object-cover rounded-lg"
            />
            <h1 class="text-lg font-semibold">Precision spraying</h1>
          </div>
        </div>
        <div class="mt-6 text-sm">
          <p>Lorem Ipsum is not simply random text.</p>
          <p>Making this the first true generator on the internet</p>
        </div>
        <a
          href="#"
          class="mt-6 inline-block bg-green-700 px-6 py-3 rounded text-white font-medium"
          >Learn More</a
        >
      </div>
    </section>

    
    <section id="services" class="bg-orange-50 py-16">
      <div class="container mx-auto px-4 md:px-8 text-center">
        <h2 class="text-sm mb-4 text-orange-400" data-aos="fade-up">
          Our Services
        </h2>
        <h2 class="text-3xl font-bold mb-12" data-aos="fade-up">
          What We Offer
        </h2>
      </div>
    </section>
    <div
      class="container mx-auto px-4 md:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 -mt-30 relative z-10"
    >
      <div class="shadow-lg rounded-lg p-6" data-aos="zoom-in">
        <img src="src/service1.png" alt="" class="mx-auto mb-4" />
      </div>
      <div
        class="shadow-lg rounded-lg p-6"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <img src="src/service2.png" alt="" class="mx-auto mb-4" />
      </div>
      <div
        class="shadow-lg rounded-lg p-6"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img src="src/service3.png" alt="" class="mx-auto mb-4" />
      </div>
      <div
        class="shadow-lg rounded-lg p-6"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <img src="src/service4.png" alt="" class="mx-auto mb-4" />
      </div>
    </div>


    <section
      class="pt-20 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-cover bg-center bg-no-repeat"
      style="background-image: url('src/bg3.png')"
    ></section>

   
    <section id="projects" class="py-16">
      <div class="container mx-auto px-4 md:px-8 text-center">
        <h2 class="text-3xl font-bold mb-12" data-aos="fade-up">
          Explore Projects
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div class="rounded-lg overflow-hidden shadow-lg" data-aos="fade-up">
            <img
              src="src/project1.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src="src/project2.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="src/project3.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="rounded-lg overflow-hidden shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="src/project4.png"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section
      id="about"
      class="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center justify-center bg-orange-50"
    >
      <div class="md:w-1/4 mb-6 md:mb-0" data-aos="fade-left">
        <p class="text-lg font-semibold text-orange-400">Our Testimonial</p>
        <h2 class="text-3xl font-bold text-black">
          What they are talking about Agribot
        </h2>
        <p class="mt-4 text-sm">
          There are many variations of passages of available but the majortity
          have sufferred alteration in some form by injected humor or random
          word which don’t look even.
        </p>
        <a
          href="#"
          class="mt-6 inline-block bg-green-700 px-6 py-3 rounded text-white font-medium"
          >View all testimonial</a
        >
      </div>
      <div class="md:w-1/2 flex justify-center" data-aos="fade-right">
        <img
          src="src/testimonial.png"
          alt="Farm"
          class="w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover rounded-lg"
        />
      </div>
    </section>

   
    <section class="py-16">
      <div
        class="container mx-auto md:px-8 flex flex-col md:flex-row items-center justify-center gap-10"
      >
        <div class="md:w-1/3" data-aos="fade-right">
          <img
            src="src/chose.png"
            class="rounded-lg shadow-lg w-full h-auto"
            alt=""
          />
        </div>
        <div class="md:w-1/3" data-aos="fade-left">
          <p class="text-sm text-orange-400">Our Farm Benefits</p>
          <h2 class="text-3xl font-bold">Why Choose Us Agribot Market</h2>
          <p class="text-sm">
            There are many variations of passages of available but the majortity
            have sufferred alteration in some form by injected humor or random
            word which don’t look even.
          </p>
          <ul class="mt-4 space-y-2 text-gray-600">
            <li>✔ To Increase Food Availability</li>
            <p class="text-sm">
              There are variation You need to be sure there is anything hidden
              in the middle of text.
            </p>
            <li>✔ Professional Engineers</li>
            <p class="text-sm">
              There are variation You need to be sure there is anything hidden
              in the middle of text.
            </p>
            <li>✔ Quality Robot</li>
            <p class="text-sm">
              There are variation You need to be sure there is anything hidden
              in the middle of text.
            </p>
          </ul>
          <a
            href="#"
            class="mt-6 inline-block bg-green-700 px-6 py-3 rounded text-white font-medium"
            >Discover More</a
          >
        </div>
      </div>
    </section>

  
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4 text-center">
        <p class="text-sm text-orange-400">From the Blog</p>
        <h2 class="text-3xl font-bold mb-12" data-aos="fade-up">
          News & Articles
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow w-full" data-aos="fade-up">
            <img src="src/blog1.png" alt="" class="w-full h-auto" />
            <div class="p-4">
              <h3 class="font-semibold mb-2">
                Bringing Food Production Back To Cities
              </h3>
              <p class="text-sm text-gray-600">
                Learn how to make your farm eco-friendly.
              </p>
            </div>
          </div>
          <div
            class="bg-white rounded-lg shadow w-full"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src="src/blog2.png" alt="" class="w-full h-auto" />
            <div class="p-4">
              <h3 class="font-semibold mb-2">
                The Future of Farming, Smart Spraying Solutions
              </h3>
              <p class="text-sm text-gray-600">
                The latest innovations in farming.
              </p>
            </div>
          </div>
          <div
            class="bg-white rounded-lg shadow w-full"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src="src/blog3.png" alt="" class="w-full h-auto" />
            <div class="p-4">
              <h3 class="font-semibold mb-2">
                Agronomy and relation to Other Sciences
              </h3>
              <p class="text-sm text-gray-600">
                Why going organic is worth it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section class="bg-orange-50">
      <footer class="bg-neutral-700 text-white py-12 text-sm">
        <div
          class="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div>
            <p class="mb-4">
              Your company’s short description goes here. It can be two lines
              long to explain your mission.
            </p>
            <div class="flex space-x-4 text-yellow-400 text-xl">
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-facebook"></i></a>
              <a href="#"><i class="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div>
            <h3 class="font-bold mb-2">Explore</h3>
            <div class="w-12 h-1 bg-green-500 mb-4"></div>
            <ul class="space-y-2">
              <li class="flex items-center space-x-2">
                <span>➤</span> <a href="#">About</a>
              </li>
              <li class="flex items-center space-x-2">
                <span>➤</span> <a href="#">Service</a>
              </li>
              <li class="flex items-center space-x-2">
                <span>➤</span> <a href="#">Our Project</a>
              </li>
              <li class="flex items-center space-x-2">
                <span>➤</span> <a href="#">Meet the Engineer</a>
              </li>
              <li class="flex items-center space-x-2">
                <span>➤</span> <a href="#">Latest News</a>
              </li>
              <li class="flex items-center space-x-2">
                <span>➤</span> <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold mb-2">News</h3>
            <div class="w-12 h-1 bg-green-500 mb-4"></div>
            <div class="mb-6">
              <p>Bringing food production back to cities</p>
              <p class="text-gray-400 text-sm">July 5 2022</p>
            </div>
            <div>
              <p>Another headline here</p>
              <p class="text-gray-400 text-sm">August 12 2022</p>
            </div>
          </div>
          <div>
            <h3 class="font-bold mb-2">Contact</h3>
            <div class="w-12 h-1 bg-green-500 mb-4"></div>
            <p class="flex items-center space-x-2">
              <span>📞</span> <span>15607165221</span>
            </p>
            <p class="flex items-center space-x-2">
              <span>✉️</span> <span>info@example.com</span>
            </p>
            <p class="flex items-center space-x-2">
              <span>📍</span> <span>Your Location</span>
            </p>
            <div class="mt-4 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your Email"
                class="px-4 py-2 w-full border border-white rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none"
              />
              <button
                class="bg-green-500 px-4 py-2 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div
        class="bg-gray-950 flex flex-col sm:flex-row justify-between text-white text-sm py-5 px-4 sm:px-20"
      >
        <p>© All Copyright 2024 by shawonetc Themes</p>
        <p>Terms of Use Privacy Policy</p>
      </div>
    </section>

 </div>

  )
}

export default Home;