import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function RecommendedPost({ post }) {
  return (
    <div>
      <div className="flex h-[120px] w-full p-2 md:h-[240px] md:w-[240px] md:flex-col md:items-center md:justify-center lg:h-[320px]  lg:w-[320px]   ">
        <div className="relative h-14 w-1/4 self-center hover:cursor-pointer  md:h-40 md:w-60 ">
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.frontmatter.cover_image}
              alt=""
              layout="fill"
              objectFit="cover"
              className=""
            />
          </Link>
        </div>
        <br />

        <div className="w-3/4 self-center p-2 md:w-full">
          <Link href={`/blog/${post.slug}`}>
            <button className="w-full">
              <h3 className="  text-center font-PlayfairDisplay text-sm font-semibold line-clamp-2   md:text-base ">
                {post.frontmatter.title}
              </h3>
            </button>
          </Link>

          <div className=" text-center font-PlayfairDisplay text-sm italic text-gray-400 md:text-base">
            {post.frontmatter.date} | {post.readingTime} min read
          </div>
        </div>
      </div>

      <div className=" mx-auto my-0 h-px w-11/12 bg-gray-300 md:hidden  md:w-full " />
    </div>
  );
}
