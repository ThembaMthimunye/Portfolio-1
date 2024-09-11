import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/Pictures/1.png";
import img2 from "../assets/Pictures/2.png";
import img3 from "../assets/Pictures/3.png";
import img4 from "../assets/Pictures/4.png";

const Projects = () => {
  return (
    <section className="bg-black text-white text-center py-20">
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400">View My Live Hosted Projects.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 p-[10rem]">
        <div className="bg-[#121111] p-5 rounded-lg shadow-xl mb-10">
          <img
            className="w-full h-full object-cover rounded-md mb-4"
            src={img1}
            alt="Dronotiz Website"
          />
          <h3 className="text-xl font-bold mb-2">Dronotiz Website</h3>
          <a
            href="https://dronoticz-website.vercel.app/"
            className="text-red-500 font-bold flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE WEBSITE
            <FaArrowRight className="text-red-600" />
          </a>
        </div>

        <div className="bg-[#121111] p-5 rounded-lg shadow-xl mb-10">
          <img
            className="w-full h-full object-fit rounded-md mb-4"
            src={img2}
            alt="TMDB Movies Website"
          />
          <h3 className="text-xl font-bold mb-2">TMDB Movies Website</h3>
          <a
            href="https://final-movies.vercel.app/"
            className="text-red-500 font-bold flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE WEBSITE
            <FaArrowRight className="text-red-600" />
          </a>
        </div>

        <div className="bg-[#121111] p-5 rounded-lg shadow-xl">
          <img
            className="w-full h-full object-fit rounded-md mb-4"
            src={img3}
            alt="Leihlo-La-Sechaba Website"
          />
          <h3 className="text-xl font-bold mb-2">Leihlo-La-Sechaba Website</h3>
          <a
            href="https://fighting-crime-main.vercel.app/"
            className="text-red-500 font-bold flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE WEBSITE
            <FaArrowRight className="text-red-600" />
          </a>
        </div>

        <div className="bg-[#121111] p-5 rounded-lg shadow-xl">
          <img
            className="w-full h-full object-cover rounded-md mb-4"
            src={img4}
            alt="Akram Studio Website"
          />
          <h3 className="text-xl font-bold mb-2">Akram Studio Website</h3>
          <a
            href="https://akram-clone-final.vercel.app/"
            className="text-red-500 font-bold flex items-center justify-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            LIVE WEBSITE
            <FaArrowRight className="text-red-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
