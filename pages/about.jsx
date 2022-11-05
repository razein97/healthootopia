import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
import myImg from "../public/images/smrita-singh.png";
import Footer from "../components/footer";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterSquare,
} from "react-icons/ai";
import Meta from "../components/meta";

export default function AboutMe() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex h-screen flex-col justify-between">
      <Meta
        title={"About me"}
        keywords={"about, author, doctor, practitioner, health"}
        description="About the author"
        ogTitle="About the author"
      />
      <Header setMenu={setMenu} menu={menu} />
      <Sidebar padding="pt-14" menu={menu} setMenu={setMenu} />

      <div className="mx-auto my-0 bg-white  lg:w-full  xl:w-[1080px]  2xl:w-[1080px]">
        <div className=" ">
          <div className=" grid p-6 text-center md:grid-flow-col md:bg-gray-50">
            <div className="relative h-80 w-64 justify-self-center md:col-span-1 md:h-[520px] md:w-[400px]">
              <Image
                src={myImg}
                layout="fill"
                objectFit="fill"
                alt="Smrita Singh"
              />
            </div>
            <br />
            <div className="md:h-[500px] md:px-3">
              <h2 className="font-PlayfairDisplay text-4xl">About Me</h2>
              <br />
              <p className="text-justify font-OpenSans text-lg font-light text-[#3b3b3b]">
                I’m Dr. Smrita Singh, a Physician by profession. I want to
                empower people with the knowledge they need through my blog –
                Healthootopia, to lead a happy and healthy life. Everyone can
                find something useful here – from those that have specific
                health conditions to those who wish to simply optimize their
                health and performance.
              </p>
              <br />
              <br />
              <h2 className="font-PlayfairDisplay text-3xl  ">Contact</h2>

              <div className=" flex w-full flex-row items-center justify-center  space-x-3 ">
                <Link href="mailto:healthootopia@gmail.com">
                  <AiFillMail className="h-8 w-8 hover:cursor-pointer" />
                </Link>

                <Link href="https://www.instagram.com/healthootopia/">
                  <AiFillInstagram className="h-8 w-8 hover:cursor-pointer" />
                </Link>

                <Link href="https://twitter.com/Singh_Smrita">
                  <AiFillTwitterSquare className="h-8 w-8 hover:cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
