import NavBar from "@components/NavBar"
import Contact from "@components/Contact"
import ProjectCard from "@components/ProjectCard"


const Home = () => {
  return (
    <div>
      <NavBar/>

      <section className="w-full">
        <div>Hi,</div>
        <div>I'm Akshit Goyal</div>
      </section>

      <section className="w-full">
        <h1 className="">Technical Skills</h1>
      </section>

      <section className="w-full">
        <h1 className="">Projects</h1>
        <ProjectCard/>
      </section>

      
      <section className="w-full">
        <h1 className="">Contact Me</h1>
        <Contact/>
      </section>

    </div>
  )
}

export default Home