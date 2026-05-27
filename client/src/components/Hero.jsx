import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
     <img
  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
  alt="Boarding School"
  className="absolute inset-0 w-full h-full object-cover"
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Floating Blur Effect */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6 max-w-5xl"
      >

        {/* Badge */}
        <div className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-6 shadow-lg">
          <span className="text-sm md:text-base font-medium tracking-wide">
            ✨ India’s Trusted Boarding School Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

          Discover India’s <br />

          <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
            Best Boarding Schools
          </span>

        </h1>

        {/* Paragraph */}
        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Explore top-rated schools with world-class education,
          modern hostel facilities, sports excellence, and holistic student development.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

          {/* Explore Schools Button */}
          <button
            onClick={() => {
              const section = document.getElementById("featured-schools");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-4 rounded-full text-lg font-semibold shadow-2xl transition duration-300 hover:scale-105"
          >

            <span className="relative z-10 text-white flex items-center gap-2">
              Explore Schools →
            </span>

            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          </button>

          {/* Learn More Button */}
          <button
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            className="group border border-white/40 backdrop-blur-lg bg-white/10 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300 shadow-xl"
          >

            <span className="flex items-center gap-2">
              Learn More ✦
            </span>

          </button>

        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 shadow-xl">
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="text-gray-300 mt-2">Schools</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 shadow-xl">
            <h2 className="text-3xl font-bold">50K+</h2>
            <p className="text-gray-300 mt-2">Students</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 shadow-xl">
            <h2 className="text-3xl font-bold">100+</h2>
            <p className="text-gray-300 mt-2">Cities</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl border border-white/20 shadow-xl">
            <h2 className="text-3xl font-bold">4.9★</h2>
            <p className="text-gray-300 mt-2">Ratings</p>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default Hero;