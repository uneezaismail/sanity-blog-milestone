import { ClientPerspective } from "next-sanity";

const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: "production",
	apiVersion: "2024-12-28",
	useCdn: false,
	token: process.env.SANITY_API_KEY as string,
	perspective: 'published' as ClientPerspective,
};

export default config;