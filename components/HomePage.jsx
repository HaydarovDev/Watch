"use client";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import HomeImg from "../src/assets/homeWatch.png";
import { useTheme } from "./ThemeProvider";

const HomePage = () => {
  const { mode } = useTheme();

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[80%] min-h-[100vh] flex justify-between items-center">
        <div className="w-[40%] items-baseline">
          <h1 className="text-6xl font-bold">Discover Most Suitable Watches</h1>
          <p className="text-[#8B8E99] my-3">
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <label
            htmlFor="click"
            className={`flex w-[60%] items-center justify-between ${
              mode ? "bg-white" : "bg-black"
            } p-2 rounded-[10px]`}
          >
            <CiSearch
              className={`${mode ? "text-[#3858D6]" : "text-white"} mr-2`}
            />
            <input
              type="text"
              id="click"
              className={`${
                mode ? "placeholder:text-[#8B8E99B2]" : "placeholder:text-white"
              } outline-none text-black`}
              placeholder="Find the best brands"
            />
            <button className="bg-[#3858D6] px-3 rounded py-1 text-white">
              Search
            </button>
          </label>
        </div>
        <Image src={HomeImg} alt="" />
      </div>
    </section>
  );
};

export default HomePage;
