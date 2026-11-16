import Splash from "./home";
import DefaultNavbar from "@/app/navigation";
import Contact from "@/app/contact";
import Footer from "@/app/footer";
import Projects from "@/app/projects";

export default function Home() {
    return (
        <div id="home">
            <DefaultNavbar/>

            <section className="flex min-h-screen w-full items-center justify-center pt-20">
                <Splash/>
            </section>

            <section id="projects" className="flex min-h-screen w-full items-center justify-center">
                <Projects/>
            </section>

            <section id="contact" className="flex min-h-screen w-full items-center justify-center">
                <Contact/>
            </section>

            <Footer/>
        </div>
    );
}