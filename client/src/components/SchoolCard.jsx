import { Link } from 'react-router-dom'

const SchoolCard = ({ school }) => {
  return (
    <div className='bg-white/30 backdrop-blur-lg rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition'>
      
      <img
        src={school.image}
        alt={school.name}
        className='w-full h-56 object-cover'
      />

      <div className='p-5'>
        <h2 className='text-2xl font-bold'>{school.name}</h2>

        <p className='text-gray-600'>{school.location}</p>

        <p className='mt-2'>⭐ {school.rating}</p>

        <p className='mt-2 font-semibold'>
          Fees: {school.fees}
        </p>

        <p className='mt-3 text-gray-700'>
          {school.description}
        </p>

        <Link to={`/schools/${school.id}`}>
          <button className='mt-4 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition'>
            View Details
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SchoolCard