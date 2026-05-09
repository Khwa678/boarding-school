import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-10 mt-10'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-4'>EduBoard</h2>

        <div className='flex justify-center gap-6 text-2xl mb-4'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>

        <p>© 2026 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer