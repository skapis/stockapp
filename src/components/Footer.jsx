import React from 'react'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="bottom-0 left-0 p-4 w-full bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6">
        <span className='text-sm text-black sm:text-center'>
          {`${year} Jakub Skapik`}
        </span>
    </footer>
  )
}

export default Footer