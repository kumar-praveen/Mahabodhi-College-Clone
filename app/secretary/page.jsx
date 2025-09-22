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

const SecretaryPage = () => {
  return (
    <>
      <div className="w-full h-[211px] bg-[#0F2239] ">
        <div className="w-full h-full bg-[url(/breadcumb.png)] bg-center bg-cover flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
              OUR SECRETARY
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
                    Secretary
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
              src={"/Secretary.jpg"}
              width={406}
              height={429}
              alt="principal_image"
              className="h-auto object-contain rounded-md"
            />
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="text-2xl sm:text-4xl font-bold">
                  Dr. Rajendra Prasad Singh
                </h1>
                <span className="text-primary">
                  Secretary, Mahabodhi College, Gaya
                </span>
              </div>

              <p className="deem text-wrap text-justify">
                Education is the ability to meet life situations. With
                resistance and diligence laced with knowledge and intellect, one
                can soar to any extent one desires. The thrust of education at
                Mahabodhi College is not only to produce mere degree holders but
                the bright young men and women equipped enough to foray into the
                world with an all round development of personality. Our vision
                of the institutions is to impart quality education in all core
                disciplines of knowledge by developing global leaders who are
                confident, smart, intelligent, gifted and engaged with life from
                physics to football.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecretaryPage;
