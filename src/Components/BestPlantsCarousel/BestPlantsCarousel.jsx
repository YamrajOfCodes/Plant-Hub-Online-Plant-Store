import { useState } from "react";
import FirstPlant from "../../assets/Images/Rose1.png";
import secondPlant from "../../assets/Images/Rose2.png";
import thirdPlant from "../../assets/Images/Rose.png";
import { NavLink } from "react-router-dom";

const BestPlantsCarousel = () => {

  const slides = [
    {
      img: secondPlant,
      heading: "We Have Small And Best O2 Plants Collection’s",
      desc: `Oxygen-producing plants, often referred to as are those that release oxygen into the atmosphere through the process of photosynthesis. Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene, This makes the air cleaner and healthier to breathe.`
    },
    {
      img: FirstPlant,
     heading: "We Have Small And Best O2 Plants Collection’s",
      desc: `Oxygen-producing plants, often referred to as are those that release oxygen into the atmosphere through the process of photosynthesis. Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene, This makes the air cleaner and healthier to breathe.`
    },
    {
      img: thirdPlant,
      heading: "We Have Small And Best O2 Plants Collection’s",
      desc: `Oxygen-producing plants, often referred to as are those that release oxygen into the atmosphere through the process of photosynthesis. Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene, This makes the air cleaner and healthier to breathe.`
    },
     {
      img: FirstPlant,
      heading: "We Have Small And Best O2 Plants Collection’s",
      desc: `Oxygen-producing plants, often referred to as are those that release oxygen into the atmosphere through the process of photosynthesis. Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene, This makes the air cleaner and healthier to breathe.`
    }
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-3xl xl:max-w-5xl mx-auto rounded-4xl backdrop-blur-md  bg-white/5  border-white/20">
      <div className="relative h-[26rem] w-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full  h-full transition-opacity duration-500 md:flex md:justify-between md:items-center
              ${idx === current ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.img}
           className="w-[50%] h-[40%] md:w-[30%] md:h-[50%]  scale-110 md:scale-150 lg:w-[30%] -translate-y-5 md:-translate-y-20 transition-all duration-500 mx-auto"
            />

            <div className="p-4 space-y-2 w-[100%] md:w-[45%]">
              <h2 className="text-lg lg:text-2xl font-semibold">{slide.heading}</h2>
             {slide.desc.split('. ').map((part, i) => (
                 <p key={i} className="text-sm md:text-base mb-3">
                            {part.trim()}.
                             </p>
                  ))}

              <div className="flex justify-between items-center mt-3 hover:bg-white/10">
                <button className="border px-4 py-2 rounded-md md:px-10 md:py-3  text-sm lg:text-md hover:bg-white/10"><NavLink to={"/product"}>Explore</NavLink></button>

                <div className="flex items-center gap-4">
                  <span onClick={prev} className="cursor-pointer">{`<`}</span>
                  <span> <span className="text-xl">0{current + 1}</span> / <span className="text-sm">0{slides.length}</span> </span>
                  <span onClick={next} className="cursor-pointer">{`>`}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute  -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? "bg-white" : "bg-white/40"}`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default BestPlantsCarousel
