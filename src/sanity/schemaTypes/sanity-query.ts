// Query for all posts
export const postQuery = `
  *[_type == "blogpost"]{
    title,
    slug,
    image,
    author->{
      authorName
    },
    date,
    publishedAt,
    longPost,
    category->{
      title
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
