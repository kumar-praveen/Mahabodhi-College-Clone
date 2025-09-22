import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight, BookMinus, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ScholarshipPage = () => {
  return (
    <>
      <div className="w-full h-[211px] bg-[#0F2239] ">
        <div className="w-full h-full bg-[url(/breadcumb.png)] bg-center bg-cover flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-xl sm:text-2xl md:text-5xl font-bold">
              SCHOLARSHIP
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
                    Scholarship
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
      <section className="w-full relative pt-[120px]">
        <div className="w-[90%] absolute left-20 mx-auto hidden lg:flex items-center justify-between scholarship z-10">
          <Image
            src={"/degree_cap_img.png"}
            width={170}
            height={99}
            alt="degree_cap"
          />

          <Image
            src={"/globe_icon.png"}
            width={74}
            height={108}
            alt="degree_cap"
            className="z-50"
          />
        </div>
        <div className="w-[90%] mx-auto p-[40px] shadow-2xl rounded-xl flex flex-col xl:flex-row gap-20">
          <div className="relative self-center xl:self-start">
            <Image
              src={"/Sch.jpg"}
              width={360}
              height={540}
              alt="scholarship_imag"
              className="h-auto object-contain rounded-md "
            />
          </div>

          <div className="max-w-3xl">
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl sm:text-4xl font-bold">
                  Scholarship is also allowed for this College
                </h1>
                <span className="text-primary">Mahabodhi College, Gaya</span>
              </div>

              <p className="deem text-wrap text-justify">
                College also has facility to provide bihar scholarship for all
                OBC and SC & ST & Minority students. Schemes are implemented for
                educational, economic and social development of Backward Class &
                Extremely Backward Class under BC & EBC Welfare Department. The
                important schemes are as follows:
              </p>

              <div className="flex flex-col gap-3">
                <h1 className="flex items-center gap-1 text-lg md:text-2xl font-semibold">
                  <BookMinus className="text-primary" />{" "}
                  <span className="underline">Post Matric Scholarship</span>
                </h1>
                <p className="deem text-wrap text-justify">
                  This Scheme is implemented under the guidelines of Social
                  Justice and Empowerment Ministry of Govt. of India. All
                  Backward Class and Extremely Backward Class students of Bihar
                  pursuing recognized post matriculation courses in India in
                  recognized institutions can get the scholarship provided their
                  parents/ guardian's income is not more than Rs. 1.00 lakhs (
                  one lakhs ) per annum.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <h1 className="flex lg:items-center gap-1 text-lg md:text-2xl font-semibold  lg:text-nowrap">
                  <BookMinus className="text-primary min-w-max mt-1 lg:mt-0" />{" "}
                  <span className="underline">
                    More Information can be obtained from Below mentioned
                    Website:-
                  </span>
                </h1>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="w-5 h-5 flex items-center justify-center bg-primary rounded">
                      <Check className="text-white font-bold" />{" "}
                    </span>
                    <Link href={"#"} className="hover:text-[#4d5765]">
                      http://bcebcwelfare.bih.nic.in
                    </Link>
                  </div>

                  <div className="flex items-center gap-2 text-primary">
                    <span className="w-5 h-5 flex items-center justify-center bg-primary rounded">
                      <Check className="text-white font-bold" />{" "}
                    </span>
                    <Link href={"#"} className="hover:text-[#4d5765]">
                      http://socialjustice.nic.in
                    </Link>
                  </div>

                  <div className="flex items-center gap-2 text-primary">
                    <span className="w-5 h-5 flex items-center justify-center bg-primary rounded">
                      <Check className="text-white font-bold" />{" "}
                    </span>
                    <Link href={"#"} className="hover:text-[#4d5765]">
                      http://scholarships.gov.in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScholarshipPage;
