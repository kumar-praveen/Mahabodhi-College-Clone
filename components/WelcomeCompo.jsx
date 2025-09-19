import { CheckCircle2, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function WelcomeCompo() {
  return (
    <section className="relative flex flex-col md:items-center gap-5">
      <div className="w-[90%] mx-auto flex flex-col gap-6 justify-between lg:flex-row items-center">
        <div className="w-full lg:w-1/2 relative flex items-center p-4">
          <div className="flex flex-row lg:flex-col">
            <Image
              src={"/NCC_PROGRAM.jpg"}
              width={"350"}
              height={"500"}
              className="rounded-xl"
              alt="NCC_PROGRAM_IMG"
            />
          </div>
          <div className="p-3 top-97 right-11 lg:top-50 lg:right-12 rounded-2xl bg-white">
            <Image
              src={"/campus_img1.jpg"}
              width={250}
              height={150}
              className="rounded-lg"
              alt="CAMPUS_IMG"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5 items-start">
          <div>
            <span className="text-lg lg:text-4xl text-primary font-semibold">
              Welcome to
            </span>
            <h1 className="text-3xl text-nowrap md:text-4xl lg:text-6xl font-bold">
              Mahabodhi College
            </h1>
          </div>
          <p className="text-gray-400">
            Mahabodhi College was established in 1980. It is a permanent
            Affiliated Unit of Magadh University Bodh Gaya and approved by the
            Bihar Government. It is a Govt. aided college. It is situated at a
            distance of 15 km from Gaya Railway Junction to Gaya Patna Highway
            Road NH 83.
          </p>
          <ul className="flex flex-col gap-3 text-md">
            <li className="flex gap-2 font-semibold">
              <CheckCircle2
                size={15}
                color="#B2000C"
                className="min-w-5 mt-1 "
              />
              Our campus is spread in more than 5 Acres of land.
            </li>
            <li className="flex gap-2 font-semibold">
              <CheckCircle2
                size={15}
                color="#B2000C"
                className="min-w-5 mt-1"
              />
              We have a library with the capacity of accommodating more than 100
              readers at a time.
            </li>
          </ul>
          <Link
            href={"#"}
            className="flex gap-2 items-center px-4 py-3 bg-[#B2000C] rounded-lg text-white cursor-pointer"
          >
            Learn More <MoveRight className="mt-1" />
          </Link>
        </div>
      </div>
      <div className="absolute p-4 top-230 sm:top-270 md:top-250 lg:top-145 lg:left-80 md:left-20 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        <div className=" p-8 rounded-2xl bg-white shadow-lg flex flex-col gap-5">
          <Image src={"/moto_1_1.png"} width={50} height={50} alt="moto_img" />
          <h2 className="text-xl text-nowrap md:text-2xl font-bold">
            Our Mission
          </h2>
          <p className="line-clamp-2">
            You are most welcome to the premier and prestigious college of
            ......
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-white shadow-lg flex flex-col gap-5">
          <Image src={"/moto_1_2.png"} width={50} height={50} alt="moto_img" />
          <h2 className="text-xl text-nowrap md:text-2xl font-bold">
            Our Vision
          </h2>
          <p className="line-clamp-2">
            The degree level Uni. Examinations also, we have...
          </p>
        </div>
        <div className="p-8 rounded-2xl bg-white shadow-lg flex flex-col gap-5">
          <Image src={"/moto_1_3.png"} width={50} height={50} alt="moto_img" />
          <h2 className="text-xl text-nowrap md:text-2xl font-bold">
            Our Goal
          </h2>
          <p className="line-clamp-2">
            We believe that complete development of a student into a holistic
            person ...
          </p>
        </div>
      </div>
    </section>
  );
}
