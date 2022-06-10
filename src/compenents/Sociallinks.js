import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Sociallinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
         Linkdin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/login",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
         GitHub <FaGithub  size={30} />
        </>
      ),
      href: "https://github.com/Spi051997",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
         Gmail  <SiGmail  size={30}  />
        </>
      ),
      href: "https://mail.google.com/mail",
      style: "rounded-tr-md",
    }
    ,{
      id: 4,
      child: (
        <>
         Resume <BsFillPersonLinesFill   size={30} />
        </>
      ),
      href: "/https://drive.google.com/file/d/1ALuFvdZ2_L4NEkKiTbvZl3utI7fCSuni/view?usp=sharing",
      style: "rounded-tr-md",
      download:true
    }
    
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {
         links.map(({id,style,href,child,download})=>(
          <li  
             id={id}
          className={
            "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
            " " +
            style
          } >
          <a
            href={href}
            download={download}
            className="flex justify-between item-center w-full text-white text-xl "
            target="_blank"
            rel="noreferrer"
          >
           {child} 
          </a>
        </li>
           
         ))
        }
        
      </ul>
    </div>
  );
};

export default Sociallinks;
