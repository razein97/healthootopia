import { MDXRemote } from 'next-mdx-remote';
import React from 'react';
import Image from 'next/image';

const components = {
  img: (props) => (
    <span className="">
      <Image {...props} layout="responsive" alt={props.alt} objectFit="cover" />
    </span>
  ),
};

function BlogContent({ MdxSource }) {
  return <MDXRemote {...MdxSource} components={components} />;
}

export default BlogContent;
