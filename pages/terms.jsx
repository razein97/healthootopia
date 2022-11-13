import React, { useState } from "react";
import { useRouter } from "next/router.js";
import Sidebar from "../components/sidebar.jsx";
import Footer from "../components/footer.jsx";
import Header from "../components/header.jsx";
import Meta from "../components/meta.jsx";

export default function Terms() {
  const [menu, setMenu] = useState(false);
  const router = useRouter();
  const canonicalUrl = (
    `https://healthootopia.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  return (
    <div>
      <Meta
        title={"Terms and Conditions"}
        keywords={"terms, conditions"}
        description="Healthootpia terms and conditions"
        ogTitle="Healthootopia Terms and Conditions"
        canonicalURL={canonicalUrl}
      />
      <Header setMenu={setMenu} menu={menu} />
      <Sidebar padding="pt-14" menu={menu} setMenu={setMenu} />

      <div className="mx-auto my-0 lg:w-full xl:w-[1080px]  2xl:w-[1080px]">
        <div className="privacy-policy grid gap-4 p-6">
          <h1 className="text-center font-PlayfairDisplay text-3xl md:text-5xl">
            Terms of Service
          </h1>
          <h2 className=" font-PlayfairDisplay text-2xl md:text-4xl">
            1. Terms
          </h2>
          <p className=" text-justify font-OpenSans text-base font-light md:text-lg">
            By accessing the website at https://healthootopia.com, you are
            agreeing to be bound by these terms of service, all applicable laws
            and regulations, and agree that you are responsible for compliance
            with any applicable local laws. If you do not agree with any of
            these terms, you are prohibited from using or accessing this site.
            The materials contained in this website are protected by applicable
            copyright and trademark law.
          </p>
          <h2 className=" font-PlayfairDisplay text-2xl md:text-4xl ">
            2. Use license
          </h2>
          <ol className="list-[upper-roman] pl-4 font-OpenSans text-base font-light md:text-lg">
            <li>
              (information or software) on Healthootopia’s website for personal,
              non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may
              not:
              <ol className="list-[lower-roman] pl-6">
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on Healthootopia’s website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or “mirror” the
                  materials on any other server.
                </li>
              </ol>
            </li>
            <li>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by Healthootopia at any
              time. Upon terminating your viewing of these materials or upon the
              termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </li>
          </ol>
          <h2 className=" font-PlayfairDisplay text-2xl md:text-4xl ">
            3. Disclaimer
          </h2>
          <ol className="list-[upper-roman] pl-4 font-OpenSans text-base font-light md:text-lg">
            <li>
              The materials on Healthootopia’s website are provided on an ‘as
              is’ basis. Healthootopia makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </li>
            <li>
              Further, Healthootopia does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </li>
          </ol>
          <h2 className=" font-PlayfairDisplay text-2xl md:text-4xl ">
            4. Limitations
          </h2>
          <p className="text-justify font-OpenSans text-base font-light md:text-lg">
            In no event shall Healthootopia or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on Healthootopia’s website, even if
            Healthootopia or a Healthootopia authorized representative has been
            notified orally or in writing of the possibility of such damage.
            Because some jurisdictions do not allow limitations on implied
            warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.
          </p>
          <h2 className=" font-PlayfairDisplay text-2xl md:text-4xl ">
            5. Accuracy of materials
          </h2>
          <p className="text-justify font-OpenSans text-base font-light md:text-lg">
            The materials appearing on Healthootopia’s website could include
            technical, typographical, or photographic errors. Healthootopia does
            not warrant that any of the materials on its website are accurate,
            complete or current. Healthootopia may make changes to the materials
            contained on its website at any time without notice. However,
            Healthootopia does not make any commitment to update the materials.
          </p>
          <h2 className=" font-PlayfairDisplay text-2xl md:text-4xl ">
            6. Links
          </h2>{" "}
          <p className="text-justify font-OpenSans text-base font-light md:text-lg">
            Healthootopia has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by
            Healthootopia of the site. Use of any such linked website is at the
            user’s own risk.
          </p>
          <h2 className=" font-PlayfairDisplay text-2xl md:text-4xl ">
            7. Modifications
          </h2>
          <p className="text-justify font-OpenSans text-base font-light md:text-lg">
            Healthootopia may revise these terms of service for its website at
            any time without notice. By using this website you are agreeing to
            be bound by the then current version of these terms of service.
          </p>
          <h2 className=" font-PlayfairDisplay text-2xl md:text-4xl ">
            8. Governing law
          </h2>
          <p className="text-justify font-OpenSans text-base font-light md:text-lg">
            These terms and conditions are governed by and construed in
            accordance with the laws of India and you irrevocably submit to the
            exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
