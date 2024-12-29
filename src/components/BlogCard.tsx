import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface BlogCardProps {
  blog: {
    title: string;
    image: {
        asset: {
          _ref: string;  
          _type: string; 
        };
    }
    date:string;
    category: {title:string};
    publishedAt: string;
    slug: {
        current: string;
      };
  };
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <>
      
    <div className="flex gap-2 items-center ">
        <div className="relative w-60 h-60 md:h-40 lg:w-72 ">
        <Image src={urlFor(blog.image).url()} alt="svg" fill className="object-cover "></Image>
        </div>
        <div className="flex flex-col gap">
      <span className="text-xs text-white bg-gray-700 px-1 w-fit">{blog.category.title}</span>
      <h3 className="text-md text-lg text-slate-900 md:text-md lg:text-xl font-bold">{blog.title}</h3>
      <p className="text-sm text-gray-400">{blog.date}</p>     
    </div>
    </div>
    
    </>
  );
};

export default BlogCard;
