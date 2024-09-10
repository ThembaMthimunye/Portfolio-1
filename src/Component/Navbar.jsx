import React from "react";
import logo from "../assets/Pictures/SouthAfrica.jpg";

const Navbar = () => {
  return (
    <section>
      <div className="flex justify-around  font-serif font-bold p-10 text-white bg-black">
        <div>
          <img className="size-[5rem] bg-cover" src={logo} alt="" />
        </div>

        <a href="">HOME</a>
        <a href="">PROJECT</a>
        <a href="">ABOUT</a>
        <a href="">CONTACT</a>
      </div>
    </section>
  );
};

export default Navbar;
