import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import imageSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import Head from 'next/head';
import Header from '../../components/header';
import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import readTime from '../../utils/readTime';
import BlogContent from '../../components/blogcontent';
import { BsTwitter, BsFacebook } from 'react-icons/bs';
import { BiLink } from 'react-icons/bi';
import Tooltip from '../../components/tooltip';
import Footer from '../../components/footer';

export default function PostPage({
  frontmatter,
  slug,
  mdxSource,
  readingTime,
}) {
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState('Copy link to clipboard');

  return (
    <div className="">
      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <Header setMenu={setMenu} menu={menu} />

      <Sidebar padding="pt-0" menu={menu} setMenu={setMenu} />

      <div className="">
        <div className="mx-auto  my-0 flex min-h-screen w-full  flex-col bg-white md:py-6  lg:w-full  xl:w-[1080px]  2xl:w-[1080px] ">
          <div className="grid  flex-1 gap-y-4 p-6  ">
            <div className="relative h-60 w-60 justify-self-center md:h-80 md:w-80">
              <Image
                src={frontmatter.cover_image}
                alt=""
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>

            <div className="grid   gap-y-4">
              <h3 className="font-xs text-center font-OpenSans text-sm font-semibold uppercase text-[#ca9b52cc]  ">
                {frontmatter.category}
              </h3>
              <h3 className=" text-center font-PlayfairDisplay  text-3xl ">
                {frontmatter.title}
              </h3>
              <div className="text-center  font-PlayfairDisplay text-base italic text-gray-400">
                {frontmatter.date} | {readingTime} min read
              </div>
              <div className="flex flex-row  justify-center gap-4 ">
                <button
                  onClick={() => {
                    window.location.href = `https://twitter.com/intent/tweet?text=${frontmatter.title}&url=https://healthootopia.com/blog/${slug}`;
                  }}
                >
                  <Tooltip
                    tooltip={'Share on twitter'}
                    icon={<BsTwitter className=" h-6 w-6 " />}
                  />
                </button>

                <button
                  onClick={() => {
                    window.location.href = `https://www.facebook.com/sharer/sharer.php?u=https://healthootopia.com/blog/${slug}&t=${frontmatter.title}`;
                  }}
                >
                  <Tooltip
                    tooltip={'Share on facebook'}
                    icon={<BsFacebook className=" h-6 w-6 " />}
                  />
                </button>

                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `https://healthootopia.com/blog/${slug}`
                    );
                    setCopied('Link Copied');
                  }}
                >
                  <Tooltip
                    tooltip={copied}
                    icon={
                      <BiLink
                        onMouseEnter={() => {
                          setCopied('Copy link to clipboard');
                        }}
                        onMouseLeave={() => {
                          setCopied('Copy link to clipboard');
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const readingTime = readTime(content);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        [imageSize, { dir: 'public' }],
        rehypeSlug,

        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ['anchor'] },
          },
          { behaviour: 'wrap' },
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
    },
  };
}
