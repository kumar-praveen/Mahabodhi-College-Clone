import { BookMinus } from "lucide-react";
import Image from "next/image";
import React from "react";
function Speciality() {
  return (
    <section className="w-full bg-pink-50 mt-18 pb-10">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between">
        
          <div className="w-full lg:w-1/2 flex flex-1 flex-col gap-8">
            <span className="text-primary text-xl font-semibold flex gap-2 min-w-max">
              <BookMinus className="mt-1" /> WHY CHOOSE US
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Transform Education Your Life, Change the World
            </h1>
            <div className="flex gap-3 items-start bg-white p-4 rounded-2xl">
              <Image
                src={"/wcu-icon-2-1.svg"}
                width={50}
                height={50}
                alt="speciality_img"
              />
              <div className="flex flex-col gap-3">
                <h2 className="text-lg text-nowrap lg:text-2xl font-bold hover:text-primary">
                  Mahabodhi College, Gaya
                </h2>
                <p className="deem">
                  The College has been getting very successful and grand
                  achievement in catering the job-oriented education upto
                  Graduation level in both offered disciplines - Arts and
                  Science.
                </p>
                <p className="deem">
                  The college is profusely enriched with sophisticated
                  apparatus, electronic gadgets and science labs.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-end justify-center">
            <Image
              src={"/CULTURAL_PROGRAM_2.jpg"}
              width={600}
              height={700}
              alt="cultural_program_img"
              className="rounded-2xl w-full h-auto"
            />
          </div>
      </div>
    </section>
  );
}
export default Speciality;
