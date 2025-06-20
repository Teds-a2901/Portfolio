import techstackscroll from "../data/techstackscroll";
import techstackscroll2 from "../data/techstackscroll2";
import techstackscroll3 from "../data/techstackscroll3";
import techstackscroll4 from "../data/techstackscroll4";

function About() {
  return (
    <section id="about">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
        <p className="font-medium text-base mt-4 animate-fade-left">
          An aspiring web developer with over a year of experience in QA
          testing, bringing a sharp attention to detail and a passion for
          building. Outside of work, I enjoy building side projects as a hobby,
          experimenting with new ideas, tools, and frameworks. This hands-on
          approach helps me constantly learn and grow as I create clean,
          responsive, and user-friendly web experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4">
        <div className="bg-amber-400 rounded-xl shadow-lg p-6 max-w-3xl">
          <div className="overflow-hidden flex">
            <ul className="flex animate-[scrollright_15s_linear_infinite]">
              {[...techstackscroll, ...techstackscroll].map((tech, index) => (
                <div
                  key={index}
                  className=" flex-col items-center space-y-2 mx-4 px-4 py-2"
                >
                  <div className="flex space-x-2">
                    <div className="text-4xl flex ">{tech.icon}</div>
                    <p className="flex text-xl font-medium items-center text-center space-x-1 ">
                      {tech.name}
                    </p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <div>
            <div>
              <div className="overflow-hidden flex mt-1">
                <ul className="flex animate-[scrollleft_15s_linear_infinite]">
                  {[...techstackscroll2, ...techstackscroll2].map(
                    (tech, index) => (
                      <div
                        key={index}
                        className=" flex-col items-center space-y-2 mx-4 px-4 py-2"
                      >
                        <div className="flex space-x-2">
                          <div className="text-4xl flex ">{tech.icon}</div>
                          <p className="flex text-xl font-medium items-center text-center space-x-1 ">
                            {tech.name}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </ul>
              </div>
              <div className="overflow-hidden flex mt-1">
                <ul className="flex animate-[scrollright_15s_linear_infinite]">
                  {[...techstackscroll3, ...techstackscroll3].map(
                    (tech, index) => (
                      <div
                        key={index}
                        className=" flex-col items-center space-y-2 mx-4 px-4 py-2"
                      >
                        <div className="flex space-x-2">
                          <div className="text-4xl flex ">{tech.icon}</div>
                          <p className="flex text-xl font-medium items-center text-center space-x-1 ">
                            {tech.name}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </ul>
              </div>
              <div className="overflow-hidden flex mt-1">
                <ul className="flex animate-[scrollleft_15s_linear_infinite]">
                  {[...techstackscroll4, ...techstackscroll4].map(
                    (tech, index) => (
                      <div
                        key={index}
                        className=" flex-col items-center space-y-2 mx-4 px-4 py-2"
                      >
                        <div className="flex space-x-2">
                          <div className="text-4xl flex ">{tech.icon}</div>
                          <p className="flex text-xl font-medium items-center text-center space-x-1 ">
                            {tech.name}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Techstack</h1>
          <p className="font-medium text-base max-w-lg mt-4 animate-fade-left">
            technologies I used while building this project. Each one played a
            key role in bringing everything together from the layout and design
            to the interactive features and overall performance. I focused on
            building something that not only looks great but also feels smooth
            to use, works well on any device, and is easy to maintain and
            improve over time. My goal was to create a clean, modern experience
            by combining thoughtful design with solid development practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
