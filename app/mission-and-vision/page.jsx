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

const MissionAndVisionPage = () => {
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
                    Mission And Vision
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <section className="w-full pt-[120px]">
        <div className="w-[90%] mx-auto p-[40px] shadow-2xl rounded-xl flex flex-col items-center lg:flex-row gap-6">
          <div className="w-full lg:w-1/2 relative">
            <Image
              src={"/vision.jpg"}
              width={561}
              height={262}
              alt="mission_and_vision_image"
              className=" h-auto object-contain rounded-md"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col justify-between gap-8">
              <h1 className="text-2xl sm:text-4xl font-bold">
                Our <span className="text-primary">Mission & Vission</span>
              </h1>

              <p className="deem text-wrap text-justify">
                You are most welcome to the premier and prestigious college of
                the Magadh Region. I recommend you, on your taking admission to
                Mahabodhi college, Belaganj and assure of all possible help to
                secure and safeguard your future. In the degree level University
                Examinations also, we have been the foremost. In Sports and
                extracurricular activities. We believe that complete development
                of a student into a holistic person requires active
                participation of the parents too. Thus the institution is in
                constant touch with parents informing them about the performance
                of their wards through correspondence and dialogues.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionAndVisionPage;
