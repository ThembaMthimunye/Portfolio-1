import React from "react";
import Button from "../Component/Button";
import Photo from "../assets/Pictures/ProfileImg.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const goToCv = () => {
    navigate('/CV');
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-black p-8">
      <div className="flex-shrink-0">
        <img
          className="w-80 h-80 object-cover   shadow-lg"
          src={Photo}
          alt="Profile"
        />
      </div>
      <div className="mt-8 md:mt-0 md:ml-8 text-center md:text-left">
        <h3 className="text-red-500 font-bold text-xl">Hello, I'm Themba</h3>
        <h1 className="text-4xl text-white font-bold my-3">Tech Enthusiast</h1>
        <p className="text-gray-400 my-3 max-w-lg mx-auto md:mx-0">
          I am Nicolas Themba Mthimunye, a Tshwane University of Technology
          graduate with a degree in Information Technology (Industrial
          Intelligence Systems). I am highly adaptable and easily fit into new
          environments. My analytical skills help me identify problems and
          devise effective solutions. Proficient with various computer tools
          and software, I am eager to learn and continually improve. I am
          confident in my ability to contribute to your company's growth and
          success. Thank you for considering my application.
        </p>
        <div className="mt-6">
          <Button onClick={goToCv} label="ABOUT ME" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
