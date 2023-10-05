import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HomeHero from "@/components/Home/HomeHero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between">
        <div className="relative w-full h-full">
          <div className="absolute -z-10 w-full h-full">
            <Image
              src="/a3.jpeg"
              alt="TRUCK"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>

          <div className="my-12 h-full">
            <MaxWidthWrapper>
              <h1 className="w-1/3 text-white font-black xl:text-[5rem] lg:text-[4.5rem] md:text-[4rem] text-[3.5rem] shadow-white drop-shadow-2xl py-auto text-left">
                <span className=" text-primary">OCTANE </span>
                TRUCK DISPATCH SERVICE
              </h1>
            </MaxWidthWrapper>
          </div>
        </div>
      </div>
      <HomeHero />
    </>
  );
}
