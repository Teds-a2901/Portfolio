import DecryptedText from "../ui/DecryptedText";
import SplitText from "../ui/SplitText";
import SocialmediaButton from "../components/SocialmediaButton";
import { LuFacebook, LuGithub, LuLinkedin } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import DeveloperImg from "../assets/developer1.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="">
        <div className="grid md:grid-cols-2 gap-8 mt-10 px-2">
          <div className="space-y-4 max-w-2xl">
            <div className="bg-amber-100 inline-block py-1 px-4 rounded-full font-medium">
              Online | Web Developer
            </div>
            <div>
              <SplitText
                text="Hello, I'm Teds"
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
              />
            </div>
            <DecryptedText
              text="Turning ideas into seamless web experiences inspired by modern trends. "
              animateOn="view"
              revealDirection="center"
              speed={50}
              className="text-xl md:text-2xl font-light text-muted-foreground"
              parentClassName="all-letters"
            />
            <span className=""></span>
            <p className="font-medium text-base max-w-lg animate-fade-left animate-once">
              I specialize in developing beautiful, high-performance web
              applications that deliver exceptional user experiences. Let's
              build something amazing together.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              <Link
                to="mailto:marktedra29@gmail.com"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md h-11 px-6 py-2 bg-slate-900 text-white hover:bg-amber-100 font-medium transition-colors hover:text-black"
              >
                Get Touch
              </Link>
              <button
                onClick={() => {
                  const section = document.getElementById("project");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center rounded-md h-11 px-6 py-2 border border-input bg-background hover:bg-amber-100 transition-colors"
              >
                View Project
              </button>
            </div>
            <div className=" flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2">
              <SocialmediaButton to="https://github.com/Teds-a2901">
                <LuGithub size={24} />
              </SocialmediaButton>
              <SocialmediaButton to="www.linkedin.com/in/mtedra">
                <LuLinkedin size={24} />
              </SocialmediaButton>
              <SocialmediaButton to="https://www.facebook.com/Teds1965/">
                <LuFacebook size={24} />
              </SocialmediaButton>
              <SocialmediaButton to="mailto:marktedra29@gmail.com">
                <SiGmail size={24} />
              </SocialmediaButton>
            </div>
          </div>
          <div className="hidden md:block justify-center md:justify-end">
            <img
              src={DeveloperImg}
              alt="DeveloperImg"
              className="w-full h-auto  animate-fade-left animate-once"
            ></img>
          </div>
        </div>
        <span></span>
      </div>
    </section>
  );
}

export default Home;
