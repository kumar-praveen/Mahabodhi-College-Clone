import {
  ArrowRight,
  BookAIcon,
  BookMinusIcon,
  GraduationCapIcon,
  Microscope,
  MoveRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
const categoryOptions = [
  {
    icon: (
      <Microscope
        size={45}
        className="bg-red-800 text-white p-2 rounded-full"
      />
    ),
    title: "Intermediate of Science",
    acronym: "Isc",
    redirectLink: "/Isc",
  },
  {
    icon: (
      <BookAIcon size={45} className="bg-red-800 text-white p-2 rounded-full" />
    ),
    title: "Intermediate of Arts",
    acronym: "Ia",
    redirectLink: "/IA",
  },
  {
    icon: (
      <GraduationCapIcon
        size={45}
        className="bg-red-800 text-white p-2 rounded-full"
      />
    ),
    title: "Graduation Courses",
    acronym: "UG",
    redirectLink: "/ug",
  },
  {
    icon: (
      <GraduationCapIcon
        size={45}
        className="bg-red-800 text-white p-2 rounded-full"
      />
    ),
    title: "Post Graduation",
    acronym: "PG",
    redirectLink: "/pg",
  },
];
function Categories() {
  return (
    <section className="mt-[500px] md:mt-[250px] lg:mt-[280px] xl:mt-[200px]">
      <div className="w-[90%]  mx-auto flex flex-col gap-6 md:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center md:items-start md:self-start ">
          <span className="flex gap-2 text-primary font-semibold">
            <BookMinusIcon /> COURSES CATEGORIES
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-nowrap">
            Explore Top Categories
          </h1>
          <Link
            href={"#"}
            className="flex gap-2 items-center px-4 py-3 bg-primary rounded-lg text-white w-[200px] font-semibold"
          >
            View All Gategory <MoveRight className="mt-1" />
          </Link>
        </div>
        <div className="w-full lg:w-1/2 p-5 bg-gray-50 rounded-2xl">
          <Carousel>
            <CarouselContent
              className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"}
            >
              {categoryOptions.map((item, idx) => {
                return (
                  <CarouselItem key={idx} className="basis-1/3">
                    <Card>
                      <CardHeader
                        className={"flex flex-col items-center gap-3"}
                      >
                        <span className="text-3xl">{item.icon}</span>
                        <span className="flex flex-col items-center">
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription>({item.acronym})</CardDescription>
                        </span>
                        <Button
                          size={"sm"}
                          className={"w-full cursor-pointer bg-primary"}
                        >
                          Learn More <MoveRight className="mt-1" />
                        </Button>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
export default Categories;
