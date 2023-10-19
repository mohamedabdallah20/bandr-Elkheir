import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Contact from './pages/Contact'
function App() {
  ;<main className="container mx-auto px-3 py-4 pb-12"></main>

  return (
    <Router>
      <div className="h-screen justify-between">
        <NavBar />
        <main className="flex flex-col bg-slate-50 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
