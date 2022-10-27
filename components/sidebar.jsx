import React from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { FcList, FcBusinesswoman } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar(props) {
  const [category, showCategory] = useState(false);
  return (
    <div
      className={` ${
        props.padding
      } absolute right-0 z-10 h-full w-3/4 bg-white  transition-all ${
        props.menu ? 'block' : 'hidden'
      }`}
    >
      <button
        type="button"
        className="inline-flex h-16 w-full items-center justify-between border-b border-t py-3 px-6 text-sm font-medium uppercase leading-tight text-black transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
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

      <div className={`${category ? 'visible' : 'hidden'}`}>
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
    // <div className="absolute inset-0  -left-2/3 z-10  w-2/3  bg-blue-400 transition-all duration-500 group-hover:left-0"></div>
  );
}
