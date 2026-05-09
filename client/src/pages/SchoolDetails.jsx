import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const schoolData = [
  {
    id: "1",
    name: "The Doon School",
    location: "Dehradun",
    rating: "4.9",
    fees: "₹8,00,000",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    description:
      "One of India's best boarding schools with excellent academics and modern facilities.",
    facilities: [
      "Smart Classrooms",
      "Sports Complex",
      "Hostel",
      "Library",
      "Medical Facilities",
    ],
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
      "Historic institution focused on leadership and sports excellence.",
    facilities: [
      "Swimming Pool",
      "Digital Labs",
      "Sports Ground",
      "Hostel",
      "Cafeteria",
    ],
  },

  {
    id: "3",
    name: "Welham Girls School",
    location: "Dehradun",
    rating: "4.7",
    fees: "₹6,80,000",
    image:
      "data:image/jpeg;base64,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",
    description:
      "Modern education and empowering environment for girls.",
    facilities: [
      "Library",
      "Sports",
      "Modern Hostel",
      "Labs",
      "Transport",
    ],
  },
];

const SchoolDetails = () => {
  const { id } = useParams();

  const school = schoolData.find(
    (item) => item.id === id
  );

  if (!school) {
    return (
      <div className="h-screen flex items-center justify-center text-4xl font-bold">
        School Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-6">
      
      <div className="max-w-6xl mx-auto">

        <img
          src={school.image}
          alt={school.name}
          className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
        />

        <div className="bg-white rounded-3xl shadow-xl p-8 mt-10">

          <h1 className="text-5xl font-bold text-gray-800">
            {school.name}
          </h1>

          <p className="mt-3 text-xl text-gray-500">
            📍 {school.location}
          </p>

          <div className="flex gap-6 mt-6">
            <div className="bg-yellow-100 px-5 py-3 rounded-2xl">
              ⭐ {school.rating}
            </div>

            <div className="bg-blue-100 px-5 py-3 rounded-2xl">
              {school.fees}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold mb-4">
              About School
            </h2>

            <p className="text-lg text-gray-600 leading-8">
              {school.description}
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">
              Facilities
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              {school.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-5 rounded-2xl shadow-lg"
                >
                  {facility}
                </div>
              ))}
            </div>
          </div>

        <Link to={`/apply/${school.id}`}>
  <button className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-4 rounded-full font-semibold text-black hover:scale-105 transition">
    Apply Now
  </button>
</Link>
        </div>
      </div>
    </div>
  );
};

export default SchoolDetails;