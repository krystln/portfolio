import NavBar from "@components/NavBar"
import Hero from "@components/Hero"
import AboutMe from "@components/AboutMe"
import Projects from "@components/Projects"
import ContactMe from "@/app/components/ContactMe"


const Home = () => {
  return (
    <>
      <NavBar />
      
      <section className="w-full h-fit" id="Hero">
        <Hero />
      </section>

      <section className="w-full h-fit" id="AboutMe">
        <AboutMe></AboutMe>
      </section>

      <section className="w-full h-fit" id="Project">
        <Projects></Projects>        
      </section>


      <section className="w-fit h-fit" id="ContactMe">
        <ContactMe />
      </section>


    </>
  )
}

export default Home;