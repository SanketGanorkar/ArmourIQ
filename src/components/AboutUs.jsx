import { MdOutlineEmail } from "react-icons/md";
import about from "../../public/assets/about.jpeg";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { IoPeopleSharp, IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import cybersec_tem from "../../public/assets/cybersec_team.jpg";
import { GrIntegration, GrShieldSecurity } from "react-icons/gr";
import cybersec_engineer from "/assets/cybersec_engineer.jpg";
import { BsBullseye } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import CountUp from "react-countup";
import Team from "./Team.jsx";
import { useState } from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    const templateParams = {
      from_name: name,
      from_email: email,
      from_message: message,
      from_subject: subject,
      from_number: number,
      to_name: "Ashutosh",
      message: message,
    };
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "" || email === "" || message === "" || number === "") {
      window.alert("All fields are required!");
      return;
    }

    if (!emailRegex.test(email)) {
      window.alert("Enter valid email address!");
      return;
    }

    emailjs
      .send(serviceId, templateID, templateParams, publicKey)
      .then((response) => {
        alert("Message sent successfully!");
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        setNumber("");
      })
      .catch((err) => {
        alert("Could not send the message!");
        console.log("Error sending the mail!", err);
      });
  };
  const visionMissionValues = [
    {
      id: 1,
      logo: <FaEye size={60} />,
      title: "Vision",
      desc: "At ArmourIQ, our vision is to create a future where cybersecurity is universally accessible, empowering every organization to protect its digital assets and thrive in a secure digital environment.",
    },
    {
      id: 2,
      logo: <FaBullseye size={60} />,
      title: "Mission",
      desc: "Our mission is to make the internet safer and more secure for all businesses. We are dedicated to providing robust cybersecurity solutions that protect every organization and foster a secure digital environment.",
    },
    {
      id: 3,
      logo: <FaHandshake size={60} />,
      title: "Values",
      desc: "We are committed to excellence, innovation, and client focus, delivering exceptional solutions that evolve with our clients' needs. Through a culture of teamwork and continuous learning, we empower businesses to thrive in the digital landscape.",
    },
  ];

  const sections = [
    {
      id: 4,
      logo: <IoPeopleSharp size={35} />,
      title: "Our Philosophy",
      desc: "At ArmourIQ, we prioritize securing businesses' futures through comprehensive cybersecurity solutions. Our approach integrates cybersecurity strategically to enhance operational resilience and protect against evolving threats.",
    },
    {
      id: 5,
      logo: <FaTrophy size={35} />,
      title: "Commitment to Innovation",
      desc: "Innovation is central to ArmourIQ's service ethos. With a focus on finance, healthcare, and technology sectors, our team leads in cybersecurity advancements. We continually refine methodologies for proactive risk management tailored to sector-specific challenges.",
    },
    {
      id: 6,
      logo: <BsBullseye size={35} />,
      title: "Our Expertise",
      desc: "ArmourIQ excels in conducting detailed assessments of technical risks and operational processes. Our Cyber Maturity Assessment benchmarks cybersecurity against industry standards, including customized Cloud Assessments for Azure, Office 365, and AWS environments.",
    },
    {
      id: 7,
      logo: <GrShieldSecurity size={35} />,
      title: "Security & Quality Assurance",
      desc: "ArmourIQ simplifies regulatory compliance with HIPAA, PCI DSS, GDPR, and other standards through Regulatory Compliance Assistance. We empower teams with Security Awareness Training and conduct Social Engineering Tests. Our vCISO services align cybersecurity strategies with business objectives, ensuring rapid and effective Incident Response Procedures.",
    },
    {
      id: 8,
      logo: <GrIntegration size={35} />,
      title: "Seamless Integration",
      desc: "ArmourIQ seamlessly integrates robust security measures into existing infrastructures. Our continuous monitoring and personalized recommendations strengthen defenses against emerging threats, including Threat Detection, Vulnerability Scanning, and Firewall Rule Reviews.",
    },
    {
      id: 9,
      logo: <IoShieldCheckmarkSharp size={35} />,
      title: "A Call to Innovate",
      desc: "Partner with ArmourIQ to enhance your cybersecurity posture. Explore tailored solutions designed to safeguard your organization and foster innovation and vigilance in today's digital landscape. Rely on our expertise for a secure and prosperous future.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="relative"
      >
        <div className=" bg-[#004AAD] opacity-100 h-[250px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
            className="text-[4xl] md:text-[45px] text-white font-semibold mt-[80px] max-sm:mt-[70px] max-sm:text-5xl"
          >
            About Us
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col bg-white mt-3 items-center">
        <div className="res-width">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            src={about}
            className="mt-11 mb-12 w-full rounded-2xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="w-full"
          >
            <p className="text-black font-normal text-sm md:text-xl mt-3 text-pretty">
              ArmourIQ is a cybersecurity consulting firm dedicated to
              safeguarding organisations from evolving threats. Our team of
              experts provides tailored Cyber Security solutions to protect your
              critical assets and ensure compliance with industry regulations.
            </p>
          </motion.div>
          <div className="flex flex-col w-full lg:flex-row items-center mt-6 lg:mt-10 ">
            <div className="w-full">
              <div className=" bg-[#F6F5F5] flex max-md:flex-wrap justify-center">
                {visionMissionValues.map((item) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    key={item.id}
                    className=" text-black p-6 rounded-0 flex flex-col items-center w-[28rem] py-8 lg:py-16 transition-all duration-300 md:mt-3"
                  >
                    {" "}
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col items-center mb-2">
                        <div className="">{item.logo}</div>
                        <h3 className="text-lg md:text-xl font-semibold text-center">
                          {item.title}
                        </h3>
                        <p className="text-start text-sm md:text-[15px]">
                          {item.desc}
                        </p>
                      </div>
                      {item.id != 3 && <div className="bg-white h-[220px] w-[15px] max-sm:hidden"></div> }
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Counter Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="flex flex-row items-center justify-center py-4 gap-x-14 gap-y-4 lg:gap-24 flex-wrap max-md:grid max-md:grid-rows-2 bg-[#004bae] mt-[70px]"
          >
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <CountUp
                  delay={2}
                  end={10}
                  className="text-white text-3xl font-semibold"
                  duration={2}
                  enableScrollSpy={true}
                  isScrollingDown={true}
                />
                <h4 className="text-3xl text-white font-semibold">+</h4>
              </div>

              <h4 className="font-semibold text-[30px] text-white">Clients</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <CountUp
                  delay={2}
                  end={25}
                  className="text-white text-3xl font-semibold"
                  duration={2}
                  enableScrollSpy={true}
                  isScrollingDown={true}
                />
                <h4 className="text-3xl text-white font-semibold">+</h4>
              </div>

              <h4 className="font-semibold text-[30px] ml-3 text-white">
                Engagements
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <CountUp
                  delay={2}
                  end={5}
                  className="text-white text-3xl font-semibold ml-4"
                  duration={2}
                  enableScrollSpy={true}
                  isScrollingDown={true}
                />
                <h4 className="text-3xl text-white font-semibold">+</h4>
              </div>

              <h4 className="font-semibold text-[30px] ml-3 text-white">
                Team
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <CountUp
                  delay={2}
                  end={50}
                  className="text-white text-3xl font-semibold"
                  duration={2}
                  enableScrollSpy={true}
                  isScrollingDown={true}
                />
                <h4 className="text-3xl text-white font-semibold">+</h4>
              </div>

              <h4 className="font-semibold text-[30px] ml-3 text-white">
                Assessment
              </h4>
            </div>
          </motion.div>
          <div className="mt-[70px] grid grid-cols-6 gap-3 md:gap-5">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="row-start-1 row-end-2 col-start-1 col-end-7 md:col-end-5 "
            >
              {/* <h2 className="text-black font-semibold text-2xl md:mt-8">
                Why choose us
              </h2> */}
              <h4 className="text-black font-bold text-3xl mt-3">
                Your Trusted Partner in Cybersecurity
              </h4>
              <p className="text-black font-normal text-wrap mt-3">
                ArmourIQ is more than just a service provider—we are your
                strategic partner in safeguarding your business. With a team of
                seasoned cybersecurity experts, we deliver unparalleled
                protection against the latest cyber threats. Our commitment to
                excellence, deep industry knowledge, and focus on customer
                satisfaction distinguish us within the cybersecurity industry.
                Trust ArmourIQ to not only defend your organization but also to
                enhance your overall security posture, ensuring long-term
                resilience and success.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="row-start-3 sm:row-start-2 row-end-3 z-30 sm:row-end-4 col-start-1 col-end-5 sm:col-end-3 xl:col-end-4"
            >
              <img
                src={cybersec_engineer}
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              className="flex items-center max-[550px]:col-start-4 z-20 max-[550px]:col-end-7 col-start-3 xl:col-start-4 col-end-5 bg-[#F6F5F5] rounded-lg px-4 max-sm:py-3 xl:px-2 drop-shadow-lg border-[#004AAD] border-[1px]"
            >
              <div className="flex max-lg:flex-col xl:flex-col xl:items-center gap-2 max-lg:items-center">
                <FaUser size={25} className="" />
                <div>
                  <h1 className="text-black font-bold text-xl xl:text-center max-lg:text-center">
                    Comprehensive Solutions
                  </h1>
                  <p className="max-lg:text-center xl:text-center">
                    Full-spectrum protection, from threat detection to response.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              className="flex items-center max-sm:py-3 z-20 max-sm:row-start-2 col-start-1 sm:col-start-3 xl:col-start-4 max-[550px]:col-end-4 col-end-3 sm:col-end-5 bg-[#F6F5F5] rounded-lg px-4 xl:px-2 drop-shadow-lg border-[#004AAD] border-[1px]"
            >
              <div className="flex max-lg:flex-col gap-2 xl:flex-col xl:items-center max-lg:items-center">
                <FaUser size={25} className="" />
                <div>
                  <h1 className="text-black font-bold text-xl xl:text-center max-lg:text-center">
                    Experienced Team
                  </h1>
                  <p className="max-lg:text-center xl:text-center">
                    Experienced experts safeguarding your business.
                  </p>
                </div>
              </div>
            </motion.div>
            <div className="max-[550px]:row-start-3 row-start-2 md:row-start-1 row-end-4 col-start-5 col-end-7">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                src={cybersec_tem}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="text-black mx-4 md:ml-[65px] text-2xl md:text-3xl font-semibold mt-[65px]"
        >
          Discover exceptional experiences through testimonials from our
          satisfied customers
        </motion.div>
        <div className="res-width flex justify-center mt-8">
          <div className="grid max-[560px]:grid-cols-1 grid-cols-2 md:grid-cols-3 gap-4 xl:gap-16">
            {sections.map((section) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                key={section.id}
                className="bg-[#F6F5F5] text-black p-4 py-6 lg:p-6 rounded-lg flex flex-col items-center  justify-center border-[#004AAD] border-[1px] hover:bg-[#004AAD] hover:text-white hover:border-white hover:border-[1px] max-w-[28rem] min-h-[270px] transition-all duration-300 gap-4 hover:drop-shadow-lg"
              >
                <div className="flex max-xl:flex-col items-center justify-center gap-2">
                  <div className="">{section.logo}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-center">
                    {section.title}
                  </h3>
                </div>
                <p className="text-center text-sm md:text-[17px]">
                  {section.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <Team />
        <div className="res-width bg-black/50 h-[1px] mt-[3rem]"></div>
        <div className="res-width flex flex-col lg:flex-row justify-between mt-[40px] max-sm:mt-[70px] gap-8">
          <div className="flex flex-col ">
            <h1 className="text-black font-semibold text-[18px] lg:max-w-[25rem]">
              Secure Your Business with ArmourIQ
              <br />
              Have questions or need help? Our experts are here for you.
            </h1>
          </div>
          <div className="flex lg:w-[65%] max-sm:flex-col justify-between gap-4">
            <div className="max-md:mt-10 max-sm:mt-2">
              <div className="flex flex-col items-start mb-4">
                <h3 className="text-black font-bold max-sm:mt-3">
                  Contact Us to
                </h3>
                <ul className="list-disc list-inside mt-2">
                  <li className="whitespace-nowrap">
                    Discover tailored security solutions
                  </li>
                  <li className="whitespace-nowrap">
                    Get a free security assessment
                  </li>
                  <li className="whitespace-nowrap">Receive prompt support</li>
                </ul>
                <div className="flex flex-col max-sm:mt-5 mt-6">
                  <div className="flex flex-row items-center mb-0">
                    <FaPhoneAlt color="#004AAD" className="mr-2" size={17} />
                    <h5 className="text-black font-semibold ml-1 text-[17px]">
                      +91 8007024111
                    </h5>
                  </div>
                  <div className="flex flex-row items-center mb-2 mt-4">
                    <MdOutlineEmail
                      color="#004AAD"
                      className="mr-2"
                      size={22}
                    />
                    <h5 className="text-black font-semibold ml-1">
                      hello@armourIQ.com
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <form
                className="flex flex-col text-black"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 h-[40px] border-[#004bae] border-[1px] bg-[#F6F5F5] mb-3"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="flex flex-row w-full gap-2">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="p-3 w-[60%] h-[40px] border-[#004bae] border-[1px] bg-[#F6F5F5]"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="h-[40px] w-[80%] p-3 border-[#004bae] border-[1px] bg-[#F6F5F5]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <textarea
                  type="text"
                  placeholder="Message"
                  className="w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-[#F6F5F5] my-3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="bg-[#004bae] p-3 font-bold w-full text-white"
                  type="submit"
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default AboutUs;
