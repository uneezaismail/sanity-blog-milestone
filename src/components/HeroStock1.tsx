import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const HeroStock1 = async () => {
     const fetchstock1 = await client.fetch(`*[_type == "blogpost"]{
        title,
          slug,
          image,
          author->{
          authorName},
          date,
           category->{
    title}
      }[6]`)
      
  return (
    <Link href={`/blogsdetail/${fetchstock1.slug.current}`}>
    <div className="relative w-full h-[300px] md:h-full border">
           <Image
             src={urlFor(fetchstock1.image).url()}
             alt={fetchstock1.title}
             fill
             className="w-full h-full object-cover"
           />
           
           <div className="absolute content-end h-full w-full space-y-1 bottom-0 bg-opacity-10 bg-black  left-0 z-20 p-4">
             <span className="text-xs text-white bg-gray-700 px-1">{fetchstock1.category.title}</span>
             <h2 className="text-xl md:text-3xl leading-relaxed font-bold text-white font-playfair">{fetchstock1.title}</h2>
             <p className="text-xs text-white">{fetchstock1.date}</p>
           </div>
         </div>
         </Link>
  )
}

export default HeroStock1