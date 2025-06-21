import techstackscroll from "../data/techstackscroll";
import techstackscroll2 from "../data/techstackscroll2";
import techstackscroll3 from "../data/techstackscroll3";
import techstackscroll4 from "../data/techstackscroll4";
import Timeline from "./Timeline";

function About() {
  return (
    <section id="about">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
        <p className="font-medium text-base mt-4 animate-fade-left px-4">
          An aspiring web developer with over a year of experience in QA
          testing, bringing a sharp attention to detail and a passion for
          building. Outside of work, I enjoy building side projects as a hobby,
          experimenting with new ideas, tools, and frameworks. This hands-on
          approach helps me constantly learn and grow as I create clean,
          responsive, and user-friendly web experience.
        </p>
      </div>

      <Timeline />
    </section>
  );
}

export default About;
