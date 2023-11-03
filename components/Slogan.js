import React from "react";

export default function Slogan() {
  return (
    <div
      className=" w-full py-36 mt-10 flex items-center justify-center gap-5  flex-col"
      style={{ backgroundColor: "#060606" }}
    >
      <p className="font-bold text-white text-4xl ">
        {'"'} Lorem ipsum dolor sit amet consectetur adipisicing elit{'. "'}
      </p>
      <p className=" text-white text-2xl "> -Lorem ipsum</p>
    </div>
  );
}
