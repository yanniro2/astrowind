import React from "react";
import { MdCreate, MdBuild, MdBuildCircle, MdSettings } from "react-icons/md";
import processData from "../../data/processData.json";

type ProcessStep = {
  id: number;
  name: string;
  icon: string;
  description: string;
};

// const renderIcon = (iconName: string) => {
//   const iconComponents: { [key: string]: React.ElementType } = {
//     MdCreate,
//     MdBuild,
//     MdBuildCircle,
//     MdSettings,
//   };

//   const IconComponent = iconComponents[iconName];
//   return <IconComponent />;
// };

const Process: React.FC = () => {
  return (
    <div className="w-screen h-max lg:py-[3rem] bg-gray-100 relative p-5 ">
      <img
        src="/assets/img/home/process.png"
        alt="process img"
        className="w-full h-full object-cover absolute"
      />
      <div className="container mx-auto relative backdrop-blur-sm ">
        <div className="text-center gap-5 my-[3rem]">
          <h3 className="h3"> our process</h3>
          <h1 className="h1">From Concept to Completion</h1>
        </div>

        <div className="flex flex-col gap-3">
          {processData.map((step: ProcessStep) => (
            <div
              key={step.id}
              className="flex items-center border cursor-pointer  p-5 hover:scale-105 transition-all rounded-lg gap-[1rem] hover:bg-white">
              <div className="w-[5rem] h-[5rem] flex items-center justify-center bg-primary rounded-full p-5">
                <h1 className="text-[3rem] font-poppins font-semibold">
                  {step.id}
                </h1>
              </div>
              <div className="flex items-center gap-5 justify-between w-full">
                <div>
                  <h3 className="h3">{step.name}</h3>
                  <p className="text-gray-500">{step.description}</p>
                </div>
                {/* <div className="w-[2rem] bg-dark p-3 rounded-lg flex items-center justify-center text-white text-2xl">
                  {renderIcon(step.icon)}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;
