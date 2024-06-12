import { client, urlFor } from "@/lib/sanity";
import React from "react";
import Button from "./shared/Button";
import Image from "next/image";

export default async function Header() {
    const data = await client.fetch(
        `*[_type == "home"] { welcomeText, intro, title, buttonText, url, headerImage }`
    );
    const { welcomeText, intro, title, buttonText, url, headerImage } = data[0];

    return (
        <header className="grid grid-cols-2 gap-16 items-center container mx-auto mt-48">
            <div className="flex flex-col gap-5 items-start">
                <div>
                    <h4 className="font-bold text-xl">{welcomeText}</h4>
                    <h1 className="text-5xl font-bold">{title}</h1>
                </div>

                <p>{intro[0].children[0].text}</p>
                <Button type="link" text={buttonText} url={url} />
            </div>

            <Image src={urlFor(headerImage.asset._ref).url()} width={731} height={523} alt={headerImage.alt} />
        </header>
    );
}
