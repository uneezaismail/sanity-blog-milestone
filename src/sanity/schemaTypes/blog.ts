const blog = {
    name: "blogpost",
    title: "Blog Post",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        description: "The title of the blog post.",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
          maxLength: 96,
          slugify: (input:string) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
        },
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
        description: "The main image of the blog post.",
      },
      {
        name: "longPost",
        title: "Content",
        type: "array",
        of: [{ type: "block" }],
        description: "The long content of the blog post.",
      },
      {
        name: "author",
        title: "Author",
        type: 'reference',
        to: [{type: 'author'}],
      },
      {
        name: "date",
        title: "Date",
        type: "datetime",
        description: "The publish date of the blog post.",
      },
      {
        name: "category",
        title: "Category",
        type: "reference",
        to: [{ type: "category" }],
        description: "The category this blog post belongs to.",
      },
    ],
  };
  
  export default blog