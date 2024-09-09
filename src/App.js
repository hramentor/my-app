import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
// import Cart from "./components/Cart";
// import Contact from "./components/Contact";
// import About from "./components/About";
import Menu from "./components/Menu";
// import Login from "./components/Login";
import {createBrowserRouter, Outlet} from "react-router-dom"
import {Provider} from "react-redux"
import Abc from "./utils/Abc";
import appStore from "./utils/appStore";

const Cart= lazy(()=>import("./components/Cart"))
const Contact= lazy(()=>import("./components/Contact"))
const Login= lazy(()=>import("./components/Login"))
const About=lazy(()=>import("./components/About"))

const App = () => {


  const [user,setUser]= useState()

  useEffect(()=>{

    let h={
      j:"Welcome to React"
    }

    setUser(h.j)


  },[])

  return (
    <Provider store={appStore}>
    <div>
      <Abc.Provider value={{nam:user,setUser}}>
      <Abc.Provider value={{nam:user}}>
      <Header />
      </Abc.Provider>
      <Outlet/>
      </Abc.Provider>
    </div>
    </Provider>
  );
};


export const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>About Component loading</h1>}><About/></Suspense>
      },
      {
        path:"/contact",
        element:<Suspense><Contact/></Suspense>
      },
      {
        path:"/cart",
        element: <Suspense><Cart/></Suspense>
      },
      {
        path:"/login",
        element:<Suspense><Login/></Suspense>
      },
      {
        path:"/menu/:id",
        element: <Menu/>
      }
    ]
  }
])


