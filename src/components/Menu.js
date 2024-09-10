

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMenu from '../utils/useMenu'
import Cate from './Cate'
const Menu = () => {

 const [showIndex,setShowIndex] = useState(null)

 const a="Vijay"
  const {id} = useParams()

  const menu= useMenu(id)
  
  
if (menu===null)  return <h1>Menu loading</h1>
  const {name,costForTwoMessage} = menu.data.cards[2].card.card.info
  const cate= menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(each=> each.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
 // console.log(cate)
  return (
    <div className=' text-center'>
      <h1 className=' font-bold my-5 text-2xl'>{name}</h1>
      <h3 className=' font-bold '>{costForTwoMessage}</h3>

      {
        cate.map((each,index)=> <Cate 
          cate={each}
          show={index===showIndex ? true :false}
          setShowIndex={()=>{setShowIndex(index)}}
          x={a}
        />)
      }

    </div>
  )
}

export default Menu