import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Post from '../../components/post.jsx';
import { sortByDate } from '../../utils';
import Header from '../../components/header.jsx';
import readTime from '../../utils/readTime.js';
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar.jsx';
import { useRouter } from 'next/router';
import Footer from '../../components/footer.jsx';

export default function Categories({ posts }) {
  const [menu, setMenu] = useState(false);
  return (
    <div className=" flex min-h-screen w-full  flex-col ">
      <Head>
        <title>Category</title>
      </Head>

      <Header setMenu={setMenu} menu={menu} />
      <Sidebar padding="pt-14" menu={menu} setMenu={setMenu} />

      <div className="h-2/5 w-full self-center bg-white md:py-6 lg:h-[540px] lg:w-full xl:h-[540px] xl:w-[1080px] 2xl:h-[540px] 2xl:w-[1080px] ">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  // ADD more categories by duplicating params
  return {
    paths: [
      { params: { slug: 'health' } },
      { params: { slug: 'fitness' } },
      { params: { slug: 'potpourri' } },
    ],

    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const tempPosts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.mdx', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
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
