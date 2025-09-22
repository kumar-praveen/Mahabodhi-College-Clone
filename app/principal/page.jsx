import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PrincipalPage = () => {
  return (
    <>
      <div className="w-full h-[211px] bg-[#0F2239] ">
        <div className="w-full h-full bg-[url(/breadcumb.png)] bg-center bg-cover flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
              FROM PRINCIPAL'S DESK
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
                    Principal's Desk
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
              src={"/PRINCIPAL.jpg"}
              width={406}
              height={495}
              alt="principal_image"
              className="w-full h-auto object-contain rounded-md"
            />
          </div>

          <div className="max-w-4xl">
            <div className="flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-6 lg:flex-row justify-between">
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl sm:text-4xl font-bold">
                    Dr. Arvind Kumar
                  </h1>
                  <span className="text-primary">
                    Principal, Mahabodhi College, Gaya
                  </span>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="#"
                    className="w-[40px] h-[40px] p-2 border text-gray-600 hover:bg-primary hover:text-white rounded-sm transition delay-100 duration-500 ease-in-out"
                  >
                    <Facebook />
                  </Link>

                  <Link
                    href="#"
                    className="w-[40px] h-[40px] p-2 border  text-gray-600 hover:bg-primary hover:text-white rounded-sm transition delay-100 duration-500 ease-in-out"
                  >
                    <Twitter />
                  </Link>

                  <Link
                    href="#"
                    className="w-[40px] h-[40px] p-2 border  text-gray-600 hover:bg-primary hover:text-white rounded-sm transition delay-100 duration-500 ease-in-out"
                  >
                    <Instagram />
                  </Link>

                  <Link
                    href="#"
                    className="w-[40px] h-[40px] p-2 border  text-gray-600 hover:bg-primary hover:text-white rounded-sm transition delay-100 duration-500 ease-in-out"
                  >
                    <Linkedin />
                  </Link>
                </div>
              </div>

              <div className="w-full">
                <p className="deem text-wrap text-justify">
                  You are most welcome to the premier and prestigious college of
                  the Magadh Region. I recommend you, on your taking admission
                  to Mahabodhi college, Belaganj and assure of all possible help
                  to secure and safeguard your future. In the degree level
                  University Examinations also, we have been the foremost. In
                  Sports and extracurricular activities. We believe that
                  complete development of a student into a holistic person
                  requires active participation of the parents too. Thus the
                  institution is in constant touch with parents informing them
                  about the performance of their wards through correspondence
                  and dialogues.
                </p>
              </div>

              <div className="w-full flex flex-col lg:flex-row items-center sm:items-start gap-4 p-6 border-b border-t lg:items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link
                    href="#"
                    className="w-11 h-11 bg-primary text-white rounded-full p-2 flex justify-center items-center"
                  >
                    <Phone />
                  </Link>
                  <div className="flex flex-col text-sm">
                    <span className="deem ">
                      Call us : Mon – Sat : 10:00 - 17:00
                    </span>
                    <span className="font-semibold deem">+91-9546609517</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link
                    href="#"
                    className="w-11 h-11 bg-primary text-white rounded-full p-2 flex justify-center items-center"
                  >
                    <Mail />
                  </Link>
                  <div className="flex flex-col text-sm">
                    <span className="deem ">E-mail:</span>
                    <span className="font-semibold deem">
                      Principalmahabodhicollege@gmail.com
                    </span>
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

export default PrincipalPage;
