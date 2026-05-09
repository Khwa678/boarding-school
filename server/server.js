import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const schools = [
  {
    id: 1,
    name: 'The Doon School',
    location: 'Dehradun',
    rating: '4.9',
    fees: '₹8,00,000',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
    description: 'Prestigious boarding school with world class education.'
  }, {
    id: 2,
    name: 'Mayo College',
    location: 'Ajmer',
    rating: '4.8',
    fees: '₹7,50,000',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop',
    description: 'Historic institution focused on leadership and sports.'
  }
]

app.get('/api/schools', (req, res) => {
  res.json(schools)
})
app.get('/api/schools/:id', (req, res) => {
  const school = schools.find((s) => s.id === parseInt(req.params.id))

  if (!school) {
    return res.status(404).json({ message: 'School not found' })
  }

  res.json(school)
})
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  res.json({
    success: true,
    message: 'Message received successfully',
    data: { name, email, message }
  })
  })
  app.listen(5000, () => {
  console.log('Server running on port 5000')
})