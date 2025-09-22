import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const PresidentPage = () => {
  return (
    <>
      <div className="w-full h-[211px] bg-[#0F2239] ">
        <div className="w-full h-full bg-[url(/breadcumb.png)] bg-center bg-cover flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
              OUR PRESIDENT
            </h1>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className={
                      "text-white text-shadow-md sm:text-lg md:text-xl hover:text-primary"
                    }
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ArrowRight className="text-white" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="sm:text-lg md:text-xl text-white">
                    President
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <section className="w-full pt-[120px]">
        <div className="w-[90%] mx-auto p-[40px] shadow-2xl rounded-xl flex flex-col xl:flex-row gap-6">
          <div className="relative">
            <Image
              src={"/president.jpg"}
              width={406}
              height={540}
              alt="president_image"
              className="h-auto object-contain rounded-md"
            />
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl sm:text-4xl font-bold">
                  Dr. Sharda Nandan Sinha
                </h1>
                <span className="text-primary">
                  President, Mahabodhi College, Gaya
                </span>
              </div>

              <p className="deem text-wrap text-justify">
                In the competitive era of 21st century, the future will belong
                only to those talents who are able to build a strong foundation
                and have in- depth knowledge and understanding of their
                professional field. With the ever expanding frontiers of
                information and knowledge student have to learn to dive deep to
                harvest the pearls of success against all odds.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PresidentPage;
