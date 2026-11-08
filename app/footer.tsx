'use client'

export default function Footer() {
    return (
        <footer className="relative w-full overflow-hidden pb-0">
            <div className="relative flex w-full justify-center overflow-hidden">
                <p className="absolute top-2 z-10 text-xs md:text-sm font-medium text-gray-500 tracking-wide shadow-[0_0_40px_50px_#C4CDD6]">
                    © 2026 Abhinav Ramanan. All rights reserved.
                </p>

                {/*<h1 className="translate-y-[18%] text-center text-[12vw] md:text-[150px] font-black tracking-tighter bg-linear-to-t from-[#FFFFFF] via-[#D4D9E1] to-[#C4CDD6] bg-clip-text text-transparent select-none leading-none whitespace-nowrap">
                    ABHINAV RAMANAN
                </h1>*/}
            </div>
        </footer>
    )
}