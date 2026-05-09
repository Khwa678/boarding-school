import { useState } from "react";
import SchoolCard from "../components/SchoolCard";
import SearchBar from "../components/SearchBar";

const schoolData = [
  {
    id: 1,
    name: "The Doon School",
    location: "Dehradun",
    rating: "4.9",
    fees: "₹8,00,000",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    description:
      "One of India's best boarding schools with excellent academics.",
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
      "Historic institution focused on leadership and sports.",
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
      "Modern education and empowering environment for girls.",
  },
];

const Schools = () => {
  const [search, setSearch] = useState("");

  const filteredSchools = schoolData.filter((school) =>
    school.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-800">
            Boarding Schools
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Explore India's top-rated boarding schools.
          </p>
        </div>

        {/* Search */}
        <SearchBar search={search} setSearch={setSearch} />

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {filteredSchools.map((school) => (
            <SchoolCard key={school.id} school={school} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schools;