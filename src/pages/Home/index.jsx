
import Intro from "../../components/Intro";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Experience from "../../components/Experience";
import Work from "../../components/Work";
import Testimonials from "../../components/Testimonials";
import Contact from "../../components/Contact";
import "./style.scss"

const index = () => {
    return (
        <main>
            <Intro/>
            <About/>
            <Skills/>
            <Experience/>
            <Work/>
            <Testimonials/>
            <Contact/>
        </main>
    );
};

export default index;