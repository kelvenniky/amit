import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';




const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='container h-full flex items-center mx-auto px-4 justify-between'>
        <div className=''>
          <Link to={'/'}>
          <Logo w={90} h={50}/>
          </Link>
        </div>
        <div className='hidden:lg  flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
          <input type="text" placeholder='search products here..' className='w-full outline-none ' />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
          <CiSearch />

          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='text-3xl cursor-pointer'>
          <FaRegCircleUser />
          </div>
          <div className='text-2xl relative'>
            <span> <FaShoppingCart /> </span>

            <div className='bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            <Link to={"/login"}className='px-3 bg-red-600 py-1 text-white hover:bg-red-700 rounded-full'>Login</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header