import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import DropdownButton from "./dropdownButton";
import logo from "../public/images/logo.webp";
import React, { useRef, useState, useEffect } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import { useRouter } from "next/router";
import { preventDefault } from "../utils";

function Header(props) {
  const router = useRouter();
  const [viewSearchBar, setViewSearchBar] = useState(false);
  const [query, setQuery] = useState("");

  const handleParam = (setValue) => (e) => setValue(e.target.value);
  const handleSubmit = preventDefault(() => {
    if (query.length > 0) {
      setQuery = "";
      router.push({
        pathname: "/search",
        query: { q: query },
      });
      setViewSearchBar(!viewSearchBar);
    }
  });

  const ref = useRef(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!viewSearchBar) return;
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setViewSearchBar(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [viewSearchBar]);

  return (
    <header ref={ref}>
      <div className="sticky top-0 z-30  h-14	 w-full  bg-white p-2 drop-shadow  ">
        <div
          className={` m-auto  h-full flex-row items-center lg:w-full xl:w-[1080px]  2xl:w-[1080px] ${
            viewSearchBar ? "hidden" : "flex"
          }`}
        >
          <div className=" flex flex-row items-center  md:w-1/3 ">
            <Link href="/">
              <div className="relative  h-10 w-10 cursor-pointer opacity-75 transition hover:opacity-100 md:h-10 md:w-10">
                <Image
                  src={logo}
                  layout="fill"
                  objectFit="contain"
                  alt="logo"
                />
              </div>
            </Link>

            <div className="flex flex-col justify-center">
              <Link href="/">
                <p className="pl-2 font-Sofia text-lg hover:cursor-pointer md:text-xl">
                  Healthootopia
                </p>
              </Link>
              <Link href="/">
                <p className="pl-2 font-OpenSans text-xs hover:cursor-pointer  md:text-xs">
                  Learn . Nurture . Love
                </p>
              </Link>
            </div>
          </div>
          <span className="flex flex-auto" />

          <div className="hidden justify-center space-x-1 md:flex">
            <DropdownButton />
            <Link href="/about">
              <button className="inline-flex items-center  py-2 px-4 font-OpenSans font-semibold text-gray-700">
                <span className="mr-1 hover:text-gray-900">About Me</span>
              </button>
            </Link>

            <button
              onClick={() => {
                setViewSearchBar(!viewSearchBar);
              }}
              className=" items-center px-4 "
            >
              <BiSearchAlt2 className="mr-1 h-full w-full hover:text-gray-900" />
            </button>
          </div>

          {/* hidden for big screen */}
          <button onClick={() => props.setMenu(!props.menu)}>
            {props.menu ? (
              <GrFormClose className="headerIcon border border-gray-700 md:hidden" />
            ) : (
              <FiMenu className="headerIcon md:hidden" />
            )}
          </button>
        </div>

        {/* searchBar */}
        <div
          className={` m-auto  h-full flex-row items-center lg:w-full xl:w-[1080px]  2xl:w-[1080px] ${
            viewSearchBar ? "flex" : "hidden"
          }`}
        >
          <form
            className="inline-flex h-16 w-full items-center py-2"
            onSubmit={handleSubmit}
          >
            <button type="submit">
              <BiSearchAlt2 className=" h-6 w-6" />
            </button>
            <input
              autoFocus="true"
              value={query}
              onChange={handleParam(setQuery)}
              placeholder="Search"
              className="relative ml-2 mr-2 flex h-full w-full border px-2 text-center"
              type="text"
              name="q"
              aria-label="Search"
            />
            <button
              onClick={() => {
                setQuery("");
                setViewSearchBar(!viewSearchBar);
              }}
            >
              <GrFormClose className="h-6 w-6 border border-gray-700" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}

export default Header;
