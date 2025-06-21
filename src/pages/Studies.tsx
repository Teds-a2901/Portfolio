import education from "../data/education";

function Studies() {
  return (
    <div>
      <div className="rounded-xl p-2 h-full mt-6 border-t-4 border-t-amber-100 hover:backdrop-blur-md hover:shadow-md hover:ease-in hover:border-t-amber-200">
        {/* //rounded-xl p-2 h-full mt-6 border-t-4 border-t-amber-100 bg-white/10
          backdrop-blur-md shadow-md */}
        {education.map((ed, idx) => {
          const isLast = idx === education.length - 1;
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
                src={ed.Logo}
                alt={`${ed.Logo} logo`}
                className="z-10 block w-20 h-20 aspect-square object-cover object-center rounded-full outline-2 outline-gray-100"
              />

              <div>
                <p className=" text-black text-xl md:text-2xl font-light ">
                  {ed.SchoolName}
                </p>
                <p className="inline-block whitespace-pre-wrap text-xl md:text-2xl font-light">
                  {ed.Date}
                </p>
                <p className="font-medium text-base mt-1 leading-relaxed">
                  {ed.Course}
                </p>
                <p className="font-medium text-base mt-1 leading-relaxed">
                  {ed.Award}
                </p>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default Studies;
