import NavBar from "@components/NavBar"
import Hero from "@components/Hero"
import AboutMe from "@components/AboutMe"
import Projects from "@components/Projects"
import Contact from "@/app/components/ContactMe"


const Home = () => {
  return (
    <>
      <NavBar />
      
      <section className="w-full h-fit" id="Hero">
        <Hero />
      </section>

      <section className="w-full h-[100vh]" id="AboutMe">
        <AboutMe></AboutMe>
      </section>

      <section className="w-full h-[100vh]" id="Project">
        <Projects></Projects>        
      </section>


      <section className="w-fit h-[50vh]" id="ContactMe">
        <h1 className="font-bold text-xl">Contact Me</h1>
        <Contact />
      </section>


    </>
  )
}

export default Home;