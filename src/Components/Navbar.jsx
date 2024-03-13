import React from 'react'

function Navbar() {
  return (
   <div className='flex gap-2 m-4 justify-between'>
    <div>
        Logo
    </div>
    <div className='flex gap-2'>
    <span>Home</span>
    <span>Search</span>

    </div>
   </div>
  )
}

export default Navbar