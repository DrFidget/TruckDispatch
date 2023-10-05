import React from "react";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServicesGridProps {
  services: Service[];
}

const TruckGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <div className="w-full flex flex-wrap justify-between">
      {services.map((service) => (
        <div
          key={service.title}
          className="block max-w-[18rem] m-3 rounded-lg  bg-primary shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
        >
          <div className="relative overflow-hidden bg-cover bg-no-repeat py-10 px-10">
            <img className="rounded-t-lg" src={service.image} alt="" />
          </div>
          <div className="p-6 text-justify">
            <p className="">
              <span className="font-bold text-white text-lg">
                {service.title}
                <br />
              </span>
              <span className=" text-white backdrop-blur-lg">
                {service.description}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TruckGrid;
