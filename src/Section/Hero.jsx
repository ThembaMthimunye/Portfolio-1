import React from "react";
import Button from "../Component/Button";
import Photo from "../assets/Pictures/ProfileImg.png";

const Hero = () => {
  return (
    <section className="flex justify-center pl-[30rem] bg-black">
      <div className="">
        <img className="size-[30rem]" src={Photo} alt="" />
      </div>
      <div className="pl-[3rem] mt-[5rem]">
        <h3 className="text-[#f50a0a] font-bold">Hello Im Themba</h3>
        <h1 className="text-3xl text-white font-bold my-3">Tech Enthusiatic</h1>
        <p className="text-gray-400 my-3 max-w-[40rem]">
          I am Nicolas Themba Mthimunye, a Tshwane University of Technology
          graduate with a degree in information technology (industrial
          intelligence systems). I have a high degree of adaptability and find
          it easy to fit in with new people and settings. My ability to think
          analytically well enables me to recognise issues and develop workable
          solutions. My ability to operate successfully and efficiently is
          further enhanced by my proficiency with a variety of computer tools
          and software. I also pick things up quickly and have a constant desire
          to learn new things. I'm sure I can make a big difference in your
          company's expansion and success with my drive for excellence. If given
          the chance, I will put forth endless effort to make sure your company
          meets its targets. I appreciate you taking a look at my
        </p>
        <div className="my-10">
          <Button label="ABOUT ME"></Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
