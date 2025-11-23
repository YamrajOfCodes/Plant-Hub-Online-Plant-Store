import { ShoppingBag } from 'lucide-react'
import React from 'react'

const PlantCard = ({plantImage,plantName,plantDesc,plantPrice}) => {
  return (
     <div className="w-96 h-[40vh] card rounded-4xl p-4 border border-white/50 bg-white/4 shadow-xl flex flex-col justify-end gap-4">
    
      <img 
        src={plantImage} 
        alt={"Aglaonema plant"} 
        className="w-full mx-auto absolute scale-100 sm:scale-125 bottom-10 md:bottom-18 z-10"
      />

     <div>
       <div className="space-y-1 xl:mt-10">
        <h2 className="text-lg font-semibold text-white xl:text-xl">{plantName}</h2>
        <p className="text-sm text-gray-300 leading-tight xl:text-lg">
        {plantDesc}
        </p>
      </div>

      <div className="flex justify-between items-center pt-2">
        <span className="text-white font-semibold xl:text-2xl">Rs. {plantPrice}/-</span>

        <button className="p-3 rounded-lg border border-gray-400/40 text-gray-200 transition">
          <ShoppingBag className='cursor-pointer' />
        </button>
      </div>
     </div>
    </div>
  )
}

export default PlantCard
