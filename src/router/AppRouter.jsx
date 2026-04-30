import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Courses from '../pages/Courses'
import CourseDetails from '../pages/CourseDetails'

const EmptyPage = () => null

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<EmptyPage />} />
          <Route path="/dashboard" element={<EmptyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
