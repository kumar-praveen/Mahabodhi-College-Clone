"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ArrowRight, Loader2, Text } from "lucide-react";
import { User, Mail, Phone, Pencil, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoader(true);
      const response = await axios.post("/api/contact", form);
      console.log(response);

      if (response.data.success) {
        toast.success(response.data.message || "Message Sent Successfully");
      }
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
      console.log(error);
    } finally {
      setLoader(false);
      setForm({ name: "", email: "", subject: "", phone: "", message: "" });
    }
  };

  return (
    <>
      <div className="w-full h-[211px] bg-[#0F2239] ">
        <div className="w-full h-full bg-[url(/breadcumb.png)] bg-center bg-cover flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-white">
            <h1 className="text-xl sm:text-2xl md:text-5xl font-bold">
              CONTACT US
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
                    Contact
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>

      <section className="w-full pt-[120px] ">
        <div className="w-[90%] mx-auto flex flex-col">
          <div className="w-full h-[300px] md:h-[600px] rounded-sm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9622897467516!2d84.98240997482894!3d24.93335454233788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2d39e7d14cf49%3A0x45e2397d5a9fb4d4!2sMahabodhi%20College!5e0!3m2!1sen!2sin!4v1758366603857!5m2!1sen!2sin"
              width={"100%"}
              height={"100%"}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex gap-10 flex-col lg:flex-row items-center lg:items-start justify-between mt-[80px]">
            <div className="w-full">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How can I apply for admission?
                    </AccordionTrigger>
                    <AccordionContent>
                      You can apply online through our official website or visit
                      the campus admission office.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      What courses are available?
                    </AccordionTrigger>
                    <AccordionContent>
                      We offer undergraduate, postgraduate, and diploma courses
                      across multiple disciplines.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      How do I contact support?
                    </AccordionTrigger>
                    <AccordionContent>
                      You can use this form to send us a message or call our
                      support helpline for quick assistance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="w-full lg:relative">
              <div className="w-full lg:absolute  lg:-top-64">
                <div className="w-full mx-auto bg-white rounded-2xl shadow-lg p-8">
                  <h5 className="text-primary font-semibold uppercase tracking-wide mb-2">
                    Contact with us!
                  </h5>
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">
                    Get in Touch
                  </h2>
                  <p className="text-gray-500 mb-6">MahabodhiCollege</p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name*"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                        <User
                          className="absolute left-3 top-3.5 text-gray-400"
                          size={18}
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address*"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                        <Mail
                          className="absolute left-3 top-3.5 text-gray-400"
                          size={18}
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 text-gray-400 rounded-lg py-3 pl-10 pr-10 appearance-none focus:ring-2 focus:ring-red-500 focus:outline-none z-50"
                        >
                          
                            <option value="">Select Subject*</option>
                            <option value="admission">Admission</option>
                            <option value="course">Course Info</option>
                            <option value="support">Support</option>
                          
                        </select>
                        <Text
                          className="absolute left-3 top-3.5 text-gray-400"
                          size={18}
                        />
                        <ChevronDown
                          className="absolute right-3 top-3.5 text-gray-400 z-10"
                          size={18}
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number*"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
                        />
                        <Phone
                          className="absolute left-3 top-3.5 text-gray-400"
                          size={18}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="relative">
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Write Your Message*"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg py-3 pl-10 pr-3 focus:ring-2 focus:ring-red-500 focus:outline-none"
                      />
                      <Pencil
                        className="absolute left-3 top-3.5 text-gray-400"
                        size={18}
                      />
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
                      disabled={loader}
                    >
                      {loader ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="animate-spin" />
                          Sending....
                        </span>
                      ) : (
                        "SEND MESSAGE →"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
