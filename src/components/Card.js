

import Abc from "../utils/Abc"
import {useContext} from 'react'

const Card = (props) => {
const {name,areaName,avgRating,cloudinaryImageId,costForTwo,sla,cuisines} = props.item.info
const {nam}= useContext(Abc)

    
    const image_url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
   
  return (
    <div className=' h-[380px] w-[240px] m-4 p-4 rounded-xl bg-gray-300 hover:bg-blue-200'>
        <img className=' h-[160px] w-[240px] rounded-xl' src={image_url+cloudinaryImageId}/>

        <h3 className=' text-xl font-bold'>{name}</h3>
        <p>{avgRating} 🌟</p>
        <p>{cuisines[0]}</p>
        <p>{sla.deliveryTime}</p>
        <p>{costForTwo}</p>
        <p>{areaName}</p>
        <p>{nam}</p>
    </div>
  )
}

export default Card