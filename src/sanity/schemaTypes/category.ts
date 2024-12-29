const category = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        description: "Name of the category (e.g., Stock Market, Technology).",
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
        name: "description",
        title: "Description",
        type: "text",
        description: "A short description of the category.",
      },
    ],
  };
  export default category