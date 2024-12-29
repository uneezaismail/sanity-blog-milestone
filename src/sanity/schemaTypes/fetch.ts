import { QueryParams } from "next-sanity";
import { postQuery, postQueryBySlug } from "./sanity-query";
import { client } from "../lib/client";

// Centralized fetch function
export async function sanityFetch<QueryResponse>({
  query,
  qParams,
}: {
  query: string;
  qParams: QueryParams;
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",  // Apply force-cache
  });
}

// Fetch all posts
export const getPosts = async () => {
  const data = await sanityFetch({
    query: postQuery,
    qParams: {},
  });
  return data;
};

// Fetch a post by slug
export const getPostBySlug = async (slug: string) => {
  const data:any = await sanityFetch({
    query: postQueryBySlug,
    qParams: { slug },
  });

  return data;
};
