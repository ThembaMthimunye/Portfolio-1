// import React from "react";
// import { FaReact } from "react-icons/fa";
// import { FaTools } from "react-icons/fa";
// import icon from "../assets/Pictures/React.jpg";
// import { MdOutlineElectricalServices } from "react-icons/md";

// const SkillsPage = () => {
//   return (
//     <section className="flex gap-8 justify-center mt-[10rem] bg-black ">
//       <div className="mt-20">
//         <h2 className="text-3xl font-bold mb-4">Skills</h2>
//         <p className="text-gray-400">View My Live Hosted Projects.</p>
//       </div>
//       <card className="text-white ">
//         <div className=" border-3  shadow-md border-solid size-[20rem]  place-content-center bg-[#080606] pl-10 pr-10 my-[3rem]">
//           <FaReact className="size-[5rem] text-red-600" />
//           {/* <img className="size-[5rem] " src={icon} alt="" /> */}
//           <h3 className="text-white text-2xl font-bold  my-4">
//             React Developer
//           </h3>
//           <p className="">
//             Developing reusable UI components that can be used across various
//             applications
//           </p>
//         </div>
//       </card>

//       <card className="text-white">
//         <div className=" border-3  shadow-md border-solid size-[20rem]  place-content-center bg-[#080606] pl-10 pr-10 my-[3rem]">
//           <FaTools className="size-[5rem] text-red-600" />
//           {/* <img className="size-[5rem] " src={icon} alt="" /> */}
//           <h3 className="text-white text-2xl font-bold  my-4">
//             Support Technician
//           </h3>
//           <p className="">
//             Support technicians provide a range of IT support services to assist
//             users with issues and repairs.
//           </p>
//         </div>
//       </card>

//       <card className="text-white">
//         <div className=" border-3  shadow-md border-solid size-[20rem]  place-content-center bg-[#080606] pl-10 pr-10 my-[3rem]">
//           {/* <FaReact /> */}
//           <MdOutlineElectricalServices className="size-[5rem] text-red-600" />
//           {/* <img className="size-[5rem] " src={icon} alt="" /> */}
//           <h3 className="text-white text-2xl font-bold  my-4">
//             Electronics Specialist
//           </h3>
//           <p className="">
//             Conducting repairs on electronic devices, including soldering and
//             part replacement of any electronics
//           </p>
//         </div>
//       </card>
//     </section>
//   );
// };

// export default SkillsPage;

import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, FaJava } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  {
    name: 'React',
    icon: <FaReact className="text-blue-600 text-4xl" />,
  },
  {
       name: 'Tailwind',
      icon: <RiTailwindCssFill  className="text-red-600 text-4xl" />,
     },
  {
    name: 'HTML5',
    icon: <FaHtml5 className="text-orange-600 text-4xl" />,
  },
  {
    name: 'CSS3',
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
  },
  // {
  //   name: 'Python',
  //   icon: <FaPython className="text-blue-400 text-4xl" />,
  // },
  // {
  //   name: 'Java',
  //   icon: <FaJava className="text-red-600 text-4xl" />,
  // },
];

const SkillsPage = () => {
  return (
    <section className="bg-black text-white text-center py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">My Skills</h2>
        <p className="text-gray-400 mb-20">Technologies and Tools I am proficient in.</p>
      </div>

      <div className="grid   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-[15rem] ">
        {skills.map((skill, index) => (
          <div key={index} className="bg-[#121111] p-6  rounded-lg shadow-xl flex flex-col items-center">
            <div className="mb-4">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;

