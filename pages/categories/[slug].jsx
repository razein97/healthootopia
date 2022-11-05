import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../../components/post.jsx";
import { sortByDate } from "../../utils";
import Header from "../../components/header.jsx";
import readTime from "../../utils/readTime.js";
import React, { useState } from "react";
import Sidebar from "../../components/sidebar.jsx";
import Footer from "../../components/footer.jsx";
import NoPost from "../../components/nopost.jsx";
import Meta from "../../components/meta.jsx";

export default function Categories({ posts }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" flex min-h-screen w-full flex-col ">
      <Meta
        title={"Category"}
        keywords={"health, fitness, potpourri"}
        description={"Category of posts"}
        ogTitle={"Healthootopia Categories"}
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

export async function getStaticPaths() {
  // ADD more categories by duplicating params
  return {
    paths: [
      { params: { slug: "health" } },
      { params: { slug: "fitness" } },
      { params: { slug: "potpourri" } },
    ],

    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

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

    if (frontmatter.category.toLowerCase() === params.slug) {
      return {
        slug,
        frontmatter,
        readingTime,
      };
    } else {
      return null;
    }
  });

  const posts = tempPosts.filter((post) => {
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
      posts: posts,
    },
  };
}

//dynamically add categories

// export async function getStaticPaths() {
//   const files = fs.readdirSync(path.join('posts'))

//   let tempStorage = []

//   const temppaths = files.map((filename) => {

//     const markdownWithMeta = fs.readFileSync(
//       path.join('posts', filename),
//       'utf-8'
//     )

//     const { data: frontmatter } = matter(markdownWithMeta)

//     if (frontmatter.draft === false) {
//       frontmatter.categories.map(
//         category => {
//           let slug = slugify(category)
//           tempStorage.push({ params: { slug } });

//         }
//       )
//     } else {
//       return null
//     }

//   })

//   const paths = tempStorage.filter((item,
//     index) => {
//     return tempStorage.indexOf(item) === index
//   })

//   return {
//     paths,
//     fallback: false,
//   }

// }

// export async function getStaticProps({ params: { slug } }) {

//   // Get files from the posts dir
//   const files = fs.readdirSync(path.join('posts'))

//   let tempStorage = []

//   // Get slug and frontmatter from posts

//   const tempPosts = files.map((filename) => {

//     // Get frontmatter
//     const markdownWithMeta = fs.readFileSync(
//       path.join('posts', filename),
//       'utf-8'
//     )

//     const { data: frontmatter } = matter(markdownWithMeta)

//     if (frontmatter.draft === false) {
//       frontmatter.categories.map(
//         category => {
//           let categroySlug = slugify(category)
//           if (slug === categroySlug) {

//             tempStorage.push({ post: frontmatter })

//           }
//         }
//       )
//     } else {
//       return null
//     }
//   })

//   //  remove null in tempPosts

//   const posts = tempStorage.filter(
//     post => {

//       return post && post
//     }
//   )

//   return {
//     props: {
//       posts
//     },
//   }

// }
