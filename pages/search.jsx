import React from "react";
import { useRouter } from "next/router";
import Header from "../components/header.jsx";
import Head from "next/head";
import Sidebar from "../components/sidebar.jsx";
import Footer from "../components/footer.jsx";
import Post from "../components/post.jsx";
import { useState, useEffect } from "react";
import searchJson from "../search.json";
import { BiSad } from "react-icons/bi";
import NoPost from "../components/nopost.jsx";
import Meta from "../components/meta.jsx";

export default function SearchPage() {
  const { query } = useRouter();

  const [menu, setMenu] = useState(false);

  const posts = searchPosts(query.q?.toLowerCase());

  return (
    <div className=" flex min-h-screen w-full flex-col ">
      <Meta
        title={"Search"}
        description="search for articles"
        ogTitle="Search Healthootopia"
      />

      <Header setMenu={setMenu} menu={menu} />
      <Sidebar padding="pt-14" menu={menu} setMenu={setMenu} />

      {posts.length > 0 ? (
        <div className="h-2/5 w-full flex-1 self-center bg-white md:py-6 lg:h-[540px] lg:w-full xl:h-[540px] xl:w-[1080px] 2xl:h-[540px] 2xl:w-[1080px] ">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      ) : (
        <NoPost />
      )}

      <Footer />
    </div>
  );
}

function searchPosts(searchString) {
  const TempPosts = [];

  searchJson.map((post) => {
    if (
      post.frontmatter.title.toLowerCase().includes(searchString) ||
      post.frontmatter.excerpt.toLowerCase().includes(searchString) ||
      post.frontmatter.tags.toString().toLowerCase().includes(searchString)
    ) {
      TempPosts.push(post);
    } else {
      TempPosts.push(null);
    }
  });

  //   remove null in posts
  const posts = TempPosts.filter((path) => {
    return path && path;
  });

  return posts;
}
