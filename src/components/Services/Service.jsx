import React from "react";
import { services } from "../../data/services.js";
import { FaCheck } from "react-icons/fa";
import Footer from "./../Footer.jsx";
import { useParams, Link } from "react-router-dom";
import Contact from "./Contact/ContactD.jsx";
import { motion } from "framer-motion";

function Service() {
  const { param } = useParams();
  const sidebar = [
    {
      id: 1,
      title: "Cloud security",
      path: "/services/cloud",
    },
    {
      id: 2,
      title: "Mobile security",
      path: "/services/mobile",
    },
    {
      id: 3,
      title: "Application security",
      path: "/services/application",
    },
    {
      id: 4,
      title: "Network Security",
      path: "/services/network",
    },
    {
      id: 5,
      title: "Audit & Compliance",
      path: "/services/audit",
    },
    {
      id: 6,
      title: "SOC & Services",
      path: "/services/soc",
    },
    {
      id: 7,
      title: "Maturity Assessment",
      path: "/services/maturity",
    },
    {
      id: 8,
      title: "Virtual CISO as a Service",
      path: "/services/virtual",
    },
    {
      id: 9,
      title: "Security Program",
      path: "/services/awareness",
    },
  ];
  return (
    <div className="overflow-x-hidden flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="relative w-screen">
        <div className="bg-[rgba(0,74,173,1.00)] h-[260px] "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-[45px] text-white font-semibold mt-[80px] max-sm:mt-[70px] max-sm:text-3xl">
            {services[param].topic}
          </motion.div>
        </div>
      </motion.div>
      {/* opacity-65 */}
      <div className="res-width content">
        <div className="flex max-md:flex-col gap-6 lg:gap-12 h-fit mt-6">
          <div className="flex flex-col h-fit">
            <div className="xl:h-[36rem]">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={`../assets${services[param].image}`}
                className="rounded-xl h-full w-full object-cover object-center"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="intro-left">
              <div className="heading">
                {services[param].heading1} <br className="hidden sm:block" />{" "}
                {services[param].heading2}
              </div>
              <p className="mt-4">{services[param].content}</p>
            </motion.div>
          </div>
          <div className="bg-[#F6F5F5] h-fit rounded-[15px] border-black border-[1px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
              className="flex flex-col mt-3 ">
              <h2 className="text-black font-semibold ml-6 text-2xl">
                Our Services
              </h2>
              <div className="mt-2 ml-6 flex flex-col mb-3 mr-4">
                <div className=" h-auto md:w-[320px] flex flex-col">
                  {sidebar.map((item) => (
                    <Link
                      to={item.path}
                      key={item.id}
                      className="text-white min-h-[31px] bg-[#004bae] font-semibold text-[18px] text-start mt-1 mb-3 p-3 rounded-md cursor-pointer transform transition-transform duration-300 hover:scale-105 "
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="from-approach">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
            className="text-black text-3xl font-bold mt-8 max-sm:mb-2">
            {services[param].approaches.head}
          </motion.h1>
          {services[param].benefits && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="mt-5 max-md:px-3 py-12 rounded-lg shadow-sm bg-[#F6F5F5] drop-shadow-lg">
              <ul className="pt-1 md:ml-4 ml-4 text-black list-disc-custom grid max-[868px]:grid-cols-1 grid-cols-2 gap-y-5 max-xl:gap-5 xl:px-3">
                {services[param].approaches.data?.map((item, index) => (
                  <li
                    className=" text-base sm:text-lg max-sm:ml-2 text-black max-sm:mt-3 flex list-disc gap-2"
                    key={index}
                  >
                    {/* <div className="bg-black rounded-full h-[6px] w-[6px]"></div> */}
                    <div className="leading-loose text-pretty">
                      <span className="font-semibold">{item.approachHead}</span>{" "}
                      - {item.content}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Original  */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
            className="key-benefit text-black text-3xl font-bold mt-8 max-sm:mb-2">
            {services[param].benefits.head}
          </motion.h1>
          {services[param].benefits && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="benefits-container bg-white md:p-6 border rounded-lg shadow-sm">
              <ul className="benefits-list">
                {services[param].benefits.data.map((item, index) => (
                  <li
                    className="benefits-item text-base sm:text-lg mb-4 text-black max-sm:mt-3 flex items-center"
                    key={index}
                  >
                    <FaCheck className="mr-2 mt-3 text-[#004AAD]" />
                    <div className="benefits-text">
                      <span className="font-semibold">{item.title}</span> -{" "}
                      {item.explain}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 bg-white gap-6 mt-12">
            {services[param].extra &&
              services[param].extra.map((item, index) => (
                <div key={index} className="extra-cont">
                  <h1 className="extra-content">{item.head}</h1>
                  <p className="extra-con-para">{item.content}</p>
                </div>
              ))}
          </div>
          <div className="contact-in-services flex flex-col ">
            <div className="lg:w-[60%]">
              <p className="extra-con-para">{services[param].getInTouch}</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="py-10 pt-0 mt-16 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl max-sm:text-2xl">
              Frequently Asked Questions
            </h1>
            <h3 className="font-normal text-xl text-gray-500 mt-2">
              Your Queries, Our Answers
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 w-full gap-y-5 mt-5">
              {services?.[param]?.faq?.map((faqItem, index) => (
                <details key={index} className="mb-5 mt-2" name="accordian">
                  <summary className="font-bold text-xl cursor-pointer">
                    {faqItem.question}
                  </summary>
                  <p className="text-gray-500 ml-6 text-pretty">{faqItem.answer}</p>
                </details>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-row gap-6 mt-10 max-xl:flex-col">
            <div>
              <button className="bg-black text-white w-[105px] text-center rounded-sm p-1">
                Get Started
              </button>
              <p className="mt-2 md:w-full w-full text-pretty">
                {services[param].getStarted}
              </p>
            </div>
            <div className="flex justify-center">
              <Contact />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
