import React, { useEffect, useRef, useState } from "react";
import { services } from "../../data/services.js";
import { FaCheck } from "react-icons/fa";
import Footer from "./../Footer.jsx";
import { useParams, Link } from "react-router-dom";
import Contact from "./Contact/ContactD.jsx";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

function Service() {
  const { param } = useParams();
  const expRef = useRef(null);

  const [marginBottom, setMarginBottom] = useState(100);


  const changeMargin = () => {
    if (expRef.current) {
      setMarginBottom(expRef.current.clientHeight ? expRef.current.clientHeight + 5 : 100);
    }
  }
  const [openApproach, setOpenApproach] = useState({
  });

  useEffect(() => {
    changeMargin();
    console.log(expRef.current ? expRef.current.clientHeight : "unde");
  }, [openApproach]);

  const sidebar = [
    {
      id: 1,
      title: "Cloud Security",
      path: "/services/cloud",
    },
    {
      id: 2,
      title: "Mobile Security",
      path: "/services/mobile",
    },
    {
      id: 3,
      title: "Application Security",
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
      title: "SOC & MDR Services",
      path: "/services/soc",
    },
    {
      id: 7,
      title: "Cyber Security Maturity",
      path: "/services/maturity",
    },
    {
      id: 8,
      title: "Virtual CISO as a Service",
      path: "/services/virtual",
    },
    {
      id: 9,
      title: "Security Awareness",
      path: "/services/awareness",
    },
  ];



  useEffect(() => {
    setOpenApproach({
    })
  }, [param])


  const handleClick = (ind, content) => {
    if (openApproach.number === ind) {
      setOpenApproach({});
    }
    else {
      setOpenApproach({
        number: ind,
        content: content
      });
    }
  }
  // ${expRef.current ? `mb-[${expRef.current.clientHeight}px]` : ""}
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
                <br className="hidden sm:block" />{" "}
                {services[param].heading2}
              </div>
              <p className="mt-0">{services[param].content}</p>
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
              className="mt-5 max-md:px-3 rounded-lg">
              <div className="md:bg[#F6F5F5] flex flex-col">
                {/* <ul className="columns-1 md:columns-2 lg:columns-3 gap-2 w-full"> */}
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-2 w-full relative">
                  {services[param].approaches.data?.map((item, index) => (
                    <li
                      className={`cursor-pointer ${index === openApproach.number ? `lg:max-[1190px]:mb-[115px]` : ""} text-base sm:text-lg ${index === 0 ? "mt-0" : "mt2"} text-black flex flex-col w-full break-inside-avoid`}
                      key={index}
                      style={{
                        marginBottom: index === openApproach.number ? `${marginBottom}px` : '0px'
                      }}
                      onClick={() => handleClick(
                        index, item.content
                      )}
                    >
                      <div className={`${index === openApproach.number ? "bg-zinc-300" : "bg-zinc-200"} h-[4rem] px-4 flex w-full items-center justify-between`}>
                        <div className="leading-loose text-pretty ">
                          <span className="font-semibold">{item.approachHead}</span>
                        </div>
                        <div>
                          {
                            openApproach.number === index &&
                            <FaArrowRightLong />
                          }
                        </div>
                      </div>
                      {index === openApproach.number &&
                        <motion.div
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ ease: "easeInOut", duration: 0.2 }}
                          style={{ transformOrigin: "top" }}
                          ref={expRef}
                          className={`bg-zinc-100 lg:absolute h-auto w-full left-0 lg:mt-[4rem] top-[${12 * index + 1}rem]`}>
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.2 }}
                            className="p-4">
                            {openApproach.content}
                          </motion.p>
                        </motion.div>}
                    </li>
                  ))}
                </ul>
                {/* <div
                  className="max-md:hidden w-full h-auto bg-white flex items-center">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    className="m-6 text-lg transition">
                    {
                      openApproach.content
                    }
                  </motion.p>
                </div> */}
              </div>
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

          {
            services[param].services_in_service && (
              <div className="my-12">
                <p className="mb-6 text-black text-3xl font-bold">
                  {
                    services[param].services_in_service.head
                  }
                </p>
                <div className={`grid ${services[param].services_in_service.data.length < 4 ? `md:grid-cols-${services[param].services_in_service.data.length}` : "md:grid-cols-4"} grid-cols-1 gap-4`}>
                  {
                    services[param].services_in_service.data.map((item, ind) => (
                      <div key={ind} className="bg-zinc-100 min-h-[10rem] px-6 py-6 flex flex-col justify-center items-center gap-3 drop-shadow-lg">
                        <p className="text-xl text-center font-semibold">
                          {item.serviceHead}
                        </p>
                        <p>
                          {item.content}
                        </p>
                      </div>
                    ))
                  }
                </div>
              </div>
            )
          }

          {services[param].extra &&
            <div id="extra" className={`grid grid-cols-1 ${services[param].extra.length === 1 ? "" : "md:grid-cols-2"} bg-white gap-10 mt-12`}>
              {services[param].extra.map((item, index) => (
                <div key={index} className="extra-cont">
                  <h1 className="extra-content">{item.head}</h1>
                  <p className="extra-con-para">{item.content}</p>
                </div>
              ))}
            </div>
          }
          <div className="contact-in-services flex flex-col ">
            <div className="lg:w-[60%]">
              <p className="extra-con-para">{services[param].getInTouch}</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-row gap-6 mt-10 max-xl:flex-col border-t-[2px] pt-8">
            <div>
              <Link to="/contact" className="bg-black text-white w-[105px] text-center rounded-sm p-1">
                Get Started
              </Link>
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


// {
//   services[param].approaches.data?.map((item, index) => (
//     <li
//       className=" text-base sm:text-lg max-sm:ml-2 text-black max-sm:mt-3 flex list-disc gap-2"
//       key={index}
//     >
//       {/* <div className="bg-black rounded-full h-[6px] w-[6px]"></div> */}
//       <div className="leading-loose text-pretty">
//         <span className="font-semibold">{item.approachHead}</span>{" "}
//         - {item.content}
//       </div>
//     </li>
//   ))
// }