import Image from "next/image";
import watch from "../src/assets/watch.png";

const SendEmail = () => {
  return (
    <article className="w-full flex justify-center items-center">
      <main className="bg-[#F6F6F6] w-[80%] flex py-5 justify-between px-15 mt-10 rounded-2xl items-center">
        <div>
          <h1 className="text-2xl font-bold">Subscribe To Newsletter</h1>
          <p className="text-[#8B8E99] mb-3">
            Get free guide about smart watches daily.
          </p>
          <label htmlFor="" className="bg-white rounded p-2">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="placeholder:text-[#8B8E99B2]"
            />
            <button className="bg-[#3858D6] px-5 py-1 text-white rounded">
              Subscribe
            </button>
          </label>
        </div>
        <Image src={watch} alt="" />
      </main>
    </article>
  );
};

export default SendEmail;
