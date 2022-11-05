import React, { useState } from "react";
import Sidebar from "../components/sidebar.jsx";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";
import Meta from "../components/meta.jsx";

export default function Disclaimer() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex  min-h-screen w-full flex-col">
      <Meta
        title={"Disclaimer"}
        keywords={"diclaimer, notice"}
        description="Disclaimer of the website"
        ogTitle="Disclaimer"
      />

      <Header setMenu={setMenu} menu={menu} />
      <Sidebar padding="pt-14" menu={menu} setMenu={setMenu} />

      <div className="mx-auto my-0 lg:w-full xl:w-[1080px]  2xl:w-[1080px]">
        <div className="privacy-policy grid gap-4 p-6">
          <h1 className="text-center font-PlayfairDisplay text-3xl md:text-5xl">
            Disclaimer
          </h1>
          <h2 className=" font-PlayfairDisplay text-2xl md:text-4xl">
            No Medical Advice
          </h2>
          <p className=" text-justify font-OpenSans text-base font-light md:text-lg">
            Healthootopia does not offer medical advice. Any content accessed
            through healthootopia.com is for informational purposes only, and is
            not intended to cover or otherwise be used as a substitute for the
            diagnosis or treatment of any medical condition. Information
            provided on healthootopia.com should not be used during a medical
            emergency. Please consult your doctor or other qualified health care
            provider if you have any questions about a medical condition,
            changing your diet or commencing or discontinuing any course of
            treatment. Do not ignore or delay obtaining professional medical
            advice because of information accessed through or otherwise obtained
            from or on behalf of Healthootopia.
          </p>
          <h3 className="text-center font-OpenSans text-2xl font-extrabold md:text-3xl">
            CALL 911 OR YOUR DOCTOR FOR ALL MEDICAL EMERGENCIES.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}
