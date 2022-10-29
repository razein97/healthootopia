import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 right-0 h-12  w-full bg-gray-50  ">
      <div className=" mx-auto list-item flex-col gap-1 md:flex  md:flex-row md:justify-between  md:p-4 lg:w-full xl:w-[1080px]  2xl:w-[1080px]">
        <p className="  text-center text-xs font-light md:justify-start">
          Copyright © {new Date().getFullYear()} Smrita Singh | Healthootopia,
          All Rights Reserved
        </p>

        <div className="flex flex-row justify-center gap-x-3 md:justify-end">
          <Link href="/privacy-policy">
            <button className="text-xs ">Privacy Policy</button>
          </Link>

          <Link href="/terms">
            <button className="text-xs">Terms</button>
          </Link>

          <Link href="/disclaimer">
            <button className="text-xs">Disclaimer</button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
