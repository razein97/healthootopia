import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import LimitWords from "../utils/limitWords";

export default function SlideScreen({ posts }) {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      // centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade, Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {posts.slice(0, 5).map((post, index) => (
        // <Post key={index} post={post} />
        <SwiperSlide key={index}>
          <Image
            className="brightness-75 filter"
            src={post.frontmatter.banner_image}
            alt={post.frontmatter.title}
            objectFit="cover"
            layout="fill"
          />

          <div className=" grid h-full w-full grid-flow-col gap-y-4 bg-white p-7">
            <div className=" relative  self-center text-center ">
              <Link
                href={`/categories/${post.frontmatter.category.toLowerCase()}`}
              >
                <a className="font-OpenSans text-sm font-semibold uppercase tracking-widest text-white">
                  {post.frontmatter.category}
                </a>
              </Link>
              <br />
              <br />
              <Link href={`/blog/${post.slug}`}>
                <p className="py-6 font-PlayfairDisplay text-4xl text-white hover:cursor-pointer md:text-5xl">
                  {post.frontmatter.title}
                </p>
              </Link>
              <br />
              <p className=" hidden py-6 font-OpenSans text-lg font-light text-white md:block">
                {LimitWords(post.frontmatter.excerpt, 30)}
              </p>
              <br />

              <Link href={`/blog/${post.slug}`}>
                <button
                  type="button"
                  className="inline-block  border  border-white py-3 px-6 text-xs font-black uppercase leading-tight tracking-widest text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                >
                  READ NOW
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
