import { LuGithub } from "react-icons/lu";
import SocialmediaButton from "../components/SocialmediaButton";
import sample from "../assets/Developer.svg";

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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-background rounded-2xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.01]">
          <div className="relative group w-full aspect-[4/3] overflow-hidden">
            <img
              src={sample}
              alt="sample"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <SocialmediaButton to="https://github.com/Teds-a2901">
                <LuGithub size={24} className="text-white" />
              </SocialmediaButton>
              <SocialmediaButton to="https://github.com/Teds-a2901">
                <LuGithub size={24} className="text-white" />
              </SocialmediaButton>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-2">Sample Name</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">
              A full-featured e-commerce platform with cart, checkout, and
              payment integration. Built with React, Next.js, and Stripe.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                React
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                Next.js
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                Stripe
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                Tailwind
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-background rounded-2xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-[1.01]">
          <div className="relative group w-full aspect-[4/3] overflow-hidden">
            <img
              src={sample}
              alt="sample"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <SocialmediaButton to="https://github.com/Teds-a2901">
                <LuGithub size={24} className="text-white" />
              </SocialmediaButton>
              <SocialmediaButton to="https://github.com/Teds-a2901">
                <LuGithub size={24} className="text-white" />
              </SocialmediaButton>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-semibold mb-2">Sample Name</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">
              A full-featured e-commerce platform with cart, checkout, and
              payment integration. Built with React, Next.js, and Stripe.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-4">
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                React
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                Next.js
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                Stripe
              </span>
              <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                Tailwind
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
