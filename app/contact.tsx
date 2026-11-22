'use client'

import { useState } from "react";
import { BsGithub, BsStackOverflow } from "react-icons/bs";

export default function Contact() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const mailLink = `mailto:hi@abhinavramanan.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    return (
        <div className="relative flex flex-col items-center justify-center min-h-dvh w-full overflow-hidden px-3 md:px-20 py-12">
            <h1 className="relative z-0 -mb-[0.34em] whitespace-nowrap text-center text-[length:min(280px,20.5vw)] leading-none font-black tracking-tighter bg-linear-to-t to-[#FFFFFF] via-[#D4D9E1] from-[#C4CDD6] bg-clip-text text-transparent select-none pr-2">
                CONTACT
            </h1>

            <div className="relative z-10 w-full bg-white rounded-[28px] overflow-hidden shadow-[0_0_40px_50px_#C4CDD6] flex flex-col md:flex-row">
                <div className="relative flex w-full flex-col justify-between gap-10 overflow-hidden bg-linear-to-t to-[#0047AB] from-[#007FFF] p-8 text-white md:w-2/5 md:min-h-[550px] md:p-10">
                    <div className="relative">
                        <h2 className="text-[length:clamp(1.875rem,4.2vw,3.75rem)] font-black uppercase leading-none tracking-tight">
                            LET'S TALK
                        </h2>
                        <p className="mt-4 text-sm text-white/80">
                            Fill in the form or write to me directly.
                        </p>
                    </div>

                    <div className="relative hidden flex-col gap-5 md:flex">
                        <a
                            href="mailto:hi@abhinavramanan.me"
                            className="w-fit break-all text-sm font-semibold underline underline-offset-4 md:text-base"
                        >
                            hi@abhinavramanan.me
                        </a>

                        <div className="flex items-center gap-2">
                            <a
                                href="https://github.com/abhinavramanan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="rounded-full bg-white p-2.5 text-black transition-colors duration-300 hover:bg-black hover:text-white"
                            >
                                <BsGithub className="h-5 w-5" />
                            </a>
                            <a
                                href="https://stackoverflow.com/users/29974778/abhinav-ramanan"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Stack Overflow"
                                className="rounded-full bg-white p-2.5 text-black transition-colors duration-300 hover:bg-black hover:text-white"
                            >
                                <BsStackOverflow className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/5 bg-white py-10 px-6 sm:px-10 md:px-8 lg:px-20 md:py-12 flex flex-col">
                    <form className="flex flex-1 flex-col space-y-6">
                        <div className="flex flex-col">
                            <label htmlFor="subject" className="text-s font-semibold text-gray-900 mb-1">
                                Subject*
                            </label>
                            <input
                                id="subject"
                                type="text"
                                placeholder="Write Subject line"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full border-b border-black py-1 text-base md:text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
                                required
                            />
                        </div>

                        <div className="flex flex-1 flex-col">
                            <label htmlFor="message" className="text-s font-semibold text-gray-900 mb-1">
                                Message*
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full flex-1 min-h-32 border-b border-black py-1 text-base md:text-sm text-gray-800 focus:outline-none bg-transparent resize-none"
                                required
                            />
                        </div>

                        <div className="pt-2">
                            <a
                                href={mailLink}
                                className="inline-block bg-black text-white text-xs font-semibold px-7 py-3.5 md:py-3 rounded-full hover:bg-gray-800 transition-colors"
                            >
                                Send Message
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}