import { createClient, type ClientConfig } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const config: ClientConfig = {
    projectId: "asdze854",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-06-08",
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
}

export const client = createClient(config)
const builder =  ImageUrlBuilder(client)

export const urlFor = (source: string) => builder.image(source)
