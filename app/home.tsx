import Image from "next/image";
import Link from "next/link";

export default function Splash() {
    return (
        <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">

            {/* SVG Definition for 12-Sided Wavy Cookie Shape */}
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

            {/* Background HELLO Text */}
            <h1 className="absolute -translate-y-40 text-[80vw] md:text-[375px] font-black tracking-tighter bg-linear-to-t to-[#FFFFFF] via-[#D4D9E1] from-[#C4CDD6] bg-clip-text text-transparent pr-2">
                HELLO
            </h1>

            {/* Left Text */}
            <div className="absolute left-4 md:left-12 lg:left-65 font-autograph text-xl md:text-9xl tracking-wide text-gray-800 z-20">
                Abhinav
            </div>

            {/* Center Wrapper */}
            <div className="relative z-10">

                {/* Central Arch Structure */}
                <div className="relative aspect-[0.82] w-[min(85vw,450px)] overflow-hidden rounded-t-[50%] bg-linear-to-t to-[#FF2928] from-[#FF663C]">
                    <Image
                        src="/portrait.jpg"
                        alt="Portrait"
                        fill
                        priority
                        sizes="(max-width: 450px) 85vw, 450px"
                        className="object-cover object-center"
                    />
                </div>

                {/* 12-Sided Wavy Cookie Card (Positioned Bottom Right) */}
                <div
                    className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-16 z-30 w-50 h-50 md:w-60 md:h-60 bg-white text-black flex flex-col items-center justify-center shadow-2xl rotate-[6deg]"
                    style={{
                        clipPath: 'url(#cookie-12-shape)'
                    }}
                >
                    <span className="font-bold text-base md:text-lg">Let's Talk</span>
                    <span className="text-xs md:text-sm text-gray-600 underline">
                        <Link href={"mailto:hi@abhinavramanan.me"}>hi@abhinavramanan.me</Link>
                    </span>
                </div>
            </div>

            {/* Right Text */}
            <div className="absolute right-4 md:right-12 lg:right-65 font-autograph text-xl md:text-9xl tracking-wide text-gray-800 z-20">
                Ramanan
            </div>

        </div>
    );
}