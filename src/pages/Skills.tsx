import Progressbar from "../components/Progressbar";
import TechStack from "../components/TechStack";

function Skills() {
  return (
    <section id="skill" className="py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Skills & Expertise
        </h2>
        <p className="font-medium text-base mt-4 px-4">
          A comprehensive overview of my technical abilities and soft skills
          that enable me to deliver excellent results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 mt-16 px-4">
        <div className="">
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <Progressbar skill="JavaScript / TypeScript" percentage="90%" />
          <Progressbar skill="React & Nextjs" percentage="85%" />
          <Progressbar skill="HTML 5 CSS3" percentage="90%" />
          <Progressbar skill="PHP" percentage="80%" />
          <Progressbar skill="MySQL" percentage="95%" />
        </div>
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
          <Progressbar skill="Problem Solving" percentage="95%" />
          <Progressbar skill="Communication" percentage="90%" />
          <Progressbar skill="Teamwork" percentage="90%" />
          <Progressbar skill="Adaptability" percentage="95%" />
          <Progressbar skill="Project" percentage="85%" />
        </div>
      </div>

      <div className="py-20 ">
        <h3 className="text-2xl font-semibold text-center  ">
          Technologies that I used
        </h3>
        <TechStack />
      </div>
    </section>
  );
}

export default Skills;
