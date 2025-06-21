import workingexperience from "../data/workingexperience";

function WorkingExperience() {
  return (
    <div className="rounded-xl p-2 h-full mt-6 border-t-4 border-t-amber-100 hover:backdrop-blur-md hover:shadow-md hover:ease-in hover:border-t-amber-200">
      {/* //rounded-xl p-2 h-full mt-6 border-t-4 border-t-amber-100 bg-white/10
          backdrop-blur-md shadow-md */}
      {workingexperience.map((exp, idx) => {
        const isLast = idx === workingexperience.length - 1;
        return (
          <li
            key={idx}
            className={`list-none relative flex gap-5 py-6 ${
              !isLast
                ? "before:absolute before:left-[38px] before:top-[30px] before:h-full before:w-[1.5px] after:w-[3.5px] before:bg-orange-300"
                : ""
            }`}
          >
            <img
              src={exp.Logo}
              alt={`${exp.ComName} logo`}
              className="z-10 block w-20 h-20 aspect-square object-cover object-center rounded-full outline-2 outline-gray-100"
            />

            <div>
              <p className="inline-block whitespace-pre-wrap text-xl md:text-2xl font-light">
                {exp.Date}
              </p>
              <p className=" text-black text-xl md:text-2xl font-light ">
                {exp.ComName}
              </p>
              <p className="font-medium text-base mt-1 leading-relaxed">
                {exp.Detail}
              </p>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default WorkingExperience;
