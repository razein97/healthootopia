import Image from 'next/image';
import Link from 'next/link';

export default function Post({ post }) {
  return (
    <div className=" ">
      <div className=" w-full self-center md:bg-[#f7f7f7] ">
        <div className="grid gap-y-4  p-6 text-center  md:grid-flow-col  ">
          <div className="relative h-60 w-60 justify-self-center md:col-span-1 md:h-80 md:w-80">
            <Image
              src={post.frontmatter.cover_image}
              alt=""
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>

          <div className=" grid   gap-y-4  md:col-span-4 md:gap-y-0   md:p-8">
            <Link
              href={`categories/${post.frontmatter.category.toLowerCase()}`}
            >
              <h3 className="font-xs font-OpenSans text-sm font-semibold uppercase text-[#ca9b52cc]  ">
                {post.frontmatter.category}
              </h3>
            </Link>
            <h3 className=" font-PlayfairDisplay text-3xl ">
              {post.frontmatter.title}
            </h3>

            <div className=" font-PlayfairDisplay text-base italic text-gray-400">
              {post.frontmatter.date} | {post.readingTime} min read
            </div>
            <p className="text-justify font-OpenSans text-lg font-light text-[#464646]">
              {post.frontmatter.excerpt}
            </p>
            <br />
            <div className="w-full">
              <Link href={`/blog/${post.slug}`}>
                <button
                  type="button"
                  onClick={() => {}}
                  className=" inline-block w-56  border  border-[#ca9b52cc] py-4 px-6 text-sm font-semibold uppercase leading-tight text-[#ca9b52cc] transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                >
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="  mx-auto my-0 h-px w-11/12 bg-gray-300  md:w-full " />
      <br />
    </div>
  );
}
