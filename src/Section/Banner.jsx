import React from "react";
import Button from "../Component/Button";

const Banner = () => {
  return (
    <section>
      <div className="bg-[#121111] w-[70rem] h-[15rem] mx-auto flex">
        <div className="p-6">
          <h1 className="text-3xl text-white font-bold max-w-[30rem] ">
            Lets work together on your next project
          </h1>
          <p className="my-3 text-gray-600 max-w-[50rem]">
            Thank you for looking at my work and ability. Please do not hesitate
            to contact us if you require assistance with any tasks. Working
            together promotes togetherness.
          </p>
        </div>
        <div className="my-[7rem]">
          <Button label="Contact"></Button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
