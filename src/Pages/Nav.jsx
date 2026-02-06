import React from 'react'

const Nav = () => {
  return (
    <div>
        {/* ===== NAVBAR ===== */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
    src="/logo.png"
    alt="Computer Logo"
    className="w-8 h-8 mb-2 object-contain"
  />
            <h1 className="text-lg md:text-xl font-bold text-gray-800">
              Trivia Concept School
              <span className="block text-sm font-medium text-gray-500">
                Noorsarai, Nalanda
              </span>
            </h1>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
