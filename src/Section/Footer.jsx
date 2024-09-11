import React from "react";
import logo from "../assets/Pictures/SouthAfrica.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <div className="flex justify-center  font-serif font-bold  text-white bg-black mt-20 ">
        <div>
          <img className="size-[3rem] bg-cover" src={logo} alt=""  />
        </div>
        <FaGithub className="text-red-500 text-2xl my-3 ml-10" />
        <FaTwitterSquare className="text-red-500  text-2xl my-3 ml-10" />
        <FaFacebook className="text-red-500  text-2xl my-3 ml-10" />
      </div>
    </section>
  );
};

export default Footer;
