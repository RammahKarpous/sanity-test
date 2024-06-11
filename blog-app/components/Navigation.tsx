import React from "react";

// Components
import Logo from "@/components/Logo";

export default async function Navigation() {
    return (
        <div className="fixed top-5 container rounded-md bg-white flex justify-between items-center py-4 pl-8 pr-12 left-1/2 -translate-x-1/2">
            <Logo />

            <ul className="flex gap-10 items-center">
                <li><a href="#top">Home</a></li>
                <li><a href="#about-us">About us</a></li>
                <li><a href="#our-products">Our product</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#contact-us">Contact us</a></li>
            </ul>
        </div>
    );
}
