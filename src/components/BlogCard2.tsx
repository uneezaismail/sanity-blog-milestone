import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Blog {
  title: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  category: { title: string };
  publishedAt: string;
  slug: {
    current: string;
  };
  author: {authorName:string};
  longPost: string[] ; 
}

const BlogCard2 = ({ blog }: { blog: Blog }) => {
  // Ensure description is defined and slice it
  // const truncatedDescription = blog.longPost.slice(0, 140) || ""; 

  return (
    <Link href={`/blogsdetail/${blog.slug.current}`} className="font-poppins overflow-hidden transform transition duration-300 hover:scale-105">
      
      <div className="relative w-full h-56">
      <Image
        src={urlFor(blog.image).url()}
        alt={blog.title}
        fill
        className="w-full h-56 object-cover"
      />
      </div>
      <div className="py-4">
        <p className="text-indigo-700 text-xs font-medium ">
          {blog.category.title}
        </p>
        <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold mt-3">{blog.title}</h2>
        <p className="text-xs text-gray-700 mt-1">
          {blog.author.authorName} &nbsp;&bull;&nbsp; {new Date(blog.publishedAt).toDateString()}
        </p>
        <p className="text-md text-gray-800 mt-4 line-clamp-2">
          {/* {truncatedDescription}  */}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard2;
