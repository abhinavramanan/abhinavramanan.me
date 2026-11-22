"use client";

import { useState } from "react";
import {BsGit, BsGithub} from "react-icons/bs";
import Link from "next/link";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            id: 1,
            title: "TextPilot",
            description: "An accessible document understanding app for visually impaired users. Entry for the 2026 Apple Student Swift Challenge.",
            logo: "/textpilot.png",
            language: "Swift",
            langIcon: "swift.png",
            githubUrl: "https://github.com/abhinavramanan/textpilot",
            tags: [
                { name: "Accepted", bgColor: "#137333", textColor: "#FFFFFF" },
            ]
        },
        {
            id: 2,
            title: "MindBreak",
            description: "A focus timer with interactive cognitive breaks. Entry for the 2025 Apple Student Swift Challenge.",
            logo: "/mindbreak.png",
            language: "Swift",
            langIcon: "swift.png",
            githubUrl: "https://github.com/abhinavramanan/mindbreak",
            tags: [
                { name: "Accepted", bgColor: "#137333", textColor: "#FFFFFF" }
            ]
        },
        {
            id: 3,
            title: "abhinavramanan.me",
            description: "A portfolio website built with Next.js and Tailwind CSS.",
            logo: "/abhinavramanan.png",
            language: "Next.js",
            langIcon: "nextjs.png",
            githubUrl: "https://github.com/abhinavramanan/abhinavramanan.me",
        }
    ]

    const ProjectCard = ({ project }: { project: typeof projects[number] }) => (
        <div className="flex h-full flex-col justify-between gap-4 rounded-[28px] bg-white p-5">
            <div>
                <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-[20px]">
                    <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        className="h-full w-full object-contain"
                    />
                </div>

                <div className="mt-4">
                    {/* Wraps onto a second line when the card is too narrow */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <h3 className="max-w-full min-w-0 truncate text-2xl font-bold tracking-tight text-black">
                            {project.title}
                        </h3>

                        <div className="flex shrink-0 items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white">
                            <img src={project.langIcon} alt="" className="h-3 w-3" />
                            {project.language}
                        </div>

                        {project.tags?.map((tag, index) => (
                            <div
                                key={index}
                                className="flex shrink-0 items-center rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap"
                                style={{
                                    backgroundColor: tag.bgColor,
                                    color: tag.textColor
                                }}
                            >
                                {tag.name}
                            </div>
                        ))}
                    </div>

                    <p className="mt-1 text-sm leading-relaxed text-gray-600">
                        {project.description}
                    </p>
                </div>
            </div>

            {project.githubUrl && (
                <Link
                    href={project.githubUrl}
                    className="flex h-10 w-10 items-center justify-center self-end rounded-full bg-black text-white"
                >
                    <BsGithub className="h-5 w-5" />
                </Link>
            )}
        </div>
    );

    return (
        <section className="relative w-full px-5 py-16 md:px-20">
            <h1 className="pointer-events-none absolute left-1/2 top-[calc(4rem_-_0.73em)] z-0 -translate-x-1/2 whitespace-nowrap leading-none bg-gradient-to-t from-[#C4CDD6] via-[#D4D9E1] to-white bg-clip-text text-[length:min(280px,19.5vw)] font-black tracking-tighter text-transparent">
                PROJECTS
            </h1>

            <div className="relative flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, showAll ? projects.length : 3).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {projects.length > 3 && (
                    <button
                        type="button"
                        onClick={() => setShowAll((prev) => !prev)}
                        aria-expanded={showAll}
                        className="flex w-full items-center justify-between gap-3 rounded-[20px] bg-[#E9EDF1] px-4 py-4 text-black sm:px-6"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-light" aria-hidden="true">{showAll ? "−" : "+"}</span>
                            <span className="text-sm font-semibold">{showAll ? "Show less" : "View all projects"}</span>
                        </div>

                        <span className="shrink-0 whitespace-nowrap text-sm text-gray-500">
                             {showAll ? "Collapse" : `${projects.length - 3} more projects`}
                        </span>
                    </button>
                )}
            </div>
        </section>
    );
}