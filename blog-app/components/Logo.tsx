import React from "react";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { client } from "@/lib/sanity";

export default async function Logo() {
    const logo = await client.fetch(`*[_type == "settings"] { image }`);

    return (
        <Image
            src={urlFor(logo[0].image.asset._ref).url()}
            width={174}
            height={66}
            alt="logo image"
        />
    );
}
