import techstackscroll1 from "../data/techstackscroll";
import techstackscroll2 from "../data/techstackscroll2";

function TechStack() {
  return (
    <>
      <div>
        <div className="flex gap-8 mt-10 px-4 relative">
          <div className="overflow-hidden flex">
            <div className="">
              <ul className="flex animate-[scrollright_15s_linear_infinite]">
                {[...techstackscroll1, ...techstackscroll1].map(
                  (tech, index) => (
                    <div
                      key={index}
                      className=" flex items-center space-y-2 mx-4 px-4 py-2"
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
        <div className="flex gap-8 px-4 relative">
          <div className="overflow-hidden flex">
            <div className="">
              <ul className="flex animate-[scrollleft_20s_linear_infinite]">
                {[...techstackscroll2, ...techstackscroll2].map(
                  (tech, index) => (
                    <div
                      key={index}
                      className=" flex items-center space-y-2 mx-4 px-4 py-2"
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
    </>
  );
}

export default TechStack;
