import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "asdze854",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-06-08"
}

export const client = createClient(config)