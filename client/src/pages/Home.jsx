import Hero from "../components/Hero";
import SchoolCard from "../components/SchoolCard";

const schools = [
  {
    id: "1",
    name: "The Doon School",
    location: "Dehradun",
    rating: "4.9",
    fees: "₹8,00,000",
    image:



      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070&auto=format&fit=crop",
    description:
      "One of India’s most prestigious boarding schools with excellent academics.",
  },


  
  {
    id: "2",
    name: "Mayo College",
    location: "Ajmer",
    rating: "4.8",
    fees: "₹7,50,000",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    description:
      "A historic institution known for leadership and holistic development.",
  },

  {
    id: "3",
    name: "Welham Girls School",
    location: "Dehradun",
    rating: "4.7",
    fees: "₹6,80,000",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=2070&auto=format&fit=crop",
    description:
      "Empowering young women through education and modern infrastructure.",
  },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-purple-50 overflow-hidden">

      {/* Hero */}
      <Hero />

      {/* Featured Schools */}
      <section
        id="featured-schools"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-16">

          <div className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-medium mb-5">
            Top Institutions
          </div>

          <h2 className="text-5xl font-bold text-gray-800">
            Featured Boarding Schools
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover India’s top educational institutions offering world-class
            academics, sports, hostel life, and personality development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-800 text-white overflow-hidden">

        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <div className="inline-block bg-white/10 border border-white/20 px-5 py-2 rounded-full backdrop-blur-lg mb-6">
            Why Choose Us
          </div>

          <h2 className="text-5xl font-bold mb-14">
            Why Students Love EduBoard
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {/* Card */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl hover:-translate-y-2 transition duration-300">

              <div className="text-5xl mb-5">🎓</div>

              <h3 className="text-2xl font-bold mb-4">
                Trusted Information
              </h3>

              <p className="text-gray-200 leading-7">
                Verified school data, transparent details,
                and reliable educational guidance.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl hover:-translate-y-2 transition duration-300">

              <div className="text-5xl mb-5">⚡</div>

              <h3 className="text-2xl font-bold mb-4">
                Fast Experience
              </h3>

              <p className="text-gray-200 leading-7">
                Responsive modern UI with fast loading
                and optimized browsing experience.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 shadow-2xl hover:-translate-y-2 transition duration-300">

              <div className="text-5xl mb-5">🌎</div>

              <h3 className="text-2xl font-bold mb-4">
                Top Schools
              </h3>

              <p className="text-gray-200 leading-7">
                Discover India’s best boarding schools
                across multiple cities and states.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">
              <h2 className="text-5xl font-bold">500+</h2>
              <p className="mt-4 text-lg">Schools</p>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">
              <h2 className="text-5xl font-bold">50K+</h2>
              <p className="mt-4 text-lg">Students</p>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-10 rounded-3xl shadow-xl hover:scale-105 transition">
              <h2 className="text-5xl font-bold">100+</h2>
              <p className="mt-4 text-lg">Cities</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black p-10 rounded-3xl shadow-xl hover:scale-105 transition">
              <h2 className="text-5xl font-bold">4.9★</h2>
              <p className="mt-4 text-lg">Ratings</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 bg-gradient-to-r from-blue-700 to-purple-800 text-white overflow-hidden">

        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-5xl mx-auto text-center px-6">

          <div className="inline-block bg-white/10 border border-white/20 px-5 py-2 rounded-full backdrop-blur-lg mb-6">
            Start Your Journey
          </div>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Find The Perfect Boarding School
          </h2>

          <p className="mt-8 text-xl text-gray-200 leading-relaxed">
            Explore top-rated schools with modern facilities,
            hostel life, sports excellence, and academic growth.
          </p>

          <button
            onClick={() => {
              const section = document.getElementById("featured-schools");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition duration-300 shadow-2xl"
          >
            Explore Schools →
          </button>

        </div>
      </section>
    </div>
  );
};

export default Home;