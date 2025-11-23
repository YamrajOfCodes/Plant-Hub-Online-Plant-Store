import { Star, StarHalf } from 'lucide-react'
import React from 'react'
import "../../App.css"


const Reviews = ({userName,userImg,userDesc}) => {
  return (
    <div className="bottom h-auto px-6 py-4 w-4/5 md:w-[35vw] md:h-[30vh] xl:w-[20vw] xl:h-[40vh]  card space-y-5 flex flex-col justify-center  border rounded-xl backdrop-blur-md bg-white/5  border-white/20 xl:flex xl:flex-col xl:justify-center ">
         <div className="top-part flex gap-5 px-4 sm:justify-start xl:justify-center">
          
              <img src={userImg} className='profile absolute  h-36 w-40 -left-5' alt="" srcset="" />
           
           <div className="desc flex flex-col ml-20 lg:ml-0">
            <span className='text-sm md:text-lg xl:text-xl'>{userName}</span>
            <span className='text-sm flex'>
             <Star className='h-4 fill-yellow-400'/>
             <Star className='h-4 fill-yellow-400'/>
             <Star className='h-4 fill-yellow-400'/>
             <Star className='h-4 fill-yellow-400'/>
             <StarHalf className='h-4 fill-yellow-400'/>
            </span>
           </div>
         </div>
         <div className="bottom-part mt-2">
         <p className='text-sm md:text-md xl:text-lg'>{userDesc}.</p>
         </div>
        </div>
  )
}

export default Reviews
