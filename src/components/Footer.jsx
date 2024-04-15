import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className='bottom-0 h-10 text-center inset-x-0 fixed'>
      <p className='text-gray-400'>Copyright &copy; {currentYear}</p>
    </footer>
  )
}

export default Footer
