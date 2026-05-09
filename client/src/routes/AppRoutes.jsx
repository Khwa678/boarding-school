import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Schools from '../pages/Schools'
import SchoolDetails from '../pages/SchoolDetails'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MainLayout from '../layouts/MainLayout'
import Apply from "../pages/Apply";
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/schools' element={<Schools />} />
          <Route path='/schools/:id' element={<SchoolDetails />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/apply/:id" element={<Apply />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
export default AppRoutes