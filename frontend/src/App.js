import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
function App() {
  ;<main className="container mx-auto px-3 py-4 pb-12"></main>

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />

        <main className="container mx-auto px-3 py-4 pb-12">
          <Routes></Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
