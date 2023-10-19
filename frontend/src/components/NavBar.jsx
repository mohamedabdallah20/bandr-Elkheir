import React from 'react'
import HamburgerMenu from './HamburgerMenu'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="navbar bg-base-300">
      <div className="container flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
        <div className="flex-1">
          <Link to="/">
            <h1 className="btn btn-ghost uppercase font-bold  md:text-xl text-lg">
              Bander El-Kheir
            </h1>
          </Link>
        </div>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default NavBar
