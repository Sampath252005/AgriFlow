import React from 'react'

const NavBar = () => {
  return (
    <>
    <nav className="flex justify-between px-3.5 bg-slate-800 min-h-[50px] items-center">
  <ul className="flex gap-x-10 font-bold text-white">
    <li className='hover:bg-slate-600 p-5 rounded-2xl border'>App Name</li>   
    <li className='hover:bg-slate-600 p-5 rounded-2xl'>Home</li>
    <li className='hover:bg-slate-600 p-5 rounded-2xl'>Weather</li>
    <li className='hover:bg-slate-600 p-5 rounded-2xl'>Soil</li>
    <li className='hover:bg-slate-600 p-5 rounded-2xl'>Water</li>
    <li className='hover:bg-slate-600 p-5 rounded-2xl'>Samath</li>
  </ul>
</nav>

    </>
  )
}

export default NavBar