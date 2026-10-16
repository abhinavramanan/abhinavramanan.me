import Image from "next/image";
import Splash from "./home";

export default function Home() {
  return (
    <div>
      <section className="flex min-h-screen w-full items-center justify-center">
        <Splash/>
      </section>
    </div>
  );
}
