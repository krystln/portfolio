import Hero from "@components/Hero";
import Projects from "@components/Projects";
import ContactMe from "@/app/components/ContactMe";
import Scroll from "./components/Scroll";

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center">
        <Hero />
        <Projects />
        <ContactMe />
      </main>
      <Scroll />
    </>
  );
};

export default Home;
