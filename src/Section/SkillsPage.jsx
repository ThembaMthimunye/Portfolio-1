import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import icon from "../assets/Pictures/React.jpg"
import { MdOutlineElectricalServices } from "react-icons/md";

const SkillsPage = () => {
  return (
    <section className="flex gap-8 justify-center  bg-[#2a2e2b] ">
      <card className="text-white ">
        <div className=' border-3  shadow-md border-solid size-[20rem]  place-content-center bg-[#080606] pl-10 pr-10 my-[3rem]'>
          <FaReact className='size-[5rem] text-red-600'/>
          {/* <img className="size-[5rem] " src={icon} alt="" /> */}
          <h3 className="text-white text-2xl font-bold  my-4">React Developer</h3>
          <p className="">
          Developing reusable UI components that can be used across various applications
          </p>
          <p className="my-5">Know More</p>
        </div>
      </card>

      <card className="text-white">
        <div className=' border-3  shadow-md border-solid size-[20rem]  place-content-center bg-[#080606] pl-10 pr-10 my-[3rem]'>
          <FaTools  className='size-[5rem] text-red-600'/>
          {/* <img className="size-[5rem] " src={icon} alt="" /> */}
          <h3 className="text-white text-2xl font-bold  my-4">Support Technician</h3>
          <p className="">
          Support technicians provide a range of IT support services to assist users with issues and repairs.
          </p>
          <p className="my-5">Know More</p>
        </div>
      </card>

      <card className="text-white">
        <div className=' border-3  shadow-md border-solid size-[20rem]  place-content-center bg-[#080606] pl-10 pr-10 my-[3rem]'>
          {/* <FaReact /> */}
          <MdOutlineElectricalServices className='size-[5rem] text-red-600'/>
          {/* <img className="size-[5rem] " src={icon} alt="" /> */}
          <h3 className="text-white text-2xl font-bold  my-4">Electronics Specialist</h3>
          <p className="">
          Conducting repairs on electronic devices, including soldering and part replacement of any electronics
          </p>
          <p className="my-5">Know More</p>
        </div>
      </card>
    </section>
  )
}

export default SkillsPage
