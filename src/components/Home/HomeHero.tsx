import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import NumberCounter from "@/components/ui/NumberCounter";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServicesGrid from "./ServiceGrid";

const services = [
  {
    title: "Load Sourcing",
    description:
      "We connect owner-operators with a wide network of available freight loads across the country, ensuring a steady stream of work.",
    image:
      "https://img.freepik.com/free-vector/seaport-colored-isometric-emblem-with-container-loading-description-round-illustration_1284-31370.jpg?w=826&t=st=1696503834~exp=1696504434~hmac=29acb91587facacd5489d26a61114b62fb84e380c5795b37cc62136a2d20075f",
  },
  {
    title: "Paperwork Management",
    description:
      "Say goodbye to paperwork headaches. We handle all the necessary documents, including bills of lading and invoices, so you can focus on driving.",
    image:
      "https://img.freepik.com/free-vector/task-concept-illustration_114360-2934.jpg?w=826&t=st=1696504661~exp=1696505261~hmac=e89eab88008c869f32d0581a5364b37fff927a192ea8333fa4e2c5605a1bcb11",
  },
  {
    title: "Route Optimization",
    description:
      "Our advanced routing technology minimizes travel time, fuel consumption, and maintenance costs, maximizing your profits.",
    image:
      "https://img.freepik.com/free-vector/location-based-advertisement-geolocation-software-online-gps-app-navigation-system-geographic-restriction-man-searching-address-with-magnifier-vector-isolated-concept-metaphor-illustration_335657-2714.jpg?w=826&t=st=1696504213~exp=1696504813~hmac=a9424d5809fbbc3c2905aeafb11efe30e1762e58d382167c63e0c552d4bd2fee",
  },
  {
    title: "24/7 Dispatch Support",
    description:
      "Our dedicated dispatch team is available around the clock to assist you with load booking, route adjustments, and any on-road emergencies.",
    image:
      "https://img.freepik.com/free-vector/call-center-abstract-concept_335657-3001.jpg?w=826&t=st=1696505134~exp=1696505734~hmac=d0a8e51fc3edee34e02563337445d32ed69b504929219b7e4b1492eb1b20e982",
  },
  // {
  //   title: "Real-Time Tracking",
  //   description:
  //     "Stay in control with real-time load tracking. Know where your cargo is at all times and provide accurate delivery estimates.",
  //   image:
  //     "https://img.freepik.com/free-vector/post-service-tracking-illustration_335657-502.jpg?w=826&t=st=1696505176~exp=1696505776~hmac=9163cd9c16a7621afb080a958d538929ead3b1c328b80fe9546a00ca88a4ac74",
  // },
];
const HomeHero = () => {
  return (
    <div className=" bg-primary-foreground">
      <MaxWidthWrapper>
        <div className=" w-full flex flex-col items-center justify-center py-9 gap-9">
          <div className="w-full text-center font-extrabold xl:text-[3rem] lg:text-[2.7rem] sm:text-[2.5rem] text-[2rem] shadow-white drop-shadow-2xl">
            Truck Dispatch Company
          </div>
          <MaxWidthWrapper className="flex sm:justify-between sm:flex-row flex-col items-center sm:gap-0 gap-9 py-5">
            <div className="flex flex-col justify-center items-center  gap-7">
              <Image
                src="/pngs/cargo-truck.png"
                width={80}
                height={80}
                quality={100}
                alt=""
              />

              <div className=" text-3xl font-extrabold text-primary">
                <NumberCounter
                  start={50}
                  end={100}
                  duration={2000}
                  symbol="+"
                />
              </div>
              <div className=" text-xl font-bold text-center ">
                Shipments Completed
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  gap-7">
              <Image
                src="/pngs/group.png"
                width={80}
                height={80}
                quality={100}
                alt=""
              />
              <div className=" text-3xl font-extrabold text-primary">
                <NumberCounter start={0} end={100} duration={2000} symbol="+" />
              </div>
              <div className=" text-xl font-bold text-center ">
                Satisfied Customers
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  gap-7">
              <Image
                src="/pngs/revenue.png"
                width={80}
                height={80}
                quality={100}
                alt=""
              />
              <div className=" text-3xl font-extrabold text-primary">
                <NumberCounter
                  start={0}
                  end={50}
                  duration={2000}
                  symbol="K$ +"
                />
              </div>
              <div className=" text-xl font-bold text-center ">
                Revenue Generated
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
        <hr className="w-full h-1 border-t border-gray-200 dark:border-gray-700" />
        {/* ======================================================== */}
        <div className="flex flex-col justify-center items-center py-9 gap-7">
          <div className="flex flex-col justify-center items-center gap-7">
            <div className="w-full text-center font-extrabold xl:text-[3rem] lg:text-[2.7rem] sm:text-[2.5rem] text-[2rem] shadow-white drodiv-shadow-2xl">
              About US
            </div>
            <MaxWidthWrapper>
              <p className="sm:text-center text-justify text-lg mt-6">
                We are a dedicated truck dispatching company, specializing in
                supporting owner-operators by connecting them with profitable
                freight loads. Our comprehensive services handle everything from
                load sourcing and negotiations to paperwork and scheduling,
                allowing you to concentrate solely on driving. At the heart of
                our mission is a commitment to simplifying your trucking
                experience, ensuring your peace of mind, and enhancing your
                financial success.
              </p>
            </MaxWidthWrapper>
            <Link
              href="/"
              className={buttonVariants({
                size: "lg",
              })}
            >
              Get Started <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
        </div>
        <hr className="w-full h-1 border-t border-gray-200 dark:border-gray-700" />
        {/* ======================================================== */}

        <div className="flex flex-col justify-center items-center py-9 gap-7">
          <div className="w-full text-center font-extrabold xl:text-[3rem] lg:text-[2.7rem] sm:text-[2.5rem] text-[2rem] shadow-white drop-shadow-2xl">
            Services We Provide
          </div>
          <ServicesGrid services={services}></ServicesGrid>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HomeHero;
