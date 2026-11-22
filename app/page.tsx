import Splash from "./home";
import DefaultNavbar from "@/app/navigation";
import Contact from "@/app/contact";
import Footer from "@/app/footer";
import Projects from "@/app/projects";

export default function Home() {
    return (
        <div id="home" className="overflow-x-clip">
            <DefaultNavbar/>

            <section className="snap-section flex min-h-dvh w-full items-center justify-center pt-20">
                <Splash/>
            </section>

            <section id="projects" className="snap-section flex min-h-dvh w-full items-center justify-center">
                <Projects/>
            </section>

            <section id="contact" className="snap-section flex min-h-dvh w-full items-center justify-center">
                <Contact/>
            </section>

            <div className="snap-footer">
                <Footer/>
            </div>
        </div>
    );
}