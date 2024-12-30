import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import RenderBodyContent from "@/components/renderBodyContent";
import CommentsSection from "@/components/commentSection";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getPostBySlug } from "@/sanity/schemaTypes/fetch";

interface Params {
  slug: string;
}

const SingleBlogPage = async ({ params }: { params: Promise<Params> }) => {
 
  const resolvedParams = await params; 
  const blog = await getPostBySlug(resolvedParams.slug);
 

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
   
    <div className="my-4 md:mt-10  p-4 max-w-5xl mx-auto">
     
      <div className="relative w-full h-72 md:h-96 mb-6">
        <Image
          src={urlFor(blog.image).url()}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h1 className="text-3xl md:text-4xl text-black font-bold mb-4">{blog.title}</h1>
      <p className=" mb-6">
        By <span className="text-emerald-700 font-semibold"> {blog.author.authorName}</span> on <span className="text-black">2024-12-24</span> 
      </p>
     <article className="prose lg:prose-xl">
      <RenderBodyContent post={blog} /> </article>
      <CommentsSection/> 
      <div className="flex w-full items-center justify-center">
    <Link href={"/"}><button className="text-purple-900 font-xs flex gap-2 items-center pt-6"> <span><FaArrowLeft/></span>back to home</button></Link>  
    </div>
    </div>
   
    
  );
};

export default SingleBlogPage;
