import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { User } from "lucide-react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="w-full mt-[80px] p-4 bg-[#0F1B31] flex flex-col items-center justify-center">
      <div className="bg-[#202B40] rounded-2xl w-full p-8 flex flex-col lg:flex-row items-start justify-around gap-25">
        <div className="w-full lg:w-1/4">
          <div className=" flex flex-col gap-4">
            <Image src={"/M_Logo.png"} width={500} height={100} alt="logo" />
            <p className="text-gray-400">
              Mahabodhi College was established in 1980. It is a permanent
              Affiliated Unit of Magadh University Bodh Gaya and approved by the
              Bihar Government.
            </p>
            <hr className="underline decoration-dotted" />
            <p className="text-gray-400">Our College Location:</p>
            <p className="text-white font-bold cursor-pointer hover:text-[#B2000C]">
              Shekhpura,Nehalpur, Belaganj, Gaya, Bihar - 804403
            </p>
            <Button className={" max-w-min flex gap-2 font-semibold bg-[#B2000C]"}>
              <User className="" /> STUDENT LOGIN
            </Button>
          </div>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-5">
          <h2 className="text-white text-2xl font-bold">Quick Links</h2> <hr />
          <ul className="flex flex-col gap-3 text-gray-400 list-disc">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
            <li>
              <Link href={"#"}>Course</Link>
            </li>
            <li>
              <Link href={"#"}>Notice</Link>
            </li>
            <li>
              <Link href={"#"}>Scholarship</Link>
            </li>
            <li>
              <Link href={"#"}>Gallery</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-5">
          <h2 className="text-white text-2xl font-bold">Facilities</h2> <hr />
          <ul className="flex flex-col gap-3 text-gray-400 list-disc">
            <li>
              <Link href={"#"}>NCC/NSS</Link>
            </li>
            <li>
              <Link href={"#"}>Labs</Link>
            </li>
            <li>
              <Link href={"#"}>Sports</Link>
            </li>
            <li>
              <Link href={"#"}>Classes</Link>
            </li>
            <li>
              <Link href={"#"}>Facilities</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-5">
          <h2 className="font-bold text-2xl text-white">Get In Touch!</h2>
          <hr />
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-400">
              Call us : Mon – Sat : 10:00 - 17:00
            </span>
            <Link
              href={"#"}
              className="text-xl font-bold text-white hover:text-[#B2000C]"
            >
              +91-9546609517
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-400">Technical Support</span>
            <span className="text-xl font-bold text-white hover:text-[#B2000C]">
              +91-8864096160
            </span>
            <Link
              href={"#"}
              className="text-xl font-bold text-white hover:text-[#B2000C]"
            >
              helpmahabodhi@gmail.com
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-400">Email us :</span>
            <Link
              href={"#"}
              className="text-base md:text-sm xl:text-lg font-bold text-white hover:text-[#B2000C]"
            >
              mahabodhicollege.belaganj@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[95%] mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between text-gray-400 p-4">
        <div className="flex flex-col md:flex-row items-center md:gap-2">
          <p className="text-nowrap flex gap-1 items-center text-xs md:text-base">
            &copy; {new Date().getFullYear()}
            <span className="text-white font-bold">
              Mahabodhi College, Gaya
            </span>
            All Rights Reserved. Powered By
          </p>
          <Link href={"#"}>
            <Image
              src={"/developer_logo.png"}
              width={100}
              height={50}
              alt="developer_logo"
            />
          </Link>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-5 items-center">
            <li>
              <Link href={"#"} className="font-semibold hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href={"#"} className="font-semibold hover:text-white">
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link href={"#"} className="font-semibold hover:text-white">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
