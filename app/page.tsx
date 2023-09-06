import Hero from "@components/Hero";
import Projects from "@components/Projects";
import ContactMe from "@/app/components/ContactMe";
import Theme from "./components/Theme";
import Scroll from "./components/Scroll";

const Home = () => {
  return (
    <Theme>
      <main className="flex flex-col items-center">
        <Hero />
        <Projects />
        <ContactMe />
      </main>
      <Scroll />
    </Theme>
  );
};

export default Home;
