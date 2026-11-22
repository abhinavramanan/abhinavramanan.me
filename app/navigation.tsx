'use client'

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { BsGithub, BsStackOverflow } from "react-icons/bs";

const navItems = [
    { label: "Home", targetId: "home" },
    { label: "Projects", targetId: "projects" },
    { label: "Contact", targetId: "contact" },
];

const socials = [
    { href: "https://stackoverflow.com/users/29974778/abhinav-ramanan", Icon: BsStackOverflow, label: "Stack Overflow" },
    { href: "https://github.com/abhinavramanan", Icon: BsGithub, label: "GitHub" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function DefaultNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState<string | null>(null);
    const reduceMotion = useReducedMotion();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (y) => {
        if (y > 24 && !scrolled) setScrolled(true);
        else if (y < 8 && scrolled) setScrolled(false);
    });

    const scrollToSection = (targetId: string) => {
        document.getElementById(targetId)?.scrollIntoView({
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    const transition = reduceMotion ? { duration: 0 } : { duration: 0.7, ease };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pointer-events-none">
            <motion.nav
                initial={reduceMotion ? false : { y: -40, opacity: 0 }}
                animate={{
                    opacity: 1,
                    y: scrolled ? 12 : 20,
                    maxWidth: scrolled ? 720 : 1280,
                    paddingTop: scrolled ? 8 : 4,
                    paddingBottom: scrolled ? 8 : 4,
                    paddingLeft: scrolled ? 14 : 0,
                    paddingRight: scrolled ? 14 : 0,
                    backgroundColor: scrolled ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0)",
                    backdropFilter: scrolled ? "blur(14px) saturate(1.6)" : "blur(0px) saturate(1)",
                    borderColor: scrolled ? "rgba(229,231,235,0.7)" : "rgba(229,231,235,0)",
                    boxShadow: scrolled
                        ? "0 10px 30px -10px rgba(0,0,0,0.18), 0 2px 6px -2px rgba(0,0,0,0.06)"
                        : "0 0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0)",
                }}
                transition={transition}
                style={{ borderWidth: 1, borderStyle: "solid", borderRadius: 9999 }}
                className="mx-auto w-full flex items-center justify-between pointer-events-auto will-change-transform"
            >
                <ul
                    className="flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-medium text-gray-900"
                    onMouseLeave={() => setHovered(null)}
                >
                    {navItems.map((item) => (
                        <li key={item.targetId} className="relative">
                            <button
                                type="button"
                                onClick={() => scrollToSection(item.targetId)}
                                onMouseEnter={() => setHovered(item.targetId)}
                                className="relative z-10 px-2 sm:px-4 py-2 cursor-pointer"
                            >
                                {item.label}
                            </button>

                            {hovered === item.targetId && (
                                <motion.span
                                    layoutId="hover-pill"
                                    className="absolute inset-0 rounded-full bg-gray-900/5"
                                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-1.5 sm:gap-2">
                    {socials.map(({ href, Icon, label }) => (
                        <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            whileHover={{ scale: 1.1, y: -1 }}
                            whileTap={{ scale: 0.92 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="p-2 sm:p-2.5 rounded-full bg-white text-black shadow-sm hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.a>
                    ))}
                </div>
            </motion.nav>
        </header>
    );
}