import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import Image from 'next/image';

const components = {
  img: (props) => (
    <span className="">
      <Image {...props} layout="responsive" alt={props.alt} objectFit="cover" />
    </span>
  ),

  Youtube: (props) => (
    <div className="flex h-[240px] w-full md:h-[480px]">
      <iframe
        src={`https://www.youtube.com/embed/${props.uid}`}
        width="100%"
        title={props.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ),
};

function BlogContent({ MdxSource }) {
  return <MDXRemote {...MdxSource} components={components} />;
}

export default BlogContent;
