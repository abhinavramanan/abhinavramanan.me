'use client'

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const mailLink = `mailto:hi@abhinavramanan.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    return (
        <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden px-3 md:px-20">
            <h1 className="absolute -translate-y-56 text-[32vw] md:text-[280px] font-black tracking-tighter bg-linear-to-t to-[#FFFFFF] via-[#D4D9E1] from-[#C4CDD6] bg-clip-text text-transparent select-none pr-2">
                CONTACT
            </h1>

            <div className="relative z-10 w-full translate-y-24 bg-white rounded-[28px] overflow-hidden shadow-[0_0_40px_50px_#C4CDD6] flex flex-col md:flex-row my-12">
                <div className="relative w-full md:w-3/8 min-h-[350px] md:min-h-[550px] bg-linear-to-t to-[#0047AB] from-[#007FFF]">
                    <Image
                        src="/portrait.jpg"
                        alt="Portrait"
                        fill
                        priority
                        sizes="(max-width: 530px) 85vw, 450px"
                        className="object-cover object-top"
                    />
                </div>

                <div className="w-full md:w-5/8 bg-white py-12 px-20 flex flex-col">
                    <h2 className="text-3xl md:text-6xl tracking-tight font-black text-black mb-8 uppercase">
                        LET'S TALK
                    </h2>

                    <form className="flex flex-1 flex-col space-y-6">
                        <div className="flex flex-col">
                            <label className="text-s font-semibold text-gray-900 mb-1">
                                Subject*
                            </label>
                            <input
                                type="text"
                                placeholder="Write Subject line"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="w-full border-b border-black py-1 text-sm text-gray-800 placeholder-gray-400 focus:outline-none bg-transparent"
                                required
                            />
                        </div>

                        <div className="flex flex-1 flex-col">
                            <label className="text-s font-semibold text-gray-900 mb-1">
                                Message*
                            </label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full flex-1 border-b border-black py-1 text-sm text-gray-800 focus:outline-none bg-transparent resize-none"
                                required
                            />
                        </div>

                        <div className="pt-2">
                            <a
                                href={mailLink}
                                className="inline-block bg-black text-white text-xs font-semibold px-7 py-3 rounded-full hover:bg-gray-800 transition-colors"
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