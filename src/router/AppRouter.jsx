import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'

const EmptyPage = () => null

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<EmptyPage />} />
          <Route path="/about" element={<EmptyPage />} />
          <Route path="/contact" element={<EmptyPage />} />
          <Route path="/dashboard" element={<EmptyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
