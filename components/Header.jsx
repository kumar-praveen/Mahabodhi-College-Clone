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
export default function Header() {
  return (
    <nav className="w-full bg-primary flex flex-col justify-between">
      <div className="w-[90%] mx-auto flex flex-col gap-4 sm:flex-row items-center justify-between p-4 text-white">
        <div className="w-[90%] flex items-center gap-6 text-sm">
          <Link href={"#"} className="hidden md:flex items-center gap-2">
            <Phone /> <span>+91-9546609517</span>
          </Link>
          <Link href={"#"} className="hidden xl:flex items-center gap-2 ">
            <Mail /> mahabodhicollege.belaganj@gmail.com
          </Link>
          <Link
            href={"#"}
            className="flex gap-2 items-center animate-pulse border-b border-dashed md:border-0"
          >
            <Clock />{" "}
            <span>
              CORRECTION FORM : Student details correction form Mahabodhi
              College, Gaya
            </span>
          </Link>
        </div>
        <div className="flex flex-row gap-3 ">
          <Link
            href={"#"}
            className="min-w-max flex gap-2 border-1 px-3 py-2 border-white"
          >
            <User /> STUDENT LOGIN
          </Link>
          <Link
            href={"#"}
            className="md:hidden min-w-max flex gap-2 border-1 px-3 py-2 border-white"
          >
            <Phone /> ENQUIRY
          </Link>
        </div>
      </div>
      
    </nav>
  );
}
