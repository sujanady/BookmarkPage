import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-zinc-800 w-full h-10 flex px-5'>
      <div className="left w-1/2 flex items-center">
        <div className="left text-2xl font-bold flex w-40  hover:bg-zinc-700 cursor-pointer rounded-xl  ">
        <span className='text-green-600'>&lt;</span>  <span className='text-rose-800'>Dev</span> <span className='text-white'>Sujan</span> <span className='text-green-600'>/&gt;</span>
          </div>
      </div>
      <div className=" right"></div>
    </nav>
  )
}

export default Navbar
