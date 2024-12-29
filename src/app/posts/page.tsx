import BlogCard2 from '@/components/BlogCard2';
import { client } from '@/sanity/lib/client';
import React from 'react';

const Posts = async () => {
  // Fetch categories and related posts
  const fetchCategories = await client.fetch(`
    *[_type == "category"]{
      title,
      "posts": *[_type == "blogpost" && references(^._id)]{
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
      }
    }
  `);

  return (
    <div className="my-10 container mx-auto px-4 lg:px-0">
      {fetchCategories.map((category: any, index: number) => (
        <div className='py-5 md:py-10' key={index} id={category.title.toLowerCase().replace(/ /g, '-')}> {/* Set unique ID */}
          {/* Category Title */}
          <h2 className=" text-3xl font-bold mb-6">{category.title}</h2>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
            {category.posts.slice(0, 3).map((post: any, i: number) => (
              <BlogCard2 key={i} blog={post} />
            ))}
          </div>
          <hr className="border-black my-5 md:my-10" />
        </div>
      ))}
    </div>
  );
};

export default Posts;
