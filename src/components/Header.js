

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Abc from '../utils/Abc'
import { useSelector } from 'react-redux'

const Header = () => {


 const cartItem= useSelector(store=>store.cart.items)
 console.log(cartItem)

 const {nam}= useContext(Abc)

  return (
    <div className=' flex justify-between bg-blue-300 shadow-xl'>
        <img className=' h-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Pmgwclym0lINzs_-jo9RjVilemwJIgH0iw&s" />
        <ul className=' flex items-center'>
          <li>{nam}</li>
           <Link to="/"> <li className=' px-2'>Home</li></Link>
           <Link to="/about"> <li className=' px-2'>About</li> </Link>
           <Link to="/cart"> <li className=' px-2 font-bold text-2xl'>Cart- {cartItem.length}</li></Link>
           <Link to="/contact"><li className=' px-2'>Contact</li></Link> 
            <a href='/login'> <li className=' px-2'>Login</li></a>
        </ul>
    </div>
  )
}

export default Header