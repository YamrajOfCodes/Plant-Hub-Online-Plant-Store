import React, { useState } from 'react'
import Logo from "../../assets/Images/Logo.png"
import { Search, ShoppingBag } from 'lucide-react';
import Polygon from "../../assets/Images/Polygon 1.png"
import { Link } from "react-router-dom"

const Header = () => {

    const [showNav,setShowNav] = useState(false);

   const handleNav = ()=>{
    setShowNav(!showNav);
  }


  return (
      <header>
       <nav className='w-full h-18 flex items-start  px-4  justify-between'>
        
        <Link to='/' className="w-auto cursor-pointer">
            <img src={Logo} alt="brand's logo" className='w-[45%] md:w-[35%] lg:w-[40%] flex items-center py-2 md:py-0 ' srcset="" />
        </Link>
        
        <div className="middle hidden lg:block">
          <ul className='flex gap-14 font-indie text-xl items-center' style={{fontFamily:'Indie Flower'}}>
            <li className='font-indie bg-testcolor cta-links'><Link to="/">Home</Link></li>
               <li className='cta-links p-2 cursor-pointer rounded-xl flex   gap-4'><div className='self-start'>Plant Type</div> <div className='flex items-center'><img src={Polygon} alt="polygon's imags" className='w-2' srcset="" /></div></li>
            <li className='font-indie flex cta-links'><Link>More</Link></li>
            <li className='font-indie cta-links'><Link>Contact</Link></li>
          </ul>
        </div>
        <div className="last-part flex gap-8 text-sm h-full py-2 items-start">
          <span><Search size={18} /></span>
          <span><ShoppingBag size={18} /></span>
          <div className="menu-icon cursor-pointer py-1" onClick={handleNav}>
           <span className='data'></span>
           <span className='data1'></span>
          </div>

        </div>
      </nav>
     {
      showNav &&  <div className="box px-4 py-2  lg:hidden  transition ease-in ">
        <ul className='flex flex-col gap-4 text-sm  transition ease-in '>
            <li className='hover:bg-green-900 p-2 cursor-pointer rounded-xl'>Home</li>
            <li className='hover:bg-green-900 p-2 cursor-pointer rounded-xl'>Plant Type</li>
            <li className='hover:bg-green-900 p-2 cursor-pointer rounded-xl'>More</li>
            <li className='hover:bg-green-900 p-2 cursor-pointer rounded-xl'>Contact</li>
          </ul>
      </div>
     }
     </header>
  )
}

export default Header
