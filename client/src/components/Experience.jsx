import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../Dummy";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { getAllExperiences } from "../actions/experienceActions";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.duration}
      iconStyle={{ background: experience.companyImg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.companyImg}
            alt={experience.company}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">
          {experience.position}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.details}
        </p>
      </div>

      {/* <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul> */}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllExperiences());
  }, []);

  const { experiences, isLoading } = useSelector((state) => state.experiences);
  if (!experiences.experiences && !isLoading) {
    return "No experiences to show";
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
