import React from 'react';
import Logo from "../../assets/Images/Logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   
    <footer className="flex lg:h-[30vh] flex-col md:flex-row w-full justify-between py-10 px-4 mt-36 gap-10 md:pl-20">
  {/* Column 1 */}
  <div className="flex flex-col md:w-1/3 justify-between">
    <div className="space-y-3">
    <Link to={"/"}>
        <img src={Logo} alt="brand logo" className="w-4/12 md:w-1/2" />
    </Link>
      <p className="text-sm xl:text-lg">
        From lush indoor greens to vibrant outdoor blooms, our plants are crafted to
        thrive and elevate your living environment.
      </p>
    </div>

    <div className="flex space-x-3 font-bold">
      <span>FB</span>
      <span>TW</span>
      <span>LI</span>
    </div>
  </div>

  {/* Column 2 */}
  <div className="md:w-1/3 space-y-3">
    <h4 className="font-bold text-start md:text-center xl:text-xl">Quick Links</h4>
    <ul className="flex flex-col gap-2 text-sm xl:text-lg items-start md:items-center" style={{fontFamily:"Inter",textDecoration:'underline'}}>
      <li className='cta-links'><Link to={"/"}>Home</Link></li>
      <li className='cta-links'><Link to={"/product"}>Plant Type</Link></li>
      <li className='cta-links'><Link to={"/product"}>More</Link></li>
      <li className='cta-links'><Link>Contact</Link></li>
    </ul>
  </div>

  {/* Column 3 */}
  <div className="flex flex-col justify-between md:w-1/3 space-y-4">
    <div className="space-y-3 flex flex-col">
      <h4 className="font-bold xl:text-xl">For Every Update.</h4>
      <div className="flex w-full gap-2">
        <input
          type="text"
          placeholder="Email"
          className="px-4 py-2 border rounded-md w-2/3 md:w-full z-10"
        />
        <button className="px-3 py-1 bg-white text-black border rounded-xl relative -left-28">
          Subscribe
        </button>
      </div>
    </div>

    <div className="text-sm">
      FloraVision © All rights reserved
    </div>
  </div>
</footer>
  )
}

export default Footer
