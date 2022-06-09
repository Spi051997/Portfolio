import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
function Nav() {
  const [Nav, setNav] = useState(false);
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
      <h1 className="text-5xl font-signature ml-2 ">Shubham</h1>
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
      <div
        onClick={() => setNav(!Nav)}
        className="cursor-pointer text-gray-400  pr-4 z-10 md:hidden"
      >
        {/* <FaBars size={30} /> */}
        {Nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      { Nav &&(

<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
{/* <li className="px-4 cursor-pointer capitalize py-6 text-4xl">Home</li> */}

    {link.map(({ id, link }) => (
        <div>
          <li
            className="px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
            key={id}
          >
            {link}
          </li>
        </div>
      ))}



</ul>

      )
      

      }
      
    </div>
  );
}

export default Nav;
