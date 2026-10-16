'use client'

import Link from 'next/link';
import { BsGithub, BsStackOverflow } from "react-icons/bs";

const navItems = [
    {
        label: "Home",
        targetId: "home",
    },
    {
        label: "Contact",
        targetId: "contact",
    },
];

export default function DefaultNavbar() {
    const scrollToSection = (targetId: string) => {
        document.getElementById(targetId)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <header className="w-full px-6 py-4">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-6 text-sm font-medium text-gray-900">
                    {navItems.map((item) => (
                        <button
                            key={item.targetId}
                            type="button"
                            onClick={() => scrollToSection(item.targetId)}
                            className="hover:opacity-70 transition-opacity cursor-pointer"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center">
                    <Link href="https://stackoverflow.com/users/29974778/abhinav-ramanan" className="ml-2 px-2.5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-black hover:text-white transition-colors">
                        <BsStackOverflow className="w-5 h-5"/>
                    </Link>

                    <Link href="https://github.com/abhinavramanan" className="ml-2 px-2.5 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-black hover:text-white transition-colors">
                        <BsGithub className="w-5 h-5"/>
                    </Link>
                </div>
            </nav>
        </header>
    );
}