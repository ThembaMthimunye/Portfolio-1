import React from "react";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";


const Banner = () => {
  const navigate = useNavigate();
  const goToContact = () => {
    navigate('/Contact');
  };
  return (
    <section className="bg-[#121111] py-12 ">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        <div className="text-center lg:text-left lg:w-2/3">
          <h1 className="text-3xl lg:text-4xl text-white font-bold mb-4">
            Let's Work Together on Your Next Project
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
            Thank you for looking at my work and abilities. Please do not
            hesitate to contact me if you require assistance with any tasks. 
            Working together fosters collaboration and success.
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/3 flex justify-center lg:justify-end">
          <Button onClick={goToContact} label="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
