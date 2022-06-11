import React from 'react'
import css from '../assets/css.png'
import firbase from '../assets/Firebase.png'
import html from '../assets/html.png'
import  javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import mongo from '../assets/mongodb.png'
import tailwindcss from '../assets/tailwind.png'
import github from '../assets/github.png'


const Expirence = () => {
    const skiils=[
        {
            id:1,
            skill:html,
            title:'HTML',
            style:'shadow-orange-500'
            
        },
        {
            id:2,
            skill:css,
            title:'CSS',
            style:'shadow-blue-500'
            
        },
        {
            id:3,
            skill:javascript,
            title:'Javascript',
            style:'shadow-yellow-500'
            
        },
        {
            id:4,
            skill:node,
            title:'Node',
            style:'shadow-lime-900'
            
        },
        {
            id:5,
            skill:react,
            title:'React',
            style:'shadow-cyan-500'
            
        },
        {
            id:6,
            skill:mongo,
            title:'MongoDB',
            style:'shadow-green-500'
            
        },
        {
            id:8,
            skill:tailwindcss,
            title:'Tailwindcss',
            style:'shadow-sky-500'
            
        },{
            id:9,
            skill:github,
            title:'Github',
            style:'shadow-white'
            
        },
        {
            id:10,
            skill:firbase,
            title:'Firbase',
            style:'shadow-yellow-400'
            
        },
       
    ]
  return (
    <div
    name="skills"
    className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-8 "
  >
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-20">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Skills
        </p>
        <p className="py-6">These are the technologies I've worked with</p>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {skiils.map(({ id, skill, title, style }) => (
          <div
            key={id}
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
          >
            <img src={skill} alt="" className="w-20 mx-auto" />
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Expirence