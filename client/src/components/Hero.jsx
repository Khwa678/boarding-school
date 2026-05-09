import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
        alt="Boarding School"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Discover India’s <br />
          <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Best Boarding Schools
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto">
          Explore top-rated schools with world-class education,
          hostel facilities, sports, and academic excellence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="bg-gradient-to-r from-blue-600 to-purple-700 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 shadow-2xl">
            Explore Schools
          </button>

          <button className="border border-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;