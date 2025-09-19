import React from "react";
import {
  BookMinusIcon,
  ChevronDownIcon,
  Clock,
  Cross,
  Mail,
  Menu,
  Phone,
  User,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function Navbar() {
  return (
    <div className="bg-primary sticky top-0 z-50">
      <div className="w-full bg-white rounded-tl-[70px] py-5 ">
        <div className="w-[90%] mx-auto flex gap-3 items-center justify-between">
          <div className="flex-1">
            <Image
              src="/M_logo.png"
              width={300}
              height={200}
              alt="Picture of the college"
            />
          </div>
          <div className="hidden xl:flex gap-6 items-center font-semibold ">
            <Link href={"#"} className="hover:text-primary">
              HOME
            </Link>
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer flex items-center hover:text-primary">
                ABOUT <ChevronDownIcon className="mt-1" />
              </HoverCardTrigger>
              <HoverCardContent className={"min-w-max"}>
                <ul className="flex flex-col gap-2">
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Mahabodhi Paper
                    Presentation
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Principal
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Secretary
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> President
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Our Mission
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Bank Detail
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" />
                    Staff-Salary-Sheet
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Government Grant
                    (Anudan)
                  </li>
                </ul>
              </HoverCardContent>
            </HoverCard>
            <Link href={"#"} className="hover:text-primary">
              NOTICE
            </Link>
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer text-nowrap flex items-center hover:text-primary">
                STUDENT CORNER <ChevronDownIcon className="mt-1" />
              </HoverCardTrigger>
              <HoverCardContent className={"min-w-max"}>
                <ul className="flex flex-col gap-2">
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Course
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Scholorship
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Facilities
                  </li>
                </ul>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger className="cursor-pointer flex items-center hover:text-primary">
                FACULTIES <ChevronDownIcon className="mt-1" />
              </HoverCardTrigger>
              <HoverCardContent className={"min-w-max"}>
                <ul className="flex flex-col gap-2">
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Teaching Staff
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> Non-Teaching
                    Staff
                  </li>
                  <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                    <BookMinusIcon className="text-primary" /> State Govt. Grant
                    (Anudan)
                  </li>
                </ul>
              </HoverCardContent>
            </HoverCard>
            <Link href={"#"} className="hover:text-primary">
              GALLERY
            </Link>
            <Link href={"#"} className="hover:text-primary">
              CONTACT
            </Link>
            <Link
              href={"#"}
              className="bg-primary px-4 py-3 text-white rounded-md text-nowrap"
            >
              ENQUIRY NOW
            </Link>
          </div>
          <Popover>
            <PopoverTrigger>
              <span className="block xl:hidden cursor-pointer bg-primary p-2 rounded text-white">
                <Menu />
              </span>
            </PopoverTrigger>
            <PopoverContent
              align="start"
              sideOffset={8}
              className="w-[400px] sm:w-[650px]"
            >
              <div className="flex flex-col items-start p-4 font-semibold">
                <Link
                  href={"#"}
                  className="w-full bg-[#E8F8F9] p-3 flex items-center justify-center mb-3"
                >
                  <Image
                    src="/M_logo.png"
                    width={200}
                    height={100}
                    alt="Picture of the college"
                  />
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-primary bg-gray-200 w-full p-2"
                >
                  HOME
                </Link>
                <HoverCard>
                  <HoverCardTrigger className="p-2 cursor-pointer flex items-center hover:text-primary">
                    ABOUT <ChevronDownIcon className="mt-1" />
                  </HoverCardTrigger>
                  <HoverCardContent className="min-w-max">
                    <ul className="flex flex-col gap-2">
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Mahabodhi
                        Paper Presentation
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Principal
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Secretary
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> President
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Our Mission
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Bank Detail
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" />
                        Staff-Salary-Sheet
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Government
                        Grant (Anudan)
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
                <Link
                  href={"#"}
                  className="hover:text-primary bg-gray-200 w-full p-2"
                >
                  NOTICE
                </Link>
                <HoverCard>
                  <HoverCardTrigger className="cursor-pointer p-2 flex items-center hover:text-primary text-nowrap">
                    STUDENT CORNER <ChevronDownIcon className="mt-1" />
                  </HoverCardTrigger>
                  <HoverCardContent className="min-w-max">
                    <ul className="flex flex-col gap-2">
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Course
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Scholarship
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Facilities
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger className="cursor-pointer flex items-center hover:text-primary bg-gray-200 w-full p-2">
                    FACULTIES <ChevronDownIcon className="mt-1 " />
                  </HoverCardTrigger>
                  <HoverCardContent className="min-w-max">
                    <ul className="flex flex-col gap-2">
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Teaching
                        Staff
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> Non-Teaching
                        Staff
                      </li>
                      <li className="flex gap-2 font-semibold cursor-pointer hover:text-primary">
                        <BookMinusIcon className="text-primary" /> State Govt.
                        Grant (Anudan)
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
                <Link href={"#"} className="hover:text-primary p-2">
                  GALLERY
                </Link>
                <Link
                  href={"#"}
                  className="hover:text-primary bg-gray-200 w-full p-2"
                >
                  CONTACT
                </Link>
                <Link
                  href={"#"}
                  className="bg-primary px-4 py-3 text-white rounded-md mt-2"
                >
                  ENQUIRY NOW
                </Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
