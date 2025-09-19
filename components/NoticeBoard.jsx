import React from "react";
import Image from "next/image";
import { ArrowRight, BookMinus } from "lucide-react";
import { Button } from "./ui/button";
function NoticeBoard() {
  return (
    <section className="w-full relative flex justify-center items-center">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-20 lg:gap-6 items-center justify-between">
        <div className="w-full lg:w-1/2  flex flex-col gap-5">
          <Image
            src="/home-img.jpg"
            alt="campus_img"
            width={613}
            height={455}
            className="rounded-2xl h-[455px] object-cover"
          />
          <button
            className={
              "flex self-end md:mr-72 lg:mr-15 gap-3 text-white rounded-md bg-primary py-4 px-6"
            }
          >
            View Notice <ArrowRight className="mt-1" />
          </button>
        </div>
        <div className=" w-full lg:w-1/2 flex flex-col gap-2 ">
          <span className="text-primary text-xl font-semibold flex gap-2">
            <BookMinus className="mt-1" /> Notice Board
          </span>
          <h1 className="text-2xl lg:text-4xl font-bold">Latest Notice</h1>
          <p className="deem">
            The college is highly fit for competing the challenges of
            quality-based education under the incredible guidance of Dr. Arvind
            Kumar who is very dynamic and energetic Principal of this college.
          </p>
          <div className="flex gap-6 mt-6">
            <div className="shadow-lg w-1/6 flex flex-col items-center justify-center bg-primary">
              <h1 className="text-3xl text-white font-bold bg-primary">10</h1>
              <h2 className="bg-white w-full text-center">Sep 2025</h2>
            </div>
            <div className="shadow-lg w-5/6 text-xl font-bold flex items-center px-3">
              Online Payment Issue
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white absolute left-0 top-80 rounded-2xl flex flex-col gap-5 animate-bounce duration-1000 shadow-lg">
        <h2 className="text-2xl font-bold">
          <span className="text-primary">10k+</span> Active Students
        </h2>
        <Image
          src={"/student-group_1_1.png"}
          width={150}
          height={50}
          alt="student_group_img"
        />
      </div>
    </section>
  );
}
export default NoticeBoard;
