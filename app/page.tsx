import Hero from "@components/Hero";
import AboutMe from "@components/AboutMe";
import Projects from "@components/Projects";
import ContactMe from "@/app/components/ContactMe";
import Theme from "./components/Theme";
import Scroll from "./components/Scroll";

const Home = () => {
  return (
    <Theme>
      <main className="flex flex-col gap-32 pt-32 items-center">
        <Hero />
        <AboutMe />
        <Projects />
        <ContactMe />
      </main>
      <Scroll />
    </Theme>
  );
};

export default Home;
