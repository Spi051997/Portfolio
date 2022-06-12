import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaSuitcase, FaGraduationCap } from "react-icons/fa";

// import {telements} from './Expirencetimelineelements'
// import WorkIcon from '@mui/icons-material/Work';
// import SchoolIcon from '@mui/icons-material/School';

const ProfessionalExpirence = () => {
  const telements = [
    {
      id: 1,
      title: "Software Engineer",
      location: "Thane,Maharastra",
      task: " Working as full stack developer for Healthcare Clients ",
      icon: (
        <>
          <FaSuitcase size={24} />
        </>
      ),
    },
    {
      id: 2,
      title: "App Developer Intern",
      location: "Pune,Maharastra",
      task: " Worked as Mobile app  developer  ",
      icon: (
        <>
          <FaSuitcase size={24} />
        </>
      ),
    },
    {
      id: 3,
      title: "App Developer Intern",
      location: "Pune,Maharastra",
      task: " Worked as Mobile app  developer  ",
      icon: (
        <>
          <FaSuitcase size={24} />
        </>
      ),
    },
  ];

  return (
    <div
      name="expirence"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-28 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Expirence
          </p>
        </div>

        <div>
          <VerticalTimeline>
            {telements.map(({ id, title, location, task, icon }) => (
             <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: '' }}
             contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
             date="2011 - present"
             iconStyle={{ background: 'rgb(0 0 0)' }}
             icon={icon}
           >
             <h3 className="vertical-timeline-element-title text-black font-bold font">{title}</h3>
             <h4 className="vertical-timeline-element-subtitle text-black">{location}</h4>
             <p>
               Creative Direction, User Experience, Visual Design, Project Management, Team Leading
             </p>
           </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExpirence;
