import { createClient, QueryParams } from "next-sanity";
import { postQuery, postQueryBySlug } from "./sanity-query";
import clientConfig from "@/sanity/config/client-config";

// Centralized fetch function
export const client = createClient(clientConfig);
export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache", 
    next: { tags },
  });
}

// Fetch all posts
export const getPosts = async () => {
  const data = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["blogpost", "author", "category"],
  });
  return data;
};

// Fetch a post by slug
export const getPostBySlug = async (slug: string) => {
  const data:any = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
    tags: ["blogpost", "author", "category"],
  });

  return data;
};
