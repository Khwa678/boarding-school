import { useState } from 'react'
import API from '../services/api'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
try {
      const res = await API.post('/contact', formData)
      alert(res.data.message)

      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      alert('Something went wrong')
    }
  }

  return (
    <div className='max-w-5xl mx-auto py-20 px-4'>
      <h1 className='text-5xl font-bold text-center mb-10'>Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-2xl rounded-3xl p-8 space-y-6'
      >
        <input
          type='text'
          name='name'
           placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          className='w-full border p-4 rounded-xl'
        />

        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          className='w-full border p-4 rounded-xl'
        />
 <textarea
          name='message'
          placeholder='Message'
          rows='5'
          value={formData.message}
          onChange={handleChange}
          className='w-full border p-4 rounded-xl'
        /> <button className='bg-gradient-to-r from-blue-600 to-purple-700 text-white px-8 py-3 rounded-full'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact