import React from "react";
import img1 from "../src/assets/user.png";
import img2 from "../src/assets/user1.png";
import Image from "next/image";

const About = () => {
  return (
    <article className="my-3 w-full flex flex-col justify-center items-center">
      <h3 className="text-[#3858D6] text-center">
        Here are our some of the best clients.
      </h3>
      <h1 className="text-2xl font-bold my-2 text-center">
        What People Say About Us
      </h1>
      <div className="w-[80%] flex justify-center items-center gap-10 mt-5">
        <div className="flex  items-center gap-3 bg-[#F6F6F6] p-3 rounded">
          <Image src={img1} alt="" />
          <div>
            <h3 className="text-2xl font-bold">Hafiz Huzaifa</h3>
            <p className="text-[#8B8E99]">
              Dont waste time, just order! This is the best website to puschase
              smart watches.
            </p>
          </div>
        </div>
        <div className="flex  items-center gap-3 bg-[#F6F6F6] p-3 rounded">
          <Image src={img2} alt="" />
          <div>
            <h3 className="text-2xl font-bold">Hamza Faizi</h3>
            <p className="text-[#8B8E99]">
              Dont waste time, just order! This is the best website to puschase
              smart watches.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default About;
