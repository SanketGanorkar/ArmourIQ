import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Services.css";
import { FaRegArrowAltCircleRight, FaMobileAlt } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { MdSettingsApplications } from "react-icons/md";
import { AiFillSecurityScan } from "react-icons/ai";
import { motion } from "framer-motion";
// import icon from "";


const Services = () => {
  const services = [
    {
      id: 1,
      title: "Cloud Security",
      path: "/services/cloud",
      highlights: [
        "Enhanced Security",
        "Compliance Assurance",
        "Proactive Threat Detection",
        "Optimized Security Configurations",
        "Ongoing Security Enhancement"
      ],
      logo: "../assets/Cloud Security.svg",
    },
    {
      id: 2,
      title: "Mobile Security",
      path: "/services/mobile",
      highlights: [
        "Comprehensive Threat Identification",
        "Enhanced Application Security",
        "Protection of User Data",
        "Compliance Assurance",
        "Actionable Insights"
      ],
      logo: "../assets/One Time Password.png",
    },
    {
      id: 3,
      title: "Application Security",
      path: "/services/application",
      highlights: [
        "Improved Security",
        "Enhanced Reputation",
        "Cost Savings",
        "Improved Performance",
        "Increased Efficiency",
      ],
      logo: "../assets/Web Application Firewall-1.png",
    },
    {
      id: 4,
      title: "Network Security",
      path: "/services/network",
      highlights: [
        "Enhanced Network Security",
        "Compliance Assurance",
        "Risk Mitigation",
        "Peace of Mind",
      ],
      logo: "../assets/Security Shield.png",
    },
    {
      id: 5,
      title: "Audit & Compliance",
      path: "/services/audit",
      highlights: [
        "Enhanced Security Posture",
        "Compliance Assurance",
        "Risk Mitigation",
        "Peace of Mind",
      ],
      logo: "../assets/Office 365 Security & Compliance.png"
    },
    {
      id: 6,
      title: "SOC & MDR Services",
      path: "/services/soc",
      highlights: [
        "Enhanced Threat Detection",
        "Rapid Incident Response",
        "Continuous Protection",
        "Improved Security Posture",
      ],
      logo: "../assets/Cyber Security.png"
    },
    {
      id: 7,
      title: "Maturity Assessment",
      path: "/services/maturity",
      highlights: [
        "Enhanced Security Maturity",
        "Risk Mitigation",
        "Tailored Improvement Plan",
        "Continuous Improvement",
      ],
      logo: "../assets/Cyber Security-1.png"
    },
    {
      id: 8,
      title: "Virtual CISO as a Service",
      path: "/services/virtual",
      highlights: [
        "Strategic Security Alignment",
        "Effective Risk Management",
        "Robust Security Policies",
        "Continuous Security Oversight",
        "Prepared Incident Response",
      ],
      logo: "../assets/Network.png"
    },
    {
      id: 9,
      title: "Security Program",
      path: "/services/awareness",
      highlights: [
        "Increased Employee Vigilance",
        "Enhanced Security Culture",
        "Improved Threat Detection",
        "Actionable Insights",
      ],
      logo: "../assets/Cyberark.png"
    },
  ];
  const faqs = [
    {
      "id": 1,
      "question": "What is a Mobile Application Penetration Test?",
      "answer": "A penetration test simulates real-world attacks on your mobile apps to identify vulnerabilities and assess their security posture."
    },
    {
      "id": 2,
      "question": "Why is Source Code Review crucial for mobile applications?",
      "answer": "Source code review helps identify security flaws, coding errors, and backdoors within your mobile application's code, ensuring proactive protection."
    },
    {
      "id": 3,
      "question": "What does ArmourIQ's Application Security Testing involve?",
      "answer": "Our application security testing includes both automated and manual assessments to identify vulnerabilities in your web applications and APIs."
    },
    {
      "id": 4,
      "question": "What is an Application Security Architecture Review?",
      "answer": "This review evaluates your application's design and architecture to identify potential security weaknesses and ensure it's built with security in mind."
    },
    {
      "id": 5,
      "question": "How does ArmourIQ support a Secure Software Development Lifecycle (SDLC)?",
      "answer": "ArmourIQ integrates security best practices into your SDLC, providing guidance and support throughout the development process."
    },
    {
      "id": 6,
      "question": "What is the difference between a Network Vulnerability Assessment and Network Penetration Testing?",
      "answer": "A vulnerability assessment identifies potential weaknesses in your network, while penetration testing simulates attacks to assess the effectiveness of your security controls."
    },
    {
      "id": 7,
      "question": "What is involved in a Network Architecture Security Review?",
      "answer": "This review examines your network's design and configuration to identify potential security risks and provide recommendations for improvement."
    },
    {
      "id": 8,
      "question": "How does ArmourIQ conduct Wireless Penetration Testing?",
      "answer": "We assess your wireless networks for vulnerabilities that could be exploited by attackers, such as weak encryption or unauthorized access points."
    }
  ];

  return (
    <div id="services" className="bg-white min-h-screen mt-[80px] flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="relative w-screen">
        <div className=" bg-[#004AAD] opacity-100 h-[182px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl text-black mt-[50px] mb-9 max-sm:mt-[50px]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              className="text-[4xl] md:text-[45px] text-white font-semibold">
              Our Services
            </motion.span>
          </div>
        </div>
      </motion.div>
      <div className="res-width mt-8">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="text-black font-bold text-3xl mt-4 text-pretty">
          Enhancing Organisational Cybersecurity Through Comprehensive Services
        </motion.h1>
        <div className="text-black text-xl mt-5 text-pretty">
          Our cybersecurity services provide comprehensive protection for your
          business against cyber threats, ensuring data security, regulatory
          compliance, and business continuity. We offer risk assessment and
          management to identify vulnerabilities, advanced threat detection and
          response for real-time protection, and robust data protection and
          encryption.
        </div>
        <div className="flex justify-center mt-8">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-sm:place-items-center md:gap-6 lg:gap-12 gap-y-2 lg:mt-2">
            {services.map((item) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                key={item.id}
                className="group max-sm:w-[90%] max-w-[28rem] min-h-[230px] drop-shadow-lg mb-5 h-full flex justify-center"
              >
                {/* For Desktop */}
                <Link to={item.path} className="w-full h-full">
                  <div className="relative bg-[#F6F5F5] h-full text-black p-6 rounded-lg flex flex-col justify-between items-center pt-32 border-[#004bae] border-[1px] w-full cursor-pointer hover:bg-[#004bae] hover:border-white hover:border-[1px] hover:text-white transition-all duration-300">
                    <div
                      className="translate-y-0 transition ease-in-out group-hover:-translate-y-[1rem] h-[6rem] w-[6rem] flex items-center justify-center absolute top-5 bg-slate-300/50 group-hover:bg-slate-300/20 rounded-full drop-shadow-xl">
                      <img src={item.logo} className="h-[60%] w-auto object-cover hover:text-white" />
                    </div>
                    <div className="w-full h-full flex flex-col items-center justify-center">
                      {/* <img src={item.logo} className="" /> */}
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <ul className="list-disc text-left pl-5 mb-2">
                        {item.highlights.slice(0, 4).map((highlight, index) => (
                          <li key={index}>{highlight}</li>
                        ))}
                      </ul>
                      <span className="text-black hover:text-white mt-2 hover:font-bold">
                        <FaRegArrowAltCircleRight size={30} className="group-hover:text-white" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* transition-all duration-300 */}
        <div className="res-width mt-20 max-sm:pl-2 mb-8 pt-0 flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="font-bold text-4xl max-sm:text-2xl">
            FAQs
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="font-normal text-xl text-gray-500 mt-2 mb-4">
            Your Queries, Our Answers
          </motion.h3>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mt-5">
            {faqs.map((faq, index) => (
              <div key={index} className="">
                <motion.details
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
                  className="group cursor-pointer" name="accordian">
                  <summary className="font-semibold text-[15px] text-black bg-zinc-200 px-3 py-4">
                    {faq.question}
                  </summary>
                  <motion.p
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ ease: "easeInOut", duration: 0.1 }}
                    style={{ transformOrigin: "top" }}
                    className="text-[15px] text-black bg-zinc-100 p-2 pl-8">
                    {faq.answer}
                  </motion.p>
                </motion.details>
                {index < faqs.length && (
                  <hr className="border-t-1 border-gray-300 mt-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
