import Splash from "./home";
import DefaultNavbar from "@/app/navigation";
import Contact from "@/app/contact";
import Footer from "@/app/footer";

export default function Home() {
  return (
    <div>
        <DefaultNavbar/>

        <section className="flex min-h-screen w-full items-center justify-center">
            <Splash/>
        </section>

        <section id="contact" className="flex min-h-screen w-full items-center justify-center">
            <Contact/>
        </section>

        <Footer/>
    </div>
  );
}
