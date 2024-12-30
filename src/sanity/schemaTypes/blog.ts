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
      validation: (Rule: any) => Rule.required(), // Add required validation for title
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
            return "Slug must be lowercase and not include spaces";
          }
          return true;
        }),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "The main image of the blog post.",
      validation: (Rule: any) => Rule.required(), // Add validation for image
    },
    {
      name: "longPost",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description: "The long content of the blog post.",
      validation: (Rule: any) => Rule.required(), // Ensure content is required
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule: any) => Rule.required(), // Make author a required field
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "The publish date of the blog post.",
      validation: (Rule: any) => Rule.required(), // Make date required
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      description: "The category this blog post belongs to.",
      validation: (Rule: any) => Rule.required(), // Make category a required field
    },
    {
			name: "tags",
			title: "Tags",
			type: "array",
			validation: (Rule: any) => Rule.required(),
			of: [
				{
					type: "string",
					validation: (Rule: any) =>
						Rule.custom((fields: any) => {
							if (
								fields !== fields.toLowerCase() ||
								fields.split(" ").includes("")
							) {
								return "Tags must be lowercase and not be included space";
							}
							return true;
						}),
				},
			],
		},
  ],
};

export default blog;
