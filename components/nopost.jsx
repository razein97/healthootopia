import React from "react";

export default function NoPost() {
  return (
    <div className="h-full w-full flex-1 flex-col  bg-white md:py-6 lg:h-[540px] lg:w-full xl:h-[540px] xl:w-[1080px] 2xl:h-[540px] 2xl:w-[1080px] ">
      <div className="absolute top-1/2   w-full -translate-y-1/2 text-center">
        <p className="font-OpenSans text-lg font-bold text-gray-500">
          No posts found
        </p>
      </div>
    </div>
  );
}
