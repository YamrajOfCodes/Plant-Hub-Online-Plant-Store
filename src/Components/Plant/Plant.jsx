import React from 'react'
import {ShoppingBag} from "lucide-react"
import { Link } from 'react-router-dom'

const Plant = ({title,desc,price,image,order}) => {
  return (
      <div className="plant-section p-5 border flex flex-col mt-5 xl:px-8  rounded-[6rem] backdrop-blur-md bg-white/5 shadow-2xl  border-white/20 items-center text-white sm:w-2/3 md:h-70 md:flex-row md:justify-between">
      <div className={`relative -mt-15 md:-mt-36 h-32  flex-shrink-0 md:h-64 xl:w-1/2 md:order-[${order}]`}>
    <img src={image} alt="" className="h-full object-contain xl:scale-125 mx-auto" />
  </div>
      <div className={`right-part text-center md:text-start px-2 h-2/3 md:h-5/6 md:py-2 mb-2 space-y-2 order-[${order-1}]`}>
       <h2 className='text-sm font-bold xl:text-xl'>{title}</h2>
       <p className='text-sm xl:text-md'>{desc}</p>
       <span className='xl:text-xl'>Rs. {price}/-</span>
       <div className="cta flex gap-4 mt-2 items-center justify-center md:justify-start xl:mt-4">
         <button className='border px-4 py-1 rounded-md text-sm xl:text-lg xl:px-6'><Link to={"/product"}>Explore</Link></button>
          <button className='border p-1 rounded-md text-sm'><ShoppingBag className='svg'/></button>
       </div>
      </div>
     </div>
  )
}

export default Plant
