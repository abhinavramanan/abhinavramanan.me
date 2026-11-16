import Image from "next/image";
import Link from "next/link";

export default function Splash() {
    return (
        <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
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

            <h1 className="absolute -translate-y-40 text-[80vw] md:text-[375px] font-black tracking-tighter bg-linear-to-t to-[#FFFFFF] via-[#D4D9E1] from-[#C4CDD6] bg-clip-text text-transparent pr-2">
                HELLO
            </h1>

            <div className="absolute left-4 md:left-12 lg:left-65 font-autograph text-xl md:text-9xl tracking-wide text-gray-800 z-20">
                Abhinav
            </div>

            <div className="relative z-10">

                <div className="absolute top-[35%] -left-8 md:-left-12 z-30 bg-black text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base -rotate-12 shadow-lg">
                    Coding
                </div>

                <div className="absolute top-[12%] -right-4 md:-right-2 z-30 bg-black text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base rotate-12 shadow-lg">
                    Pianist
                </div>

                <div className="relative aspect-[0.82] w-[min(85vw,450px)] rounded-t-[50%] bg-linear-to-t to-[#0047AB] from-[#007FFF]">
                    <div className="absolute inset-x-4 -top-8 bottom-0 md:inset-x-6 md:-top-12">
                        <Image
                            src="/portrait.png"
                            alt="Portrait"
                            fill
                            priority
                            sizes="(max-width: 530px) 85vw, 450px"
                            className="object-contain object-bottom translate-x-7.5"
                        />
                    </div>
                </div>

                <div
                    className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-16 z-30 w-50 h-50 md:w-60 md:h-60 bg-white text-black flex flex-col items-center justify-center shadow-2xl rotate-[6deg]"
                    style={{
                        clipPath: 'url(#cookie-12-shape)'
                    }}
                >
                    <span className="font-bold text-base md:text-lg flex items-center gap-2">
                        Let's Talk
                        <svg
                            width="34"
                            height="10"
                            viewBox="0 0 34 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mt-0.5"
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
                    <span className="text-xs md:text-sm text-gray-600 underline">
                        <Link href={"mailto:hi@abhinavramanan.me"}>hi@abhinavramanan.me</Link>
                    </span>
                </div>
            </div>

            <div className="absolute right-4 md:right-12 lg:right-65 font-autograph text-xl md:text-9xl tracking-wide text-gray-800 z-20">
                Ramanan
            </div>

        </div>
    );
}