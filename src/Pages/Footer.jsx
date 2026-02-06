import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="mt-auto bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm">
          <p>
            Created by your Computer Teacher - Vivek Kumar
          </p>
          <p className="mt-1">
            Portfolio:{" "}
            <a
              href="https://developervivekdev.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-orange-400 hover:underline"
            >
              developervivekdev.vercel.app
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
