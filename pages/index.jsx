import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/post.jsx";
import { sortByDate } from "../utils";
import Header from "../components/header.jsx";
import SlideScreen from "../components/slidescreen.jsx";
import readTime from "../utils/readTime.js";
import React, { useState } from "react";
import Sidebar from "../components/sidebar.jsx";
import Footer from "../components/footer.jsx";
import SearchPage from "./search.jsx";

export default function Home({ posts }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Head>
        <title>Healthootopia - Learn . Nurture . Love</title>
      </Head>

      <Header setMenu={setMenu} menu={menu} />
      <Sidebar padding="pt-14" menu={menu} setMenu={setMenu} />

      <div className="flex h-2/5  w-full self-center lg:h-[540px] lg:w-full xl:h-[540px] xl:w-[1080px] 2xl:h-[540px] 2xl:w-[1080px]">
        <SlideScreen posts={posts} />
      </div>

      <div className=" h-2/5 w-full flex-1 self-center  bg-white   pb-14 md:py-6 lg:h-[540px] lg:w-full xl:h-[540px] xl:w-[1080px] 2xl:h-[540px] 2xl:w-[1080px] ">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
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

  const jsonString = JSON.stringify(posts);
  fs.writeFileSync("./search.json", jsonString, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
