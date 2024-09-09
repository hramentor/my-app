

import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import React, { useState } from 'react'
import ItemList from "./ItemList";

const Cate = (props) => {
    const {title,itemCards}=props.cate.card.card
    const {show,setShowIndex,x}= props

    //const [show,setShow]=useState(true)

    const showItem=()=>{
      
      setShowIndex()
    }
   
  return (
    <div className='  w-[50%] m-auto  my-3 p-4 shadow-xl' onClick={showItem}>
        <div className=" flex justify-between">
        <span className=' font-bold text-lg'>{title} ({itemCards.length})</span>
        <span>{!show ? <IoIosArrowDown /> : <IoIosArrowUp/>}</span>
        </div>

{
    show &&  <ItemList y={x} items={itemCards}/>
}
       
       
    </div>
  )
}

export default Cate