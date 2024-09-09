import { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Abc from "../utils/Abc";

const Body = () => {

    const [data,setData] =useState([])

    const {setUser} = useContext(Abc)

    useEffect(()=>{

        const fetchData=async()=>{
            const li= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const res= await li.json()
            setData(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
           console.log(res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }

        fetchData()

    },[])

  return (data.length===0)? <Shimmer/> : (
    <div>
        <button onClick={()=>{
            const filterRes= data.filter(each=> each.info.avgRating>4.5)
            setData(filterRes)
            console.log(filterRes)
        }}>Top rated restaurants</button>

        <div>
            <label>Username</label>
            <input type="text"  onChange={(e)=>{

setUser(e.target.value)
            }}/>
            
        </div>
    <div className=" flex flex-wrap">

        {
            data.map(each =><Link to={"/menu/"+each.info.id}><Card key={each.info.id} item={each} /></Link> )
        }
      
    </div>
    </div>
  );
};

export default Body;
