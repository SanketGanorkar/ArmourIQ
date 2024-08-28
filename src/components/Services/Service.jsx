import React from "react";
import img from "/assets/ServiceBg.jpg";
import { services } from "../../data/services.js";
import { FaCheck } from "react-icons/fa";
import Footer from "./../Footer.jsx";
import { useNavigate, useParams, Link } from "react-router-dom";
import Contact from "./Contact/ContactD.jsx";

function Service(props) {
  const { param } = useParams();
  const navigate = useNavigate();
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
    <div className="overflow-x-hidden">
      <div className="relative ">
        <div className="bg-[rgba(0,74,173,1.00)] h-[260px] "></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl md:text-[45px] text-white font-semibold mt-[80px] max-sm:mt-[70px] max-sm:text-3xl">
            {services[param].topic}
          </div>
        </div>
      </div>
      {/* opacity-65 */}
      <div className="content">
        <div className="intro">
          <div className="flex flex-col">
            <div className="img-div">
              <img
                src={`../assets${services[param].image}`}
                className="image-in-service"
              />
            </div>
            <div className="intro-left">
              <div className="heading">
                {services[param].heading1} <br className="hidden sm:block" />{" "}
                {services[param].heading2}
              </div>
              <p className="intro-content">{services[param].content}</p>
            </div>
          </div>
          <div className="bg-[#F6F5F5] h-auto w-[400px] rounded-[15px] border-black border-[1px] max-sm:ml-5 mr-[140px] max-sm:w-[370px]">
            <div className="flex flex-col mt-3 ">
              <h2 className="text-black font-semibold ml-6 text-2xl">
                Our Services
              </h2>
              <div className="mt-2 ml-6 flex flex-col mb-3 mr-4">
                <div className=" h-auto w-[320px] flex flex-col">
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
            </div>
          </div>
        </div>
        <div className="from-approach">
          <h1 className="md:ml-8 text-black text-3xl font-bold ml-8 mt-8 max-sm:ml-2 max-sm:mb-2">
            {services[param].approaches.head}
          </h1>
          {services[param].benefits && (
            <div className="md:mx-8 mt-5 p-6 rounded-lg shadow-sm bg-[#F6F5F5] md:w-[70%]">
              <ul className="pt-1 md:ml-4 ml-4 text-black list-disc-custom">
                {services[param].approaches.data?.map((item, index) => (
                  <li
                    className=" text-base sm:text-lg mb-4 max-sm:ml-2 text-black max-sm:mt-3 flex items-center list-disc gap-2"
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
            </div>
          )}

          {/* Original  */}
          <h1 className="key-benefit text-black text-3xl font-bold mt-8 max-sm:mb-2">
            {services[param].benefits.head}
          </h1>
          {services[param].benefits && (
            <div className="benefits-container bg-white p-6 border rounded-lg shadow-sm">
              <ul className="benefits-list">
                {services[param].benefits.data.map((item, index) => (
                  <li
                    className="benefits-item text-base sm:text-lg mb-4 max-sm:ml-2 text-black max-sm:mt-3 flex items-start"
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
            </div>
          )}

          <div className="flex flex-col bg-white">
            {services[param].extra &&
              services[param].extra.map((item, index) => (
                <div key={index}>
                  <h1 className="extra-content mt-12">{item.head}</h1>
                  <p className="extra-con-para">{item.content}</p>
                </div>
              ))}
          </div>
          <div className="contact-in-services flex flex-col ">
            <div className="lg:w-[60%]">
              <p className="extra-con-para">{services[param].getInTouch}</p>
            </div>
          </div>
          <div className="p-10 pt-0 lg:mt-2 flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl max-sm:text-2xl">
              Frequently Asked Questions
            </h1>
            <h3 className="font-normal text-xl text-gray-500 mt-2">
              Your Queries, Our Answers
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mt-5">
              {services?.[param]?.faq?.map((faqItem, index) => (
                <details key={index} className="mb-5" name="accordian">
                  <summary className="font-bold text-xl cursor-pointer">
                    {faqItem.question}
                  </summary>
                  <p className="text-gray-500">{faqItem.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="flex flex-row mt-10 lg:px-1 ml-7 max-sm:ml-1 max-sm:flex-col">
            <div>
              <button className="bg-black text-white w-[105px] text-center rounded-sm p-1">
                Get Started
              </button>
              <p className="mt-2 md:w-full w-full">
                {services[param].getStarted}
              </p>
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
