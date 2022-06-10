import React from "react";
// import { useNavigate } from "react-router-dom"
import arr from "../assets/portfolio/Inshorts.png"
// import ar from "../assets/portfolio/arrayDestruct.jpg"
// import a from "../assets/portfolio/arrayDestruct.jpg"

const Portfolio = (props) => {

    
    const portfolio=[
        {
            id:1,
            src:arr,
            Demo:'https://main--react-inshorts-cone.netlify.app/',
            code:'https://github.com/Spi051997/Portfolio'
            
        },
        {
            id:2,
            src:arr,
            click:'https://main--react-inshorts-cone.netlify.app/',
            code:'https://github.com/Spi051997/Portfolio'
        },
        {
            id:3,
            src:arr,
            click:'https://main--react-inshorts-cone.netlify.app/',
            code:'https://github.com/Spi051997/Portfolio'
        },
        {
            id:4,
            src:arr,
            click:'https://main--react-inshorts-cone.netlify.app/',
            code:'https://github.com/Spi051997/Portfolio'
        }
    ]
  return(
    <div
    name="portfolio"
    className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Projects
        </p>
        <p className="py-6">Check out some of my work right here</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {portfolio.map(({ id, src,Demo,code }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img
              src={src}
              alt=""
              className="rounded-md duration-200 hover:scale-105"
            />
            <div className="flex items-center justify-center">
               
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105
              " href={Demo}
              target="_blank"
              rel="noreferrer">
                Demo
              </a>
             
              <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
           href={code}
           target="_blank" 
           rel="noreferrer">
               Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
};

export default Portfolio;
