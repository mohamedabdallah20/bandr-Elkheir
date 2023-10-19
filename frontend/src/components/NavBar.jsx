import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Bander El-Kheir
          </Link>
        </div>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default NavBar
