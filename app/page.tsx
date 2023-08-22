import Hero from "@components/Hero";
import AboutMe from "@components/AboutMe";
import Projects from "@components/Projects";
import ContactMe from "@/app/components/ContactMe";

const Home = () => {
  return (
    <main className="flex flex-col gap-32 pt-32 items-center">
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
    </main>
  );
};

export default Home;
