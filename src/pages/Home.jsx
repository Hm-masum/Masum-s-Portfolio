import About from "../Components/About";
import Banner from "../Components/Banner";
import ContactComp from "../Components/ContactComp";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Projects from "./Projects";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <ContactComp></ContactComp>
        </div>
    );
};

export default Home;