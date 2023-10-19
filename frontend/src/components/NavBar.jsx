import React from 'react'
import HamburgerMenu from './HamburgerMenu'

function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Bander El-Kheir</a>
        </div>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default NavBar
