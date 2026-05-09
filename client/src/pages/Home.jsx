import Hero from "../components/Hero";
import SchoolCard from "../components/SchoolCard";

const schools = [
  {
    id: 1,
    name: "The Doon School",
    location: "Dehradun",
    rating: "4.9",
    fees: "₹8,00,000",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    description:
      "One of India’s most prestigious boarding schools with excellent academics.",
  },
  {
    id: 2,
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
    id: 3,
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
    <div className="bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      
      {/* Hero Section */}
      <Hero />

      {/* Featured Schools */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800">
            Featured Boarding Schools
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Discover India’s top educational institutions offering world-class
            academics, sports, hostel life, and overall personality development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {schools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-14">
            Why Choose EduBoard?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Trusted Information
              </h3>
              <p>
                We provide authentic details and verified school information.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Modern Experience
              </h3>
              <p>
                Smooth UI/UX with fast loading and responsive design.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">
                Top Schools
              </h3>
              <p>
                Discover the best boarding schools across India in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-5xl font-bold text-gray-800">
          Start Your Journey Today
        </h2>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore the best boarding schools and shape your future with quality
          education and modern facilities.
        </p>

        <button className="mt-10 bg-gradient-to-r from-blue-600 to-purple-700 text-white px-10 py-4 rounded-full text-lg font-semibold hover:scale-105 transition duration-300 shadow-xl">
          Explore Now
        </button>
      </section>
    </div>
  );
};

export default Home;