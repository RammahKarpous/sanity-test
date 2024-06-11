import Link from "next/link";
import React from "react";

type Button = {
    text: string;
    url: string;
    type: "button" | "link";
};

export default function Button({ text, url, type }: Button) {
    const styles = "text-white bg-green-dark rounded-md py-3 px-6"
    
    return (
        <>
            {type === "button" && (
                <button className={`${styles}`}>
                    {text}
                </button>
            )}

            {type === "link" && (
                <Link
                    className={`${styles} inline-block`}
                    href={url}
                >
                    {text}
                </Link>
            )}
        </>
    );
}
