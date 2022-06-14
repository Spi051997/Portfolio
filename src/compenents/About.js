import React from "react";
// import {BiRightArrowAlt } from "react-icons/bi";
// import {Link} from 'react-scroll'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        <p className="text-md mt-1  px-1  ">
          I'm Shubham. A Software Engineer loves to design and build Web
          apps. I graduated from Savitribai Phule Pune University after
          completing a bachelor of engineering in information technology in
          2019,currently working in Pune.
        </p>

        <br />
        <p className="text-mt-1  px-1  ">
          I have 2 years of experience and established myself as a full-stack
          developer. I am passionate about design and creating things that have
          a purpose and solve real problems.
        </p>
        <br />
        <p className="text-mt-1  px-1  ">
          I am an outdoor sports lover, getting into fitness activity, enjoy
          cooking and have a great liking for movies & series.
        </p>
        {/* <div>
            <a
              // to="portfolio"'
               href="resume.pdf"
               download={true}
              target="_blank"
              rel="noreferrer"
              className="group text-white w-fit px-4 py-1.5 my-6.5 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer md:hidden "
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <BiRightArrowAlt size={25} className="ml-1" />
              </span>
            </a>
          </div> */}

      </div>
    </div>
  );
};

export default About;
