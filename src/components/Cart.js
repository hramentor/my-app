

import React from 'react'
import { clearItem } from '../utils/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'

const Cart = () => {

  const item=useSelector(store=>store.cart.items)
  const dispatch= useDispatch()

  const clearCart=()=>{

    dispatch(clearItem())

  }
  console.log(item)
  return (
    <div className=' text-center m-5 p-5'>
      <h1 className=' font-bold text-2xl'>Cart</h1>
      <div className=' w-6/12 m-auto'>
      <button onClick={clearCart}>Clear Cart</button>
     {item.length===0 && <h1>Cart is Empty please add items</h1>} 
     <ItemList  items={item}/>
      </div>
   
    </div>
  )
}

export default Cart