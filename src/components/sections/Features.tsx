import React from "react";
import {
  MdFormatShapes,
  MdAudiotrack,
  MdVibration,
  MdVisibilityOff,
  MdTune,
  MdBuild,
} from "react-icons/md";
import loudspeakerData from "../../data/featuresData.json"; // Update the path accordingly


type LoudspeakerFeature = {
  feature: string;
  description: string;
  icon: string;
};

const Features: React.FC = () => {
  const features: LoudspeakerFeature[] = loudspeakerData.loudspeakerFeatures;

  return (
    <div className="w-screen h-max lg:py-[3rem] bg-white md:p-5 p-5 lg:p-0">
      <div className="container mx-auto">
        <div className="flex items-center gap-5 md:flex-row flex-col">
          <div className="md:w-1/2 h-full w-full">
            <img
              src="/assets/img/home/features.jpg"
              width={500}
              height={500}
              className="w-full h-full object-contain  drop-shadow shadow border-white rounded-lg border-2"
            />
          </div>

          <div className="md:w-1/2 h-full flex flex-col justify-between w-full">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-8 h-max">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="border p-[1rem] rounded-md cursor-pointer hover:bg-primary hover:text-white bg-gray-50 w-full h-full flex flex-col gap-3 group hover:drop-shadow-lg transition-all hover:scale-105">
                  {/* Use appropriate styling for your feature items */}
                  {renderIcon(feature.icon)}
                  <h2 className="h2">{feature.feature}</h2>
                  <p className="text">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const renderIcon = (iconName: string) => {
  const iconComponents: { [key: string]: React.ElementType } = {
    MdFormatShapes,
    MdAudiotrack,
    MdVibration,
    MdVisibilityOff,
    MdTune,
    MdBuild,
  };

  const IconComponent = iconComponents[iconName];
  return <IconComponent className="icons" />;
};

export default Features;
