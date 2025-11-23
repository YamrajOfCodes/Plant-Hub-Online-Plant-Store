import React, { useState } from "react";
import firstSlideImg from "../../assets/Images/Rose1.png";
import secondSlideImg from "../../assets/Images/Rose2.png";
import thirdSlideImg from "../../assets/Images/Rose.png";
import { ChevronRight } from "lucide-react";

const  TopCoursel =  ()  => {
  const slides = [
    { id: 1, title: "Aglaonema plant", subtitle: "Indoor Plant", img: firstSlideImg },
    { id: 2, title: "Aglaonema plant", subtitle: "Indoor Plant", img: secondSlideImg },
    { id: 3, title: "Aglaonema plant", subtitle: "Indoor Plant", img: thirdSlideImg },
  ];

  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full flex flex-col justify-end max-w-sm card h-2/3 xl:mx-0 p-4 pt-36 bg-white/5 border border-white/20 rounded-2xl text-white overflow-visible">

      <div className="absolute -top-15 left-1/2 -translate-x-1/2 w-72 h-5/6 sm:h-2/3 md:h-5/6 rounded-xl overflow-visible">
        <img
          src={slides[index].img}
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>

      <p className="text-sm opacity-80 lg:text-lg">{slides[index].subtitle}</p>

      <div className="flex justify-between items-center mt-1">
        <p className="text-lg lg:text-3xl">{slides[index].title}</p>

        <button onClick={next} className="cursor-pointer">
          <ChevronRight />
        </button>
      </div>

      <button className="border px-4 w-1/2 py-1 rounded-md text-sm lg:text-lg mt-3">
        Buy Now
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-1 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default TopCoursel;
