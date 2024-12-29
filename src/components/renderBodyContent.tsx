import { PortableText } from "@portabletext/react";
import { Blog } from "./BlogCard2";

const RenderBodyContent = ({ post }: { post: Blog }) => {
  return (
    <>
      <PortableText value={post?.longPost as any}  />
    </>
  );
};

export default RenderBodyContent;