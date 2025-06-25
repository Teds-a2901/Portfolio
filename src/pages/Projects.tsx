import { LuGithub, LuSquareArrowOutUpRight } from "react-icons/lu";
import SocialmediaButton from "../components/SocialmediaButton";
import proejctsdata from "../data/projectsdata";

function Projects() {
  return (
    <section id="project" className="py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="font-medium text-base mt-4 px-4">
          A showcase of my recent work, personal projects, and contributions.
          Each project represents unique challenges and solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch px-4">
        {proejctsdata.map((tech, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-background rounded-2xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.01]"
          >
            <div className="relative group w-full aspect-[4/3] overflow-hidden">
              <img
                src={tech.Image}
                alt={tech.Name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 hover:text-black transition-opacity duration-300 flex items-center justify-center gap-4">
                {tech.github && (
                  <SocialmediaButton to={tech.github}>
                    <LuGithub
                      size={25}
                      className="text-white  hover:text-black"
                    />
                  </SocialmediaButton>
                )}
                {tech.demo && (
                  <SocialmediaButton to={tech.demo}>
                    <LuSquareArrowOutUpRight
                      size={25}
                      className="text-white hover:text-black"
                    />
                  </SocialmediaButton>
                )}
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-semibold mb-2">{tech.Name}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {tech.Description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {tech.techstack.map((item, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-full bg-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
