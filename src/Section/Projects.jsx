import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Component/Button";
import img1 from "../assets/Pictures/1.png";
import img2 from "../assets/Pictures/2.png";
import img3 from "../assets/Pictures/3.png";
import img4 from "../assets/Pictures/4.png";

const Projects = () => {
  return (
    <section className="bg-black text-white text-center">
      <div className="">
        <h2 className="text-3xl text-white font-bold mt-20">
          Featured Projects
        </h2>
        <p className="my-5">View My Live Hosted Projects.</p>
      </div>

      <div className=" grid grid-cols-2 gap-10 p-10 ">
        <div className="shadow-xl  bg-[#121111]">
          <img
            className="w-[50rem] h-[30rem] object-fit mx-auto p-20"
            src={img1}
            alt=""
          />
          <h3 className="text-xl font-bold">Dronotiz Website</h3>
          <div className="flex justify-center ">
            <a  href="https://dronoticz-website.vercel.app/"  className="text-red-500 font-bold ">LIVE WEBSITE</a>
            <FaArrowRight className="text-red-600  ml-5 mt-[5px] mb-10" />
          </div>
        </div>

        <div className="shadow-xl  bg-[#121111]">
          <img
            className="w-[50rem] h-[30rem] object-fit mx-auto p-20"
            src={img2}
            alt=""
          />
          <h3 className="text-xl font-bold"> TMDB Movies Website</h3>
          <div className="flex justify-center">
            <a  href="https://final-movies.vercel.app/" className="text-red-500 font-bold">LIVE WEBSITE</a>
            <FaArrowRight className="text-red-600  ml-5 mt-[5px] mb-10" />
          </div>
        </div>
        <div className="shadow-xl  bg-[#121111]">
          <img
            className="w-[50rem] h-[30rem] object-fit mx-auto p-20"
            src={img3}
            alt=""
          />
          <h3 className="text-xl font-bold">Leihlo-La-Sechaba Website</h3>
          <div className="flex justify-center">
            <a href="https://fighting-crime-main.vercel.app/" className="text-red-500 font-bold">LIVE WEBSITE</a>
            <FaArrowRight className="text-red-600  ml-5 mt-[5px] mb-10" />
          </div>
        </div>
        <div className="shadow-xl  bg-[#121111]">
          <img
            className="w-[50rem] h-[30rem] object-fit mx-auto p-20"
            src={img4}
            alt=""
          />
          <h3 className="text-xl font-bold">Akram Studio Website</h3>
          <div className="flex justify-center">
            <a href="https://akram-clone-final.vercel.app/" className="text-red-500 font-bold">LIVE WEBSITE</a>
            <FaArrowRight className="text-red-600  ml-5 mt-[5px] mb-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
