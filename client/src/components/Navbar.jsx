import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='sticky top-0 z-50 bg-white/20 backdrop-blur-lg shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
        <h1 className='text-2xl font-bold text-blue-700'>EduBoard</h1>

        <div className='hidden md:flex gap-6'>
          <Link to='/'>Home</Link>
          <Link to='/schools'>Schools</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>

        <button className='md:hidden' onClick={() => setOpen(!open)}>
          <FaBars size={22} />
        </button>
      </div>

      {open && (
        <div className='flex flex-col bg-white p-4 md:hidden'>
          <Link to='/'>Home</Link>
          <Link to='/schools'>Schools</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar