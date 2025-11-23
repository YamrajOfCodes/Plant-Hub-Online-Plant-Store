import { Play, Star, StarHalf } from 'lucide-react'
import React from 'react'
import TopCoursel from '../TopCoursel/TopCoursel'
import Avtar from "../../assets/Images/Avtar1.png"

const Hero = () => {
  return (
    <div className="hero-part px-4 py-2 h-1/2 space-y-36 mt-2 lg:mt-15 xl:mt-72  sm:flex justify-between items-center xl:relative xl:-top-40 lg:h-[70vh]">
      <div className="first-part space-y-8 h-full lg:w-[60%] lg:flex lg:flex-col lg:justify-around ">
        <div className="top space-y-2 xl:space-y-3">
          <div className="heading">
         <h1 className='text-3xl lg:text-5xl xl:text-8xl font-bold opacity-90' style={{fontFamily:"Inter"}}>
          Earth’s Exhale
         </h1>
        </div>
        <div className="desc text-sm xl:text-lg">
         <p>"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
        </div>
        <div className="buttons flex gap-2 items-center">
          <div className="left">
            <button className='border px-4 py-1 rounded-md text-sm xl:px-6 xl:py-2 xl:text-xl'>Buy Now</button>
          </div>
          <div className="right flex gap-2 items-center">
            <button className=' border p-2 rounded-full '><Play className='fill-white' /></button>
            <span className='text-md' style={{fontFamily:"Indie Flower"}}>Live Demo...</span>
          </div>
        </div>
        </div>
        <div className="bottom h-auto border px-6 py-4 w-2/3 xl:w-[55%] rounded-2xl backdrop-blur-md bg-white/5  border-white/20">
         <div className="top-part flex gap-2">
           <img src={Avtar} className='profile absolute  h-30 w-32 -left-5' alt="" srcset="" />
           <div className="desc flex flex-col w-full ml-15 ">
            <span className='text-sm'>Ronnie Hamill</span>
            <span className='text-sm flex'>
             <Star className='h-4 fill-yellow-400'/>
             <Star className='h-4 fill-yellow-400'/>
             <Star className='h-4 fill-yellow-400'/>
             <Star className='h-4 fill-yellow-400'/>
             <StarHalf className='h-4 fill-yellow-400'/>
            </span>
           </div>
         </div>
         <div className="bottom-part mt-5">
         <p className='text-sm'>I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.</p>
         </div>
        </div>
      </div>
     
   <div className="second-part flex w-full md:justify-end md:items-start h-full  ">
      <TopCoursel/>
    </div>
     </div>
  )
}

export default Hero
