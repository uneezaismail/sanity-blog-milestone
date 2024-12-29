
import BlogCard from "./BlogCard";
import { client } from "@/sanity/lib/client";
import HeroStock1 from "./HeroStock1";
import Link from "next/link";



interface Blog {
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

const HeroSection = async() => {
   
  const fetchPosts = await client.fetch(`*[_type == "blogpost"]{
        title,
        slug,
        image,
        author->{
          authorName
        },
        date,
        publishedAt,
        category->{
          title
        }
      }`);
    
  const selectedPosts=  [fetchPosts[11], fetchPosts[7], fetchPosts[10]];

  return (
    <> 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4">
      {/* Featured Blog */}
      <HeroStock1 />

      {/* Right-Side Blogs */}
      <div className="grid grid-cols-1 gap-4">
       
        {selectedPosts.map((blog:Blog, i: number) => (
          <Link  key={i}  href={`/blogsdetail/${blog.slug.current}`}>
             <BlogCard blog={blog} /> </Link>
         
        ))}
      </div>
     
    </div>
    <hr className="border-black my-10"/></>
  );
};

export default HeroSection;
