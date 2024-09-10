

import React, { useContext } from 'react'
import { FaRupeeSign } from "react-icons/fa";
import Abc from '../utils/Abc';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = (props) => {
  const {nam}=  useContext(Abc)

  const dispatch= useDispatch()

  const handleItem=(item)=>{

    dispatch(addItem(item))

  }
    const {items,y} = props
     const image_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
  return (
    <div>
        {
            items.map((item)=>(
                <div className=' p-2 m-2 border-gray-200  border-b-2 text-left flex justify-between'>
                    <div className=' w-9/12'>
                    <div className=' py-2'>
                        <span>{item.card.info.name}</span>
                        <span className=' flex'>
                        <FaRupeeSign />
                        {item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}
                        </span>
                        <p>{item.card.info.description}</p>
                        <p>{nam}</p>
                    </div>
                    </div>
                    <div className=' w-3/12'>
                    <div>
                        <button className=' p-2 mx-16 rounded-lg bg-black text-white shadow-lg absolute' onClick={()=>handleItem(item)}>Add +</button>
                    </div>
                    {
                        item.card.info.imageId && <img alt="res-ca" src={image_url+item.card.info.imageId} />
                    }

                    </div>
                   
                </div>
            ))
        }
    </div>
  )
}

export default ItemList