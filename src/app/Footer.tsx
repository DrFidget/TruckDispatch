import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import { BsTelephoneInbound } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className=" w-full h-fit bg-secondary-foreground flex flex-col gap-2">
      <MaxWidthWrapper className=" h-full">
        <div className=" h-full  w-full flex md:justify-between justify-center flex-wrap">
          <div className=" sm:max-w-sm w-full h-fit text-white flex flex-col  pt-10 pb-20 gap-5 relative px-5">
            <Link href="/" className="flex z-40 font-semibold w-fit">
              <span className="md:text-2xl text-lg">
                <span className="text-primary font-bold ">Octane</span>
                -DSP
              </span>
            </Link>
            <p className="text-justify md:text-xl text-lg ">
              Simplify Your Trucking Experience with Our Comprehensive
              Dispatching Services.
            </p>
            <div className="w-full absolute bottom-1 flex justify-start  gap-10 ">
              <Link href="https://twitter.com/" className="hover:primary">
                <Image
                  alt="twitter"
                  src="/SocialMedia/twitter.png"
                  height={30}
                  width={30}
                  quality={100}
                />
              </Link>
              <Link href="https://facebook.com/" className="hover:primary">
                <Image
                  alt="twitter"
                  src="/SocialMedia/facebook.png"
                  height={30}
                  width={30}
                  quality={100}
                />
              </Link>
              <Link href="https://instagram.com/" className="hover:primary">
                <Image
                  alt="twitter"
                  src="/SocialMedia/instagram.png"
                  height={30}
                  width={30}
                  quality={100}
                />
              </Link>
              <Link href="https://www.linkedin.com/" className="hover:primary">
                <Image
                  alt="twitter"
                  src="/SocialMedia/linkedin.png"
                  height={30}
                  width={30}
                  quality={100}
                />
              </Link>
            </div>
          </div>
          <div className=" sm:w-96 w-full  h-fit text-white pt-10  pb-14 relative">
            {/* <p>Links :</p> */}
            <div className="flex flex-col ps-5 gap-5">
              <Link href="" className="w-fit">
                •Home
              </Link>
              <Link href="" className="w-fit">
                •Services
              </Link>
              <Link href="" className="w-fit">
                •Contact Us
              </Link>
              <Link href="" className="w-fit">
                •FAQs
              </Link>
            </div>
          </div>
          <div className="sm:max-w-sm w-full h-fit text-white flex flex-col py-10 gap-5 sm:px-0 px-5">
            <div className="flex gap-5 items-center ">
              <BiLogoGmail color="white" size="30" />
              <Link href="" className=" sm:text-lg text-sm ">
                OctainDespatchService@gmail.com
              </Link>
            </div>
            <div className="flex gap-5 items-center ">
              <BsTelephoneInbound color="white" size="28" />
              <Link href="" className=" sm:text-lg text-sm ">
                +1-000-0000000
              </Link>
            </div>
            <div className="flex gap-5 items-center ">
              <VscLocation color="white" size="33" />
              <Link href="" className=" sm:text-lg text-sm ">
                123 Main Street, Anytown, USA 12345
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className=" text-white">
        <p className="text-sm w-full text-right px-4 py-2">
          &copy; {new Date().getFullYear()} Octane-DSP. All rights reserved.
        </p>
      </div>
    </div>
  );
};
{
  /* <Link href="https://twitter.com/example">
              <p className="text-xl hover:text-blue-500">Twitter</p>
            </Link>
            <Link href="https://facebook.com/example">
              <p className="text-xl hover:text-blue-500">Facebook</p>
            </Link>
            <Link href="https://instagram.com/example">
              <p className="text-xl hover:text-blue-500">Instagram</p>
            </Link> */
}
