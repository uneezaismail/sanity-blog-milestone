// Query for all posts
export const postQuery = `
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
`;

// Query for post by slug
export const postQueryBySlug = `
  *[_type == "blogpost" && slug.current == $slug][0]{
    title,
    slug,
    image,
    author->{
      authorName
    },
    publishedAt,
    longPost,
    category->{
      title
    }
  }
`;
