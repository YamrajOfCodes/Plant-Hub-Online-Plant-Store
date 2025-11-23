import React, { useState } from 'react'

// data imports

import { trendyPlants } from '../../Data/Trendyplants';
import { products } from '../../Data/Products';
import { reviews } from '../../Data/Reviews';


// Following are Components imports

import "../../App.css"
import Plant from '../../Components/Plant/Plant';
import Hero from '../../Components/HeroSection/Hero';
import Header from '../../Components/Header/Header';
import PlantCard from '../../Components/PlantCard/PlantCard';
import Footer from '../../Components/Footer/Footer';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';



const Product = () => {

  return (
    <div className=' text-white px-2 bg-[#192415]'>
      <div className="main h-auto py-5">
     <Header/>
      <Hero/>
     <section className='space-y-8 mt-15 xl:space-y-30 py-2 xl:mt-10'>
       <SectionTitle>Our Trendy plants</SectionTitle>
      {
        trendyPlants.map((element,index)=>{
          return(
            <div className='flex flex-col items-center px-2 mt-20' key={index}>
              <Plant
              title={element.title}
              desc={element.desc}
              image={element.img}
              price={element.price}
              order={element.order}
              />
            </div>
          )
        })
      }
     </section></div>

 <div className="wrapper bg-[#1A2217]">
       <SectionTitle>Our Top Selling Plants</SectionTitle>
  <section className='space-y-8 py-32 mt-15'>
     <div className='flex flex-wrap gap-y-30 sm:gap-y-40 gap-x-5  justify-center'>
     {
      products.map((plant,index)=>{
        return(
          <React.Fragment key={index}>
          <PlantCard
          plantName={plant.name}
          plantImage={plant.plantImg}
          plantDesc={plant.description}
          plantPrice={plant.price}
          />
          </React.Fragment>
        )
      })
     }
     </div>
     </section>




     {/* Footer */}

     <Footer/>

   </div>

    </div>
  )
}

export default Product;
