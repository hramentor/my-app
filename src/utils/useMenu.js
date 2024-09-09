
import { useState,useEffect } from "react"


const useMenu=(id)=>{
    const [menu,setMenu]= useState(null)
    const res_menu_api="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.385044&lng=78.486671&restaurantId="

    useEffect(()=>{
        const fetchMenu=async()=>{
          const data= await fetch(res_menu_api+id)
          const res= await data.json()
          setMenu(res)
        }
        fetchMenu()
    
      },[])

      return menu

}


export default useMenu