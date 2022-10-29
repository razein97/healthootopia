import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { slugify, sortByDate } from "../../utils";
import React, { useState } from "react";
import Head from "next/head";
import Post from "../../components/post.jsx";
import Header from "../../components/header.jsx";
import Sidebar from "../../components/sidebar.jsx";
import Footer from "../../components/footer.jsx";
import readTime from "../../utils/readTime.js";

export default function TagsPage({ posts }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" flex min-h-screen w-full flex-col ">
      <Head>
        <title>Category</title>
      </Head>

      <Header setMenu={setMenu} menu={menu} />
      <Sidebar padding="pt-14" menu={menu} setMenu={setMenu} />

      <div className="h-2/5 w-full flex-1 self-center bg-white md:py-6 lg:h-[540px] lg:w-full xl:h-[540px] xl:w-[1080px] 2xl:h-[540px] 2xl:w-[1080px] ">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  let tempStorage = [];

  const temppaths = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    frontmatter.tags.map((tag) => {
      let slug = slugify(tag);
      tempStorage.push({ params: { slug } });
    });
  });

  const paths = tempStorage.filter((item, index) => {
    return tempStorage.indexOf(item) === index;
  });

  // const paths=["npm"]
  //   console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params.slug);
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  let tempStorage = [];

  // Get slug and frontmatter from posts

  const tempPosts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".mdx", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    const readingTime = readTime(content);

    frontmatter.tags.map((tag) => {
      let tagSlug = slugify(tag);
      if (params.slug === tagSlug) {
        tempStorage.push({ slug, frontmatter, readingTime });
      }
    });
  });

  //  remove null in tempPosts

  const posts = tempStorage.filter((post) => {
    return post && post;
  });

  if (posts.length > 1) {
    return {
      props: {
        posts: posts.sort(sortByDate),
      },
    };
  }

  return {
    props: {
      posts,
    },
  };
}
