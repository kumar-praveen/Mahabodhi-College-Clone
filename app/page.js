import Achievements from "@/components/Achievements";
import Categories from "@/components/Categories";
import NoticeBoard from "@/components/NoticeBoard";
import Speciality from "@/components/Speciality";
import WelcomeCompo from "@/components/WelcomeCompo";
import { Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-screen relative">
        <Image
          src="/mahabodhi_new2.jpg"
          alt="Mahabodhi Temple"
          fill={true}
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="flex w-full">
        <span className="min-w-max font-bold px-5 py-2 bg-gray-700 text-white">
          LATEST NEWS
        </span>
        <div className="w-full flex items-center bg-[#B2000C] text-white">
          <marquee>
            <div className="flex text-sm text-nowrap">
              <Link
                href="#"
                className="flex items-center gap-2 px-3 border-r-1"
              >
                <Pin /> <span>ONLINE PAYMENT ISSUE</span>
              </Link>
              <Link
                href={"#"}
                className="flex items-center gap-2 px-3 border-r-1"
              >
                <Pin />
                <span>
                  RPSIT B.A SEMESTER 1 REGISTRATION CARD (SOCIAL SCIENCE)
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 border-r-1"
              >
                <Pin />
                <span>
                  2024-28 RPSIT B.A SEMESTER 1 REGISTRATION CARD (HUMANITIES)
                </span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-3 border-r-1"
              >
                <Pin />
                <span>
                  2024-28 RPSIT B.Sc SEMESTER 1 REGISTRATION CARD (SCIENCE)
                  (2024-28)
                </span>
              </Link>
            </div>
          </marquee>
        </div>
      </div>
      <WelcomeCompo />
      <Categories />
      <Achievements />
      <NoticeBoard />
      <Speciality />
    </div>
  );
}
