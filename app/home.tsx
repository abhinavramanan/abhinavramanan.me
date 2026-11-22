import Image from "next/image";
import Link from "next/link";
import "./hero.css";

export default function Splash() {
    return (
        <div className="hero">
            <svg className="absolute w-0 h-0" aria-hidden="true">
                <defs>
                    <clipPath id="cookie-12-shape" clipPathUnits="objectBoundingBox">
                        <path d="M 0.402 0.133
                                 Q 0.500 0.010 0.598 0.133
                                 Q 0.755 0.058 0.769 0.231
                                 Q 0.942 0.245 0.867 0.402
                                 Q 0.990 0.500 0.867 0.598
                                 Q 0.942 0.755 0.769 0.769
                                 Q 0.755 0.942 0.598 0.867
                                 Q 0.500 0.990 0.402 0.867
                                 Q 0.245 0.942 0.231 0.769
                                 Q 0.058 0.755 0.133 0.598
                                 Q 0.010 0.500 0.133 0.402
                                 Q 0.058 0.245 0.231 0.231
                                 Q 0.245 0.058 0.402 0.133 Z" />
                    </clipPath>
                </defs>
            </svg>

            <h1 className="hero-hello font-black tracking-tighter bg-linear-to-t to-[#FFFFFF] via-[#D4D9E1] from-[#C4CDD6] bg-clip-text text-transparent">
                HELLO
            </h1>

            <div className="hero-name hero-abhinav font-autograph tracking-wide text-gray-800">
                Abhinav
            </div>

            <div className="hero-chip hero-coding bg-black text-white rounded-full shadow-lg">
                Coding
            </div>

            <div className="hero-chip hero-pianist bg-black text-white rounded-full shadow-lg">
                Pianist
            </div>

            <div className="hero-portrait rounded-t-[50%] bg-linear-to-t to-[#0047AB] from-[#007FFF]">
                <div className="hero-portrait-box">
                    <Image
                        src="/portrait.png"
                        alt="Portrait"
                        fill
                        priority
                        sizes="(max-width: 530px) 85vw, 500px"
                        className="hero-portrait-img object-contain object-bottom"
                    />
                </div>
            </div>

            <div
                className="hero-cookie bg-white text-black flex flex-col items-center justify-center shadow-2xl"
                style={{ clipPath: 'url(#cookie-12-shape)' }}
            >
                <span className="font-bold flex items-center gap-[0.45em]">
                    Let's Talk
                    <svg
                        className="hero-arrow"
                        viewBox="0 0 34 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M1 5H32M28 1L32 5L28 9"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
                <span className="hero-cookie-email text-gray-600 underline">
                    <Link href={"mailto:hi@abhinavramanan.me"}>hi@abhinavramanan.me</Link>
                </span>
            </div>

            <div className="hero-name hero-ramanan font-autograph tracking-wide text-gray-800">
                Ramanan
            </div>
        </div>
    );
}