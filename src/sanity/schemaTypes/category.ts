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
          unique: true,
          slugify: (input: any) => {
            return input
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w-]+/g, "");
          },
        },
        validation: (Rule: any) =>
          Rule.required().custom((fields: any) => {
            if (
              fields?.current !== fields?.current?.toLowerCase() ||
              fields?.current.split(" ").includes("")
            ) {
              return "Slug must be lowercase and not be included space";
            }
            return true;
          }),
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