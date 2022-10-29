import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { serialize } from "next-mdx-remote/serialize";
import imageSize from "rehype-img-size";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Head from "next/head";
import Header from "../../components/header";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import readTime from "../../utils/readTime";
import BlogContent from "../../components/blogcontent";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import Tooltip from "../../components/tooltip";
import Footer from "../../components/footer";
import getRandomPost from "../../utils/getRandomPosts";
import RecommendedPost from "../../components/recommendedPost";
import Tags from "../../components/tags";

export default function PostPage({
  frontmatter,
  slug,
  mdxSource,
  readingTime,
  posts,
}) {
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState("Copy link to clipboard");

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <Header setMenu={setMenu} menu={menu} />

      <Sidebar padding="pt-0" menu={menu} setMenu={setMenu} />

      <div className="mx-auto my-0  flex-1 bg-white md:py-6  lg:w-full  xl:w-[1080px]  2xl:w-[1080px] ">
        <div className="grid   gap-y-4 p-6  ">
          <div className="relative  h-60 w-full justify-self-center md:h-[540px] md:w-full">
            <Image
              src={frontmatter.banner_image}
              alt=""
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          <div className="grid   gap-y-4">
            <Link href={`/categories/${frontmatter.category.toLowerCase()}`}>
              <h3 className="font-xs text-center font-OpenSans text-sm font-semibold uppercase text-[#ca9b52cc] hover:cursor-pointer  ">
                {frontmatter.category}
              </h3>
            </Link>
            <h3 className=" text-center font-PlayfairDisplay  text-3xl ">
              {frontmatter.title}
            </h3>
            <div className="text-center  font-PlayfairDisplay text-base italic text-gray-400">
              {frontmatter.date} | {readingTime} min read
            </div>
            <div className="flex flex-row  gap-4 justify-self-center ">
              <button
                onClick={() => {
                  window.location.href = `https://twitter.com/intent/tweet?text=${frontmatter.title}&url=https://healthootopia.com/blog/${slug}`;
                }}
              >
                <Tooltip
                  tooltip={"Share on twitter"}
                  icon={<BsTwitter className=" h-6 w-6 " />}
                />
              </button>

              <button
                onClick={() => {
                  window.location.href = `https://www.facebook.com/sharer/sharer.php?u=https://healthootopia.com/blog/${slug}&t=${frontmatter.title}`;
                }}
              >
                <Tooltip
                  tooltip={"Share on facebook"}
                  icon={<BsFacebook className=" h-6 w-6 " />}
                />
              </button>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://healthootopia.com/blog/${slug}`
                  );
                  setCopied("Link Copied");
                }}
              >
                <Tooltip
                  tooltip={copied}
                  icon={
                    <BiLink
                      onMouseEnter={() => {
                        setCopied("Copy link to clipboard");
                      }}
                      onMouseLeave={() => {
                        setCopied("Copy link to clipboard");
                      }}
                      className="h-6 w-6"
                    />
                  }
                />
              </button>
            </div>
            <div className="prose justify-self-center text-justify font-OpenSans prose-headings:font-PlayfairDisplay  md:prose-lg">
              <BlogContent MdxSource={mdxSource} />
            </div>
          </div>
        </div>

        {/* tags */}
        <div className="flex w-full flex-wrap justify-center gap-4 p-4">
          {frontmatter.tags.map((element, index) => (
            <Tags key={index} tag={element} />
          ))}
        </div>

        {/* You may also like */}
        <div className="flex  flex-col">
          <hr />
          <br />
          <p className="text-center font-OpenSans text-sm  font-semibold tracking-[.30em] text-[#030303] ">
            YOU MAY ALSO LIKE
          </p>
          <br />
          <hr />
          <div className="flex  w-full  flex-col justify-center gap-x-4   md:flex-row ">
            {getRandomPost(posts, slug, frontmatter.category, 3).map(
              (post, index) => (
                <RecommendedPost key={index} post={post} />
              )
            )}
          </div>
        </div>
        <hr />
        <br className="md:hidden" />
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".mdx", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    const readingTime = readTime(content);

    return {
      slug,
      frontmatter,
      readingTime,
    };
  });

  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const readingTime = readTime(content);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        [imageSize, { dir: "public" }],
        rehypeSlug,

        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
        rehypeCodeTitles,
      ],
    },
  });

  return {
    props: {
      frontmatter,
      slug,
      mdxSource,
      readingTime,
      posts,
    },
  };
}
