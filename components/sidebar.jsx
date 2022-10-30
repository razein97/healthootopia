import React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { FcList, FcBusinesswoman, FcSearch } from "react-icons/fc";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { preventDefault } from "../utils";

export default function Sidebar(props) {
  const router = useRouter();
  const [category, showCategory] = useState(false);
  const [query, setQuery] = useState("");

  const handleParam = (setValue) => (e) => setValue(e.target.value);
  const handleSubmit = preventDefault(() => {
    if (query.length > 0) {
      setQuery = "";
      router.push({
        pathname: "/search",
        query: { q: query },
      });
      props.setMenu(!props.menu);
    }
  });

  return (
    <div
      className={` ${
        props.padding
      } absolute top-0 z-10 w-full bg-white md:hidden    ${
        props.menu ? " block h-full   " : "hidden h-0"
      }`}
    >
      <form
        className="inline-flex h-16 w-full items-center py-3 px-6"
        onSubmit={handleSubmit}
      >
        <button type="submit">
          <FcSearch className=" h-6 w-6" />
        </button>
        <input
          value={query}
          onChange={handleParam(setQuery)}
          placeholder="Search"
          className="relative ml-2 flex h-full w-full border px-2 text-center"
          type="text"
          name="q"
          aria-label="Search"
        />
      </form>

      <button
        type="button"
        className="inline-flex h-16 w-full items-center justify-between border-b border-t py-3 px-6 text-sm font-medium uppercase leading-tight text-black transition duration-300 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        onClick={() => showCategory(!category)}
      >
        <FcList className=" h-6 w-6" />
        <p className="relative flex font-semibold">Categories</p>
        {category ? (
          <AiOutlineUp className=" " />
        ) : (
          <AiOutlineDown className=" " />
        )}
      </button>

      <div className={`${category ? "visible" : "hidden"}`}>
        <Link href="/categories/health">
          <button
            onClick={() => {
              props.setMenu(!props.menu);
            }}
            className="inline-flex w-full items-center justify-around  py-3 px-6 font-OpenSans font-light text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 "
          >
            Health
          </button>
        </Link>
        <hr />

        <Link href="/categories/fitness">
          <button
            onClick={() => {
              props.setMenu(!props.menu);
            }}
            className="inline-flex w-full items-center justify-around  py-3 px-6 font-OpenSans   font-light text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 "
          >
            Fitness
          </button>
        </Link>
        <hr />
        <Link href="/categories/potpourri">
          <button
            onClick={() => {
              props.setMenu(!props.menu);
            }}
            className="inline-flex w-full items-center justify-around  py-3 px-6 font-OpenSans   font-light text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 "
          >
            Potpourri
          </button>
        </Link>
        <hr />
      </div>

      <Link href="/about">
        <button
          type="button"
          className="inline-flex h-16 w-full items-center justify-between border-t-0 border-b  py-3 px-6 text-sm font-medium uppercase leading-tight text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
        >
          <FcBusinesswoman className=" h-6 w-6" />
          <p className="relative flex font-semibold">About Me</p>
          <span />
        </button>
      </Link>
    </div>
  );
}
