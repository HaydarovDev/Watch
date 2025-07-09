import React from "react";
import { IoMdWatch } from "react-icons/io";

const Category = () => {
  return (
    <article className="w-full flex justify-center items-center">
      <div className="flex w-[80%] justify-between items-center gap-3">
        <div className="w-[30%] py-5 flex items-center bg-[#F6F6F6] rounded-2xl">
          <IoMdWatch className="text-9xl" />
          <div>
            <h1 className="text-2xl font-bold">Apple</h1>
            <p>
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
        <div className="w-[30%] py-5 flex items-center bg-[#F6F6F6] rounded-2xl">
          <IoMdWatch className="text-9xl" />
          <div>
            <h1 className="text-2xl font-bold">Xiaomi</h1>
            <p>
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
        <div className="w-[30%] py-5 flex items-center bg-[#F6F6F6] rounded-2xl">
          <IoMdWatch className="text-9xl" />
          <div>
            <h1 className="text-2xl font-bold">FitBit</h1>
            <p>
              Apple is one of the most famous smart watches providing company.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Category;
