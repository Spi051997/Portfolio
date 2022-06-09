import { useState } from "react";
import { FaBars } from "react-icons/fa";
function Nav() {

    const [Nav,setNav]=useState(false)
  const link = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "expirence",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed text-3xl  px-4">
      {/* <FaBars /> */}
      <h1 className="text-5xl font-signature ml-2 ">Shubham </h1>
      <ul className="hidden md:flex">
        {/* <li className='px-4 cursor-pointer capitalize font-medium  text-gray-400 hover:scale-105 duration-300'>home</li> */}
        {link.map(({ id, link }) => (
          <div>
            <li
              className=" text-xl px-4 cursor-pointer capitalize font-medium  text-gray-400 hover:scale-105 duration-300"
              key={id}
            >
              {link}
            </li>
          </div>
        ))}
      </ul>
      <div className="cursor-pointer text-gray-400  pr-4 z-10">
          <FaBars size={30} />
      </div>
    </div>
  );
}

export default Nav;
