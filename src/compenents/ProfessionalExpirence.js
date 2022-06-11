import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import WorkIcon from '@mui/icons-material/Work';
// import SchoolIcon from '@mui/icons-material/School';

const ProfessionalExpirence = () => {
  return (
    <div
      name="expirence"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-20">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
        </div>

        <div className="w-full text-black  ">
          <VerticalTimeline lineColor="white">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "white" }}
              //   icon={<WorkIcon />}
            >
                <div className="text-black">
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalExpirence;
