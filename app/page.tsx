import NavBar from "@components/NavBar"
import Contact from "@components/Contact"
import ProjectCard from "@components/ProjectCard"


const Home = () => {
  return (
    <div>
      <NavBar />
      
      <section className="w-full h-[100vh]">
        <div className="w-fit h-fit relative left-[30%] top-[30%]">
          <div className="text-4xl font-bold">Hi,</div>
          <div className="text-2xl font-thin">Im Akshit Goyal</div>
        </div>
      </section>

      <section className="w-full slant">
        <h1 className="h-full w-full text-center py-10 font-bold text-4xl">Technical Skills</h1>
      </section>

      <section className="w-full h-[100vh]">
        <h1 className="w-full text-center py-10 font-bold text-4xl">Projects</h1>
        <div className="flex flex-row gap-x-5 absolute left-[17.5%]">
          <ProjectCard image="" title="Task List" link=""/>
          <ProjectCard image="" title="Loose Screws | Ecom Website" link=""/>
          <ProjectCard image="" title="Portfolio Website" link=""/>
        </div>
      </section>


      <section className="w-fit flex flex-col h-[50vh] absolute left-[30%]">
        <h1 className="font-bold text-xl">Contact Me</h1>
        <Contact />
      </section>


    </div>
  )
}

export default Home;