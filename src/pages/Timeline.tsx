import WorkingExperience from "./WorkingExperience";

function Timeline() {
  return (
    <div>
      <div className="mb-16  px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Timeline</h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          <WorkingExperience />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
