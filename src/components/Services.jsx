// import { Link } from "react-router-dom";
// import Footer from "./Footer";
// import "./Services.css";
// import { FaRegArrowAltCircleRight, FaMobileAlt } from "react-icons/fa";
// import { TbCloudComputing } from "react-icons/tb";
// import { MdSettingsApplications } from "react-icons/md";
// import { AiFillSecurityScan } from "react-icons/ai";
// import { motion } from "framer-motion";
// // import icon from "";


// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       title: "Cloud Security",
//       path: "/services/cloud",
//       highlights: [
//         "Enhanced Security",
//         "Compliance Assurance",
//         "Proactive Threat Detection",
//         "Optimized Security Configurations",
//         "Ongoing Security Enhancement"
//       ],
//       logo: "../assets/Cloud Security.svg",
//     },
//     {
//       id: 2,
//       title: "Mobile Security",
//       path: "/services/mobile",
//       highlights: [
//         "Comprehensive Threat Identification",
//         "Enhanced Application Security",
//         "Protection of User Data",
//         "Compliance Assurance",
//         "Actionable Insights"
//       ],
//       logo: "../assets/One Time Password.png",
//     },
//     {
//       id: 3,
//       title: "Application Security",
//       path: "/services/application",
//       highlights: [
//         "Improved Security",
//         "Enhanced Reputation",
//         "Cost Savings",
//         "Improved Performance",
//         "Increased Efficiency",
//       ],
//       logo: "../assets/Web Application Firewall-1.png",
//     },
//     {
//       id: 4,
//       title: "Network Security",
//       path: "/services/network",
//       highlights: [
//         "Enhanced Network Security",
//         "Compliance Assurance",
//         "Risk Mitigation",
//         "Peace of Mind",
//       ],
//       logo: "../assets/Security Shield.png",
//     },
//     {
//       id: 5,
//       title: "Audit & Compliance",
//       path: "/services/audit",
//       highlights: [
//         "Enhanced Security Posture",
//         "Compliance Assurance",
//         "Risk Mitigation",
//         "Peace of Mind",
//       ],
//       logo: "../assets/Office 365 Security & Compliance.png"
//     },
//     {
//       id: 6,
//       title: "SOC & MDR Services",
//       path: "/services/soc",
//       highlights: [
//         "Enhanced Threat Detection",
//         "Rapid Incident Response",
//         "Continuous Protection",
//         "Improved Security Posture",
//       ],
//       logo: "../assets/Cyber Security.png"
//     },
//     {
//       id: 7,
//       title: "Maturity Assessment",
//       path: "/services/maturity",
//       highlights: [
//         "Enhanced Security Maturity",
//         "Risk Mitigation",
//         "Tailored Improvement Plan",
//         "Continuous Improvement",
//       ],
//       logo: "../assets/Cyber Security-1.png"
//     },
//     {
//       id: 8,
//       title: "Virtual CISO as a Service",
//       path: "/services/virtual",
//       highlights: [
//         "Strategic Security Alignment",
//         "Effective Risk Management",
//         "Robust Security Policies",
//         "Continuous Security Oversight",
//         "Prepared Incident Response",
//       ],
//       logo: "../assets/Network.png"
//     },
//     {
//       id: 9,
//       title: "Security Program",
//       path: "/services/awareness",
//       highlights: [
//         "Increased Employee Vigilance",
//         "Enhanced Security Culture",
//         "Improved Threat Detection",
//         "Actionable Insights",
//       ],
//       logo: "../assets/Cyberark.png"
//     },
//   ];
//   const faqs = [
//     {
//       "id": 1,
//       "question": "What is a Mobile Application Penetration Test?",
//       "answer": "A penetration test simulates real-world attacks on your mobile apps to identify vulnerabilities and assess their security posture."
//     },
//     {
//       "id": 2,
//       "question": "Why is Source Code Review crucial for mobile applications?",
//       "answer": "Source code review helps identify security flaws, coding errors, and backdoors within your mobile application's code, ensuring proactive protection."
//     },
//     {
//       "id": 3,
//       "question": "What does ArmourIQ's Application Security Testing involve?",
//       "answer": "Our application security testing includes both automated and manual assessments to identify vulnerabilities in your web applications and APIs."
//     },
//     {
//       "id": 4,
//       "question": "What is an Application Security Architecture Review?",
//       "answer": "This review evaluates your application's design and architecture to identify potential security weaknesses and ensure it's built with security in mind."
//     },
//     {
//       "id": 5,
//       "question": "How does ArmourIQ support a Secure Software Development Lifecycle (SDLC)?",
//       "answer": "ArmourIQ integrates security best practices into your SDLC, providing guidance and support throughout the development process."
//     },
//     {
//       "id": 6,
//       "question": "What is the difference between a Network Vulnerability Assessment and Network Penetration Testing?",
//       "answer": "A vulnerability assessment identifies potential weaknesses in your network, while penetration testing simulates attacks to assess the effectiveness of your security controls."
//     },
//     {
//       "id": 7,
//       "question": "What is involved in a Network Architecture Security Review?",
//       "answer": "This review examines your network's design and configuration to identify potential security risks and provide recommendations for improvement."
//     },
//     {
//       "id": 8,
//       "question": "How does ArmourIQ conduct Wireless Penetration Testing?",
//       "answer": "We assess your wireless networks for vulnerabilities that could be exploited by attackers, such as weak encryption or unauthorized access points."
//     }
//   ];

//   return (
//     <div id="services" className="bg-white min-h-screen mt-[80px] flex flex-col items-center">
//       <motion.div
//         initial={{ opacity: 0, y: -70 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ ease: "easeInOut", duration: 0.5 }}
//         className="relative w-screen">
//         <div className=" bg-[#004AAD] opacity-100 h-[182px]"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-4xl text-black mt-[50px] mb-9 max-sm:mt-[50px]">
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
//               className="text-[4xl] md:text-[45px] text-white font-semibold">
//               Our Services
//             </motion.span>
//           </div>
//         </div>
//       </motion.div>
//       <div className="res-width mt-8">
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ ease: "easeInOut", duration: 0.5 }}
//           className="text-black font-bold text-3xl mt-4 text-pretty">
//           Enhancing Organisational Cybersecurity Through Comprehensive Services
//         </motion.h1>
//         <div className="text-black text-xl mt-5 text-pretty">
//           Our cybersecurity services provide comprehensive protection for your
//           business against cyber threats, ensuring data security, regulatory
//           compliance, and business continuity. We offer risk assessment and
//           management to identify vulnerabilities, advanced threat detection and
//           response for real-time protection, and robust data protection and
//           encryption.
//         </div>
//         <div className="flex justify-center mt-8">
//           <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-sm:place-items-center md:gap-6 lg:gap-12 gap-y-2 lg:mt-2">
//             {services.map((item) => (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ ease: "easeInOut", duration: 0.5 }}
//                 key={item.id}
//                 className="group max-sm:w-[90%] max-w-[28rem] min-h-[230px] drop-shadow-lg mb-5 h-full flex justify-center"
//               >
//                 {/* For Desktop */}
//                 <Link to={item.path} className="w-full h-full">
//                   <div className="relative bg-[#F6F5F5] h-full text-black p-6 rounded-lg flex flex-col justify-between items-center pt-32 border-[#004bae] border-[1px] w-full cursor-pointer hover:bg-[#004bae] hover:border-white hover:border-[1px] hover:text-white transition-all duration-300">
//                     <div
//                       className="translate-y-0 transition ease-in-out group-hover:-translate-y-[1rem] h-[6rem] w-[6rem] flex items-center justify-center absolute top-5 bg-slate-300/50 group-hover:bg-slate-300/20 rounded-full drop-shadow-xl">
//                       <img src={item.logo} className="h-[60%] w-auto object-cover hover:text-white" />
//                     </div>
//                     <div className="w-full h-full flex flex-col items-center justify-center">
//                       {/* <img src={item.logo} className="" /> */}
//                       <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                       <ul className="list-disc text-left pl-5 mb-2">
//                         {item.highlights.slice(0, 4).map((highlight, index) => (
//                           <li key={index}>{highlight}</li>
//                         ))}
//                       </ul>
//                       <span className="text-black hover:text-white mt-2 hover:font-bold">
//                         <FaRegArrowAltCircleRight size={30} className="group-hover:text-white" />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* transition-all duration-300 */}
//         <div className="res-width mt-20 max-sm:pl-2 mb-8 pt-0 flex flex-col justify-center items-center">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ ease: "easeInOut", duration: 0.5 }}
//             className="font-bold text-4xl max-sm:text-2xl">
//             FAQs
//           </motion.h1>
//           <motion.h3
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ ease: "easeInOut", duration: 0.5 }}
//             className="font-normal text-xl text-gray-500 mt-2 mb-4">
//             Your Queries, Our Answers
//           </motion.h3>
//           <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mt-5">
//             {faqs.map((faq, index) => (
//               <div key={index} className="">
//                 <motion.details
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
//                   className="group cursor-pointer" name="accordian">
//                   <summary className="font-semibold text-[15px] text-black bg-zinc-200 px-3 py-4">
//                     {faq.question}
//                   </summary>
//                   <motion.p
//                     initial={{ scaleY: 0 }}
//                     whileInView={{ scaleY: 1 }}
//                     transition={{ ease: "easeInOut", duration: 0.1 }}
//                     style={{ transformOrigin: "top" }}
//                     className="text-[15px] text-black bg-zinc-100 p-2 pl-8">
//                     {faq.answer}
//                   </motion.p>
//                 </motion.details>
//                 {index < faqs.length && (
//                   <hr className="border-t-1 border-gray-300 mt-1" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Services;
// Serivices.jsx


// import { Link } from "react-router-dom";
// import Footer from "./Footer";
// import "./Services.css";
// import { FaRegArrowAltCircleRight, FaMobileAlt } from "react-icons/fa";
// import { TbCloudComputing } from "react-icons/tb";
// import { MdSettingsApplications } from "react-icons/md";
// import { AiFillSecurityScan } from "react-icons/ai";
// import { color, motion } from "framer-motion";
// // import icon from "";


// const CustmizeIcons = ({ icon }) => (
//   icon
// )


// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       title: "Cloud Security",
//       path: "/services/cloud",
//       highlights: [
//         "Enhanced Security",
//         "Compliance Assurance",
//         "Proactive Threat Detection",
//         "Optimized Security Configurations",
//         "Ongoing Security Enhancement"
//       ],
//       logo: "../assets/test1.svg",
//       icon: <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M686.421 217.578C662.501 139.466 588.625 84.3625 505.968 84.3625C497.192 84.3625 488.409 84.6677 480.236 85.8762C446.02 56.8106 403.026 40.7653 357.611 40.7653C282.22 40.7653 213.495 86.7856 183.814 154.914C100.861 166.413 36.6699 237.867 36.6699 323.554C36.6699 393.793 78.7606 455.867 143.854 481.601C152.936 485.233 162.025 487.961 171.406 489.774C181.092 467.672 196.229 448.599 215.309 434.366C218.941 332.333 303.107 250.585 406.043 250.585C512.117 250.585 593.684 335.119 596.778 434.366C616.156 449.204 631.598 468.577 641.59 491.288C710.621 479.484 763.306 419.236 763.306 346.872C763.306 292.069 733.631 243.021 686.401 217.588L686.421 217.578Z"
//           fill="currentColor" />
//         <path
//           d="M405.906 311.031C333.999 311.031 275.485 369.545 275.485 441.481V470.064C243.125 481.221 219.546 511.63 219.546 547.895V676.57C219.546 722.292 256.784 759.223 302.199 759.223H509.59C555.312 759.223 592.549 722.284 592.549 676.57V547.895C592.549 511.653 569.003 481.262 536.526 470.087V441.48C536.532 370.142 478.945 311.03 405.898 311.03L405.906 311.031ZM336.039 441.481C336.039 402.925 367.381 371.584 405.906 371.584C445.695 371.584 475.981 403.842 475.981 441.481V465.108H336.04L336.039 441.481Z"
//           fill="currentColor" />
//       </svg>
//     },
//     {
//       id: 2,
//       title: "Mobile Security",
//       path: "/services/mobile",
//       highlights: [
//         "Comprehensive Threat Identification",
//         "Enhanced Application Security",
//         "Protection of User Data",
//         "Compliance Assurance",
//         "Actionable Insights"
//       ],
//       logo: "../assets/One Time Password.png",
//       icon: <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M662.391 295.031C625.019 295.129 590.497 315.014 571.656 347.289C566.981 355.468 558.314 360.546 548.891 360.632H268.797V439.355H315.842L338.223 416.961V416.955C343.43 412.036 351.572 412.036 356.778 416.955L373.752 433.916L390.713 416.955H390.719C395.839 411.834 404.146 411.834 409.267 416.955L426.234 433.916L443.195 416.955C448.322 411.834 456.623 411.834 461.75 416.955L484.131 439.349H548.889C558.307 439.446 566.967 444.531 571.642 452.709C586.718 478.784 612.273 497.131 641.801 503.069C671.33 509.014 701.989 501.982 725.981 483.764C749.969 465.552 764.976 437.908 767.186 407.867C769.389 377.825 758.586 348.284 737.517 326.758C717.826 306.409 690.703 294.958 662.389 295.031H662.391ZM701.752 439.349C691.314 439.349 681.305 435.204 673.92 427.825C666.541 420.44 662.391 410.43 662.391 399.994C662.391 389.551 666.541 379.541 673.92 372.163C681.306 364.777 691.316 360.633 701.752 360.633C712.187 360.633 722.205 364.777 729.583 372.163C736.962 379.542 741.112 389.552 741.112 399.994C741.112 410.431 736.962 420.441 729.583 427.825C722.204 435.204 712.187 439.349 701.752 439.349Z"
//           fill="currentColor" />
//         <path
//           d="M504.953 58.875C504.953 51.9171 502.188 45.2458 497.268 40.3204C492.349 35.401 485.672 32.636 478.714 32.636H58.8699C51.912 32.636 45.2407 35.4008 40.3152 40.3204C35.3959 45.2458 32.6309 51.9171 32.6309 58.875V111.3s59H504.959L504.953 58.875ZM268.796 85.1204H203.196C195.952 85.1204 190.074 79.2427 190.074 71.9979C190.074 64.753 195.952 58.8754 203.196 58.8754H268.796C276.041 58.8754 281.913 64.753 281.913 71.9979C281.913 79.2427 276.041 85.1204 268.796 85.1204ZM334.396 85.1204H321.274C314.029 85.1204 308.158 79.2427 308.158 71.9979C308.158 64.753 314.029 58.8754 321.274 58.8754H334.396C341.641 58.8754 347.513 64.753 347.513 71.9979C347.513 79.2427 341.641 85.1204 334.396 85.1204Z"
//           fill="currentColor" />
//         <path
//           d="M32.641 741.125C32.641 748.083 35.4059 754.76 40.3254 759.68C45.2509 764.599 51.9221 767.364 58.8801 767.364H478.724C485.682 767.364 492.359 764.599 497.279 759.68C502.198 754.76 504.963 748.083 504.963 741.125V688.647H32.6348L32.641 741.125ZM242.563 714.886H295.047C302.292 714.886 308.17 720.758 308.17 728.002C308.17 735.247 302.292 741.125 295.047 741.125H242.569C235.318 741.125 229.447 735.247 229.447 728.002C229.447 720.758 235.318 714.886 242.569 714.886H242.563Z"
//           fill="currentColor" />
//         <path
//           d="M469.422 461.75L452.472 444.783L435.511 461.744V461.75C430.384 466.871 422.077 466.871 416.956 461.75L399.995 444.783L383.028 461.75C377.907 466.871 369.6 466.871 364.48 461.75L347.513 444.783L330.563 461.744V461.75C328.097 464.209 324.758 465.595 321.273 465.595H268.795V596.79C268.795 604.041 262.917 609.913 255.672 609.913C248.428 609.913 242.556 604.041 242.556 596.79V203.197C242.556 195.952 248.428 190.074 255.672 190.074C262.917 190.074 268.795 195.952 268.795 203.197V334.398H504.951V137.601H32.623V662.398H504.951V465.711L478.712 465.607C475.227 465.607 471.888 464.221 469.423 461.762L469.422 461.75ZM163.828 452.473C163.828 459.718 157.957 465.595 150.706 465.595C143.461 465.595 137.589 459.718 137.589 452.473V347.51C137.589 340.265 143.461 334.394 150.706 334.394C157.957 334.394 163.828 340.265 163.828 347.51V452.473ZM216.306 504.951C216.306 512.202 210.435 518.073 203.19 518.073C195.945 518.073 190.067 512.202 190.067 504.951V295.029C190.067 287.784 195.945 281.906 203.19 281.906C210.435 281.906 216.306 287.784 216.306 295.029V504.951Z"
//           fill="currentColor" />
//         <path
//           d="M701.751 386.875C696.447 386.875 691.662 390.073 689.629 394.974C687.597 399.875 688.72 405.521 692.473 409.275C696.227 413.022 701.867 414.145 706.774 412.119C711.675 410.087 714.873 405.301 714.873 399.998C714.873 396.518 713.488 393.18 711.028 390.72C708.568 388.26 705.23 386.875 701.751 386.875Z"
//           fill="currentColor" />
//       </svg>
//     },
//     {
//       id: 3,
//       title: "Application Security",
//       path: "/services/application",
//       highlights: [
//         "Improved Security",
//         "Enhanced Reputation",
//         "Cost Savings",
//         "Improved Performance",
//         "Increased Efficiency",
//       ],
//       logo: "../assets/Web Application Firewall-1.png",
//       icon: <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <mask id="mask0_75_43" maskUnits="userSpaceOnUse" x="6" y="6"
//           width="723" height="723">
//           <path d="M6.39062 6.39062H728.125V728.125H6.39062V6.39062Z" fill="white" />
//         </mask>
//         <g mask="url(#mask0_75_43)">
//           <path
//             d="M383.593 695.203H88.3903C61.2668 695.203 39.1902 673.133 39.1902 646.003V170.409H695.19V400.019C695.19 409.07 702.539 416.419 711.59 416.419C720.648 416.419 727.99 409.07 727.99 400.019V88.4094C727.99 43.1766 691.223 6.40942 645.99 6.40942H88.3965C43.1637 6.40942 6.39648 43.1766 6.39648 88.4094V646.003C6.39648 691.236 43.1637 728.003 88.3965 728.003H383.6C392.651 728.003 400 720.655 400 711.603C400 702.552 392.651 695.203 383.6 695.203H383.593ZM88.3903 39.2032H645.984C673.114 39.2032 695.184 61.2797 695.184 88.4032V137.603H39.184V88.4032C39.184 61.2797 61.2605 39.2032 88.384 39.2032H88.3903Z"
//             fill="currentColor" />
//         </g>
//         <path
//           d="M104.797 88.3907C104.797 97.4484 97.4546 104.791 88.3971 104.791C79.3396 104.791 71.9971 97.4482 71.9971 88.3907C71.9971 79.3332 79.3396 71.9907 88.3971 71.9907C97.4546 71.9907 104.797 79.3332 104.797 88.3907Z"
//           fill="currentColor" />
//         <path
//           d="M170.391 88.3907C170.391 97.4484 163.048 104.791 153.991 104.791C144.933 104.791 137.591 97.4482 137.591 88.3907C137.591 79.3332 144.933 71.9907 153.991 71.9907C163.048 71.9907 170.391 79.3332 170.391 88.3907Z"
//           fill="currentColor" />
//         <path
//           d="M236 88.3907C236 97.4484 228.658 104.791 219.6 104.791C210.543 104.791 203.2 97.4482 203.2 88.3907C203.2 79.3332 210.543 71.9907 219.6 71.9907C228.658 71.9907 236 79.3332 236 88.3907Z"
//           fill="currentColor" />
//         <path
//           d="M574.883 367.001C515.894 367.001 467.891 418.048 467.891 480.805V505.74C441.343 515.474 422 542.002 422 573.639V685.894C422 725.782 452.548 758 489.806 758H659.943C697.452 758 728 725.775 728 685.894V573.639C728 542.022 708.683 515.509 682.04 505.761V480.803C682.045 418.569 634.802 367 574.877 367L574.883 367.001ZM517.567 480.805C517.567 447.169 543.279 419.827 574.883 419.827C607.525 419.827 632.371 447.969 632.371 480.805V501.416H517.568L517.567 480.805Z"
//           fill="currentColor" />
//       </svg>
//     },
//     {
//       id: 4,
//       title: "Network Security",
//       path: "/services/network",
//       highlights: [
//         "Enhanced Network Security",
//         "Compliance Assurance",
//         "Risk Mitigation",
//         "Peace of Mind",
//       ],
//       logo: "../assets/Security Shield.png",
//       icon: <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M224.297 258.297C211.565 299.123 204.467 341.5 203.203 384.248H305.541C306.011 341.658 308.452 298.598 312.859 258.297H224.297Z"
//           fill="currentColor" />
//         <path
//           d="M644.5 313.406H486.125C482.481 330.373 473.82 345.859 461.272 357.845C448.723 369.831 432.859 377.773 415.745 380.636V565.308C415.745 625.372 518.083 684.491 565.312 705.744C612.547 684.259 714.886 625.061 714.886 565.308V380.636C697.765 377.773 681.909 369.833 669.359 357.845C656.809 345.858 648.15 330.373 644.506 313.406H644.5ZM691.259 393.228V548.466C691.259 614.194 583.648 661.27 571.447 666.544L565.307 669.144L559.166 666.544C546.965 661.276 439.354 614.2 439.354 548.466V393.228H455.101C464.146 393.613 472.973 390.402 479.655 384.299C486.339 378.189 490.33 369.681 490.758 360.641V344.894H639.855V360.641C640.288 369.68 644.28 378.188 650.963 384.299C657.64 390.402 666.472 393.613 675.518 393.228H691.259Z"
//           fill="currentColor" />
//         <path
//           d="M203.203 415.734C204.387 458.472 211.406 500.848 224.066 541.686H312.939C308.532 501.378 306.091 458.323 305.621 415.734H203.203Z"
//           fill="currentColor" />
//         <path
//           d="M137.234 226.813H202.414C218.094 183.892 242.484 144.685 274.052 111.646C218.333 136.102 170.833 176.08 137.234 226.813Z"
//           fill="currentColor" />
//         <path
//           d="M85.5156 384.25H171.716C172.881 341.586 179.546 299.253 191.552 258.299H118.969C99.0656 297.458 87.6641 340.378 85.5156 384.25Z"
//           fill="currentColor" />
//         <path
//           d="M352.218 94.5625C303.806 113.93 262.557 162.025 235.787 226.814H316.867C324.588 172.811 336.239 125.892 352.218 94.5625Z"
//           fill="currentColor" />
//         <path
//           d="M431.484 138.641C417.311 94.7141 403.774 85.1125 399.996 85.1125C385.824 85.1125 362.685 134.155 348.751 226.813H451.088L451.082 226.806C446.889 196.949 440.334 167.467 431.484 138.641Z"
//           fill="currentColor" />
//         <path
//           d="M118.968 541.688H191.789C179.704 500.745 172.953 458.411 171.714 415.736H85.123C87.3935 459.639 98.9307 502.564 118.968 541.688Z"
//           fill="currentColor" />
//         <path
//           d="M448.172 705.281C457.7 701.308 466.8 696.376 475.333 690.56C469.901 686.782 464.469 682.686 459.116 678.749V678.755C456.009 687.813 452.353 696.669 448.172 705.281Z"
//           fill="currentColor" />
//         <path
//           d="M352.218 705.438C336.472 673.95 324.587 627.191 316.873 573.186H235.787C262.557 637.975 303.804 686.07 352.218 705.438Z"
//           fill="currentColor" />
//         <path
//           d="M400 714.875C404.486 714.875 418.658 704.09 433.142 656.781C407.867 632.691 387.72 604.664 384.723 573.175H348.75C362.684 665.833 385.828 714.875 400.002 714.875H400Z"
//           fill="currentColor" />
//         <path
//           d="M610.422 376.375H520.206C516.977 387.88 510.678 398.292 501.981 406.489C493.29 414.686 482.523 420.356 470.847 422.902V548.853C470.847 584.278 535.319 621.278 565.311 635.444C595.303 621.589 659.775 584.509 659.775 548.853V422.902C648.105 420.356 637.339 414.686 628.64 406.489C619.949 398.292 613.65 387.88 610.422 376.375Z"
//           fill="currentColor" />
//         <path
//           d="M274.047 688.344C242.48 655.305 218.09 616.097 202.409 573.177H137.229C170.829 623.91 218.326 663.888 274.045 688.344H274.047Z"
//           fill="currentColor" />
//         <path
//           d="M582.312 281.922C580.267 274.048 578.064 266.175 575.623 258.308H486.591C487.434 266.023 488.221 273.896 488.953 281.922H582.312Z"
//           fill="currentColor" />
//         <path
//           d="M482.969 226.813H564.206C537.125 161.156 495.719 113.928 448.094 94.7205C453.465 105.786 458.012 117.23 461.711 128.961C471.452 160.95 478.556 193.67 482.969 226.813Z"
//           fill="currentColor" />
//         <path
//           d="M710.312 346.859C705.197 316.08 695.542 286.233 681.656 258.297H608.523C610.726 266.17 612.85 274.044 614.742 281.911H674.489V297.658C674.703 308.54 678.255 319.094 684.658 327.895C691.066 336.69 700.021 343.313 710.312 346.859Z"
//           fill="currentColor" />
//         <path
//           d="M526.812 111.406C558.232 144.5 582.367 183.812 597.656 226.811H663.153C629.889 175.908 582.507 135.802 526.812 111.406Z"
//           fill="currentColor" />
//         <path
//           d="M384.249 415.734H337.02C337.508 457.825 340.132 499.866 344.887 541.686H384.248L384.249 415.734Z"
//           fill="currentColor" />
//         <path
//           d="M456.125 297.656L457.7 281.909C456.912 274.036 456.125 266.163 455.258 258.295H344.888C340.133 300.117 337.509 342.158 337.021 384.247H384.255L384.249 350.477H399.996C414.43 350.879 428.444 345.551 438.961 335.651C449.478 325.751 455.649 312.092 456.124 297.657L456.125 297.656Z"
//           fill="currentColor" />
//       </svg>
//     },
//     {
//       id: 5,
//       title: "Audit & Compliance",
//       path: "/services/audit",
//       highlights: [
//         "Enhanced Security Posture",
//         "Compliance Assurance",
//         "Risk Mitigation",
//         "Peace of Mind",
//       ],
//       logo: "../assets/Office 365 Security & Compliance.png",
//       icon: <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M289.156 290.391C206.674 372.989 206.674 507.266 289.156 589.875C292.464 593.183 295.889 596.375 299.422 599.458V685.706C217.965 661.065 160.469 621.931 123.844 566.37C97.2631 525.983 83.1162 475.672 83.1162 421.137V221.825C165.941 212.7 238.616 175.164 299.429 110.247V280.809C295.895 283.891 292.471 287.083 289.163 290.392L289.156 290.391Z"
//           fill="currentColor" />
//         <path
//           d="M571.062 274.75V185.645C571.062 182.563 568.554 180.055 565.356 179.939C461.651 179.255 377.918 133.393 309.684 40.0699C307.517 37.1037 302.61 37.1037 300.443 40.0699C232.218 133.393 148.593 179.254 44.7712 179.939C41.579 180.055 39.0645 182.563 39.0645 185.645V421.239C39.0645 484.216 55.7207 542.858 87.2082 590.661C132.271 659.002 203.121 705.431 303.521 732.586C304.094 732.702 304.546 732.812 305.12 732.812C305.578 732.812 306.035 732.696 306.603 732.586C375.054 714.105 429.814 686.608 472.025 649.303C461.185 651.012 450.236 651.812 439.053 651.812C392.05 651.812 347.439 636.639 310.819 608.684V693.334C310.819 695.043 309.903 696.758 308.536 697.899C307.51 698.583 306.253 699.04 305.112 699.04C304.544 699.04 303.97 698.925 303.513 698.815C215.439 673.485 153.605 632.188 114.357 572.637C86.4018 530.308 71.6862 477.946 71.6862 421.129L71.6984 216.691C71.6984 213.841 73.9811 211.326 76.8315 211.1C163.422 202.659 238.722 162.499 300.785 91.6489C302.384 89.9398 304.892 89.2501 307.059 90.1657C309.342 90.9653 310.825 93.132 310.825 95.4148V271.571C386.587 213.509 494.903 213.515 571.059 274.763L571.062 274.75Z"
//           fill="currentColor" />
//         <path
//           d="M747.219 748.453C729.219 766.453 699.672 766.966 681.161 748.453L580.082 647.483C575.748 643.149 575.748 636.075 580.082 631.852L587.381 624.552L569.583 606.753C576.199 601.62 582.59 595.914 588.638 589.864C594.686 583.706 600.387 577.316 605.41 570.699L623.324 588.613L630.514 581.423C634.847 577.089 641.921 577.089 646.145 581.423L747.225 682.387C765.475 700.649 765.475 730.196 747.218 748.451L747.219 748.453Z"
//           fill="currentColor" />
//         <path
//           d="M580.546 298.485C502.514 220.335 375.421 220.335 297.265 298.485C219.109 376.635 219.115 503.61 297.265 581.766C374.846 659.347 501.593 660.714 580.546 581.766C658.579 503.622 658.579 376.531 580.546 298.485ZM557.042 558.266C496.703 618.586 394.604 628.213 320.776 558.266C255.596 493.086 255.353 387.422 320.776 322C385.796 256.98 491.761 256.711 557.042 322C622.325 387.277 622.075 493.235 557.042 558.266Z"
//           fill="currentColor" />
//         <path
//           d="M514.937 575.953V543.781C514.937 540.589 512.429 538.075 509.231 538.075C506.148 538.075 503.524 540.583 503.524 543.781V581.769C464.241 599.756 416.848 601.038 374.263 581.653V543.775C374.263 540.583 371.639 538.068 368.556 538.068C365.364 538.068 362.85 540.577 362.85 543.775V575.831C350.643 569.099 339.236 560.542 328.853 550.159L328.285 549.592L342.775 499.506C345.857 487.524 356.691 478.967 369.245 478.967L508.43 478.979C520.978 478.979 531.934 487.536 535.126 499.627L549.5 549.596C548.365 550.511 536.5 563.86 514.936 575.951L514.937 575.953Z"
//           fill="currentColor" />
//         <path
//           d="M438.953 462.094C474.09 462.094 502.845 433.456 502.845 398.202C502.845 362.947 474.098 334.31 438.953 334.31C403.7 334.31 374.951 362.947 374.951 398.202C374.951 433.456 403.698 462.094 438.953 462.094Z"
//           fill="currentColor" />
//       </svg>
//     },
//     {
//       id: 6,
//       title: "SOC & MDR Services",
//       path: "/services/soc",
//       highlights: [
//         "Enhanced Threat Detection",
//         "Rapid Incident Response",
//         "Continuous Protection",
//         "Improved Security Posture",
//       ],
//       logo: "../assets/Cyber Security.png",
//       icon: <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M565.312 520.672C593.181 493.36 616.398 463.519 624.748 434.789C649.858 348.199 643.328 173.274 643.011 165.883V165.877C642.852 161.336 639.593 157.497 635.143 156.587C561.254 140.492 490.032 113.961 423.612 77.7905C420.554 75.9839 416.752 75.9839 413.694 77.7905C347.323 113.917 276.158 140.425 202.334 156.514C197.879 157.417 194.626 161.256 194.461 165.797C194.461 173.195 187.613 348.032 212.723 434.704C221.067 463.44 244.211 493.272 272.159 520.586C172.184 536.333 93.8623 569.866 93.8623 618.358C93.8623 689.208 261.144 727.307 418.581 727.307C576.019 727.313 743.222 689.208 743.222 618.438C743.222 569.946 664.815 536.81 565.315 520.672L565.312 520.672ZM239.562 448.56C240.521 448.932 241.534 449.139 242.559 449.194C246.166 449.194 249.487 447.223 251.208 444.055C252.935 440.887 252.789 437.03 250.823 434.003C248.864 430.975 245.403 429.26 241.809 429.541C238.207 429.822 235.052 432.043 233.581 435.339C232.794 433.374 232.165 431.323 231.536 429.278C230.908 427.234 230.908 426.837 230.511 425.58V425.573C231.915 423.926 232.69 421.838 232.714 419.671C232.666 415.802 230.358 412.323 226.812 410.779C225.476 404.248 224.133 397.32 223.034 390.076C228.106 389.618 231.994 385.364 231.994 380.273C231.994 375.177 228.106 370.929 223.034 370.471C222.235 370.544 221.441 370.703 220.672 370.941C219.806 363.934 219.098 356.769 218.39 349.451C219.793 350.299 221.399 350.757 223.034 350.793C228.467 350.793 232.873 346.387 232.873 340.948C232.873 335.516 228.467 331.109 223.034 331.109C220.837 331.158 218.725 331.964 217.053 333.392C216.345 324.731 215.796 316.076 215.399 307.495C217.212 310.022 220.16 311.499 223.273 311.432C228.705 311.432 233.111 307.025 233.111 301.593C233.111 296.155 228.705 291.754 223.273 291.754C220.019 291.901 217.059 293.677 215.399 296.472C214.929 285.846 214.612 275.299 214.374 264.985C215.564 269.086 219.317 271.906 223.584 271.912C229.022 271.912 233.423 267.511 233.423 262.073C233.423 256.641 229.022 252.234 223.584 252.234C218.988 252.301 215.075 255.591 214.215 260.108V223.658C214.514 228.98 218.994 233.094 224.316 232.941C229.644 232.795 233.88 228.437 233.88 223.108C233.88 217.78 229.644 213.422 224.316 213.27C218.994 213.123 214.514 217.237 214.215 222.559V186.109C215.234 190.467 219.11 193.561 223.584 193.586C227.307 193.629 230.737 191.566 232.44 188.258C234.149 184.949 233.838 180.964 231.647 177.955C229.455 174.946 225.757 173.432 222.082 174.042C218.414 174.653 215.399 177.277 214.294 180.836V174.537C221.38 172.962 228.308 171.308 235.157 169.575V169.581C236.939 172.193 239.862 173.804 243.03 173.908C248.096 173.884 252.302 169.984 252.71 164.936C260.108 162.812 267.432 160.688 274.518 158.478C273.267 160.078 272.577 162.037 272.553 164.069C272.553 169.501 276.954 173.908 282.392 173.908C287.824 173.908 292.231 169.501 292.231 164.069C292.219 159.943 289.594 156.275 285.694 154.938L295.453 151.551H295.459C297.229 153.272 299.604 154.236 302.07 154.23C306.879 154.194 310.932 150.641 311.597 145.88C319.471 142.81 327.894 139.82 335.211 136.75C332.752 138.617 331.323 141.535 331.354 144.623C331.354 148.603 333.753 152.192 337.427 153.717C341.107 155.237 345.337 154.395 348.151 151.581C350.965 148.767 351.807 144.538 350.287 140.857C348.761 137.183 345.172 134.784 341.193 134.784C340.851 134.748 340.509 134.748 340.173 134.784L352.533 129.59H352.527C354.224 132.618 357.404 134.51 360.877 134.546C363.483 134.485 365.961 133.387 367.761 131.501C369.562 129.609 370.539 127.082 370.478 124.469C370.417 123.505 370.233 122.553 369.928 121.637C387.403 113.764 401.416 106.757 410.389 101.88C410.084 102.819 409.901 103.802 409.84 104.791C409.84 110.223 414.247 114.63 419.679 114.63C425.111 114.63 429.518 110.223 429.518 104.791C429.567 104.29 429.567 103.79 429.518 103.296C439.045 108.258 452.741 115.106 469.588 122.663C469.509 123.261 469.509 123.871 469.588 124.469C469.576 129.639 473.561 133.936 478.719 134.308C481.874 134.308 484.822 132.746 486.593 130.14L497.219 134.546C493.422 135.071 490.285 137.769 489.199 141.443C488.112 145.118 489.272 149.091 492.171 151.599C495.07 154.108 499.166 154.688 502.645 153.083C506.124 151.477 508.345 147.986 508.321 144.153C508.26 141.932 507.454 139.795 506.038 138.093C513.204 140.925 520.76 143.763 528.474 146.595L528.468 146.589C529.182 149.793 531.495 152.393 534.596 153.467C537.691 154.547 541.121 153.937 543.666 151.868L553.194 155.097L553.188 155.091C549.947 156.647 547.81 159.845 547.615 163.434C547.42 167.023 549.202 170.435 552.254 172.327C555.312 174.225 559.157 174.305 562.288 172.535C565.413 170.765 567.33 167.426 567.281 163.831C567.25 162.195 566.786 160.59 565.944 159.186C572.871 161.31 580.037 163.361 587.275 165.406C587.77 169.257 590.547 172.425 594.3 173.407C598.06 174.396 602.033 173.004 604.359 169.892L623.176 174.298H623.17C623.213 175.006 623.213 175.721 623.17 176.429C620.814 174.152 617.476 173.206 614.277 173.89C611.073 174.579 608.424 176.813 607.203 179.859C605.989 182.898 606.367 186.347 608.21 189.051C610.054 191.761 613.124 193.372 616.401 193.354C619.087 193.354 621.65 192.243 623.488 190.284V216.498V216.492C621.675 214.319 618.995 213.049 616.163 213.031C610.731 213.031 606.324 217.438 606.324 222.87C606.324 228.308 610.731 232.709 616.163 232.709C618.995 232.69 621.675 231.427 623.488 229.248V255.462C621.65 253.497 619.087 252.386 616.401 252.392C613.124 252.374 610.054 253.985 608.21 256.689C606.367 259.399 605.989 262.841 607.203 265.887C608.424 268.927 611.073 271.16 614.277 271.85C617.476 272.54 620.814 271.588 623.17 269.317C623.17 277.191 622.7 285.614 622.303 293.958C620.655 292.554 618.568 291.779 616.401 291.754C613.264 291.669 610.279 293.085 608.357 295.569C606.44 298.053 605.818 301.3 606.685 304.315C607.557 307.331 609.81 309.748 612.758 310.828C615.699 311.908 618.983 311.518 621.595 309.778C621.595 317.096 620.729 324.5 620.179 331.897C618.983 331.396 617.701 331.128 616.401 331.11C610.969 331.11 606.562 335.516 606.562 340.948C606.562 346.387 610.969 350.793 616.401 350.793C617.158 350.757 617.903 350.598 618.605 350.317C617.976 357.165 617.268 363.855 616.401 370.47C610.969 370.47 606.562 374.877 606.562 380.309C606.568 384.698 609.553 388.519 613.801 389.599C612.544 397.472 611.122 405.346 609.553 412.665C606.745 415.173 605.805 419.165 607.191 422.662C606.562 424.945 606.013 427.148 605.378 429.272C604.749 431.396 604.511 431.793 604.121 433.05V433.056C602.302 430.835 599.592 429.535 596.723 429.51C591.285 429.51 586.878 433.917 586.878 439.349C586.878 444.788 591.285 449.194 596.723 449.194C575.861 488.555 528.944 529.096 487.697 559.875L487.691 559.869C487.935 559.106 488.093 558.313 488.167 557.513C488.167 552.075 483.76 547.668 478.328 547.668C472.89 547.668 468.483 552.075 468.483 557.513C468.519 562.665 472.554 566.901 477.693 567.194L467.854 574.2C466.615 570.148 462.886 567.371 458.644 567.352C453.212 567.352 448.805 571.759 448.805 577.191C448.732 580.267 450.135 583.197 452.583 585.065L445.418 589.868V589.862C442.549 587.274 438.417 586.627 434.889 588.214C431.355 589.801 429.097 593.317 429.127 597.186C429.188 598.175 429.371 599.152 429.677 600.098L418.263 607.263L408.735 601.361V601.355C409.327 600.043 409.651 598.627 409.681 597.186C409.724 593.06 407.173 589.356 403.309 587.927C399.44 586.499 395.094 587.653 392.439 590.808L385.042 585.846V585.852C388.081 584.168 389.979 580.982 390.004 577.509C390.004 574.896 388.966 572.394 387.117 570.551C385.273 568.701 382.771 567.664 380.159 567.664C375.367 567.731 371.333 571.265 370.637 576.007L358.516 566.876C359.218 566.962 359.932 566.962 360.64 566.876C365.309 567.059 369.514 564.05 370.845 559.57C372.181 555.084 370.301 550.269 366.291 547.87C362.275 545.471 357.148 546.094 353.828 549.39C350.508 552.685 349.842 557.806 352.217 561.841C310.103 531.141 260.901 488.947 239.562 448.56ZM418.5 707.716C238.703 707.716 113.453 660.481 113.453 618.445C113.453 586.958 182.02 553.266 290.422 537.756H290.416C328.789 571.008 369.987 600.849 413.536 626.947C416.6 628.735 420.39 628.735 423.454 626.947C467.003 600.849 508.201 571.008 546.574 537.756C654.973 553.503 723.543 587.195 723.543 618.445C723.537 660.639 598.293 707.716 418.496 707.716H418.5Z"
//           fill="currentColor" />
//         <path
//           d="M606.64 242.563C606.64 247.995 602.233 252.402 596.795 252.402C591.363 252.402 586.956 247.995 586.956 242.563C586.956 237.124 591.363 232.718 596.795 232.718C602.233 232.718 606.64 237.124 606.64 242.563Z"
//           fill="currentColor" />
//         <path
//           d="M606.64 281.922C606.64 287.36 602.233 291.767 596.795 291.767C591.363 291.767 586.956 287.36 586.956 281.922C586.956 276.49 591.363 272.083 596.795 272.083C602.233 272.083 606.64 276.49 606.64 281.922Z"
//           fill="currentColor" />
//         <path
//           d="M606.64 321.281C606.64 326.713 602.233 331.12 596.795 331.12C591.363 331.12 586.956 326.713 586.956 321.281C586.956 315.849 591.363 311.442 596.795 311.442C602.233 311.442 606.64 315.849 606.64 321.281Z"
//           fill="currentColor" />
//         <path
//           d="M606.64 360.641C606.64 366.073 602.233 370.48 596.795 370.48C591.363 370.48 586.956 366.073 586.956 360.641C586.956 355.202 591.363 350.802 596.795 350.802C602.233 350.802 606.64 355.202 606.64 360.641Z"
//           fill="currentColor" />
//         <path
//           d="M606.64 400C606.64 405.432 602.233 409.839 596.795 409.839C591.363 409.839 586.956 405.432 586.956 400C586.956 394.562 591.363 390.155 596.795 390.155C602.233 390.155 606.64 394.562 606.64 400Z"
//           fill="currentColor" />
//         <path
//           d="M586.953 183.516C586.953 188.954 582.546 193.361 577.114 193.361C571.682 193.361 567.275 188.954 567.275 183.516C567.275 178.083 571.682 173.677 577.114 173.677C582.546 173.677 586.953 178.083 586.953 183.516Z"
//           fill="currentColor" />
//         <path
//           d="M586.953 222.875C586.953 228.313 582.546 232.714 577.114 232.714C571.682 232.714 567.275 228.313 567.275 222.875C567.275 217.443 571.682 213.036 577.114 213.036C582.546 213.036 586.953 217.443 586.953 222.875Z"
//           fill="currentColor" />
//         <path
//           d="M567.281 242.563C567.281 247.995 562.874 252.402 557.442 252.402C552.003 252.402 547.597 247.995 547.597 242.563C547.597 237.124 552.003 232.718 557.442 232.718C562.874 232.718 567.281 237.124 567.281 242.563Z"
//           fill="currentColor" />
//         <path
//           d="M606.64 203.203C606.64 208.635 602.233 213.042 596.795 213.042C591.363 213.042 586.956 208.635 586.956 203.203C586.956 197.765 591.363 193.364 596.795 193.364C602.233 193.364 606.64 197.765 606.64 203.203Z"
//           fill="currentColor" />
//         <path
//           d="M586.953 262.234C586.953 267.667 582.546 272.073 577.114 272.073C571.682 272.073 567.275 267.667 567.275 262.234C567.275 256.802 571.682 252.396 577.114 252.396C582.546 252.396 586.953 256.802 586.953 262.234Z"
//           fill="currentColor" />
//         <path
//           d="M567.281 281.922C567.281 287.36 562.874 291.767 557.442 291.767C552.003 291.767 547.597 287.36 547.597 281.922C547.597 276.49 552.003 272.083 557.442 272.083C562.874 272.083 567.281 276.49 567.281 281.922Z"
//           fill="currentColor" />
//         <path
//           d="M586.953 301.594C586.953 307.026 582.546 311.433 577.114 311.433C571.682 311.433 567.275 307.026 567.275 301.594C567.275 296.155 571.682 291.755 577.114 291.755C582.546 291.755 586.953 296.155 586.953 301.594Z"
//           fill="currentColor" />
//         <path
//           d="M567.281 321.281C567.281 326.713 562.874 331.12 557.442 331.12C552.003 331.12 547.597 326.713 547.597 321.281C547.597 315.849 552.003 311.442 557.442 311.442C562.874 311.442 567.281 315.849 567.281 321.281Z"
//           fill="currentColor" />
//         <path
//           d="M586.953 340.953C586.953 346.391 582.546 350.798 577.114 350.798C571.682 350.798 567.275 346.391 567.275 340.953C567.275 335.521 571.682 331.114 577.114 331.114C582.546 331.114 586.953 335.521 586.953 340.953Z"
//           fill="currentColor" />
//         <path
//           d="M567.281 360.641C567.281 366.073 562.874 370.48 557.442 370.48C552.003 370.48 547.597 366.073 547.597 360.641C547.597 355.202 552.003 350.802 557.442 350.802C562.874 350.802 567.281 355.202 567.281 360.641Z"
//           fill="currentColor" />
//         <path
//           d="M586.953 380.313C586.953 385.751 582.546 390.151 577.114 390.151C571.682 390.151 567.275 385.751 567.275 380.313C567.275 374.88 571.682 370.474 577.114 370.474C582.546 370.474 586.953 374.88 586.953 380.313Z"
//           fill="currentColor" />
//         <path
//           d="M586.953 419.672C586.953 425.104 582.546 429.511 577.114 429.511C571.682 429.511 567.275 425.104 567.275 419.672C567.275 414.24 571.682 409.833 577.114 409.833C582.546 409.833 586.953 414.24 586.953 419.672Z"
//           fill="currentColor" />
//         <path
//           d="M567.281 439.359C567.281 444.798 562.874 449.204 557.442 449.204C552.003 449.204 547.597 444.798 547.597 439.359C547.597 433.927 552.003 429.521 557.442 429.521C562.874 429.521 567.281 433.927 567.281 439.359Z"
//           fill="currentColor" />
//         <path
//           d="M586.953 459.047C586.953 464.479 582.546 468.886 577.114 468.886C571.682 468.886 567.275 464.479 567.275 459.047C567.275 453.609 571.682 449.208 577.114 449.208C582.546 449.208 586.953 453.609 586.953 459.047Z"
//           fill="currentColor" />
//         <path
//           d="M567.281 478.719C567.281 484.157 562.874 488.558 557.442 488.558C552.003 488.558 547.597 484.157 547.597 478.719C547.597 473.287 552.003 468.88 557.442 468.88C562.874 468.88 567.281 473.287 567.281 478.719Z"
//           fill="currentColor" />
//         <path
//           d="M547.594 183.516C547.594 188.954 543.193 193.361 537.755 193.361C532.323 193.361 527.916 188.954 527.916 183.516C527.916 178.083 532.323 173.677 537.755 173.677C543.193 173.677 547.594 178.083 547.594 183.516Z"
//           fill="currentColor" />
//         <path
//           d="M547.594 222.875C547.594 228.313 543.193 232.714 537.755 232.714C532.323 232.714 527.916 228.313 527.916 222.875C527.916 217.443 532.323 213.036 537.755 213.036C543.193 213.036 547.594 217.443 547.594 222.875Z"
//           fill="currentColor" />
//         <path
//           d="M567.281 203.203C567.281 208.635 562.874 213.042 557.442 213.042C552.003 213.042 547.597 208.635 547.597 203.203C547.597 197.765 552.003 193.364 557.442 193.364C562.874 193.364 567.281 197.765 567.281 203.203Z"
//           fill="currentColor" />
//         <path
//           d="M547.594 262.234C547.594 267.667 543.193 272.073 537.755 272.073C532.323 272.073 527.916 267.667 527.916 262.234C527.916 256.802 532.323 252.396 537.755 252.396C543.193 252.396 547.594 256.802 547.594 262.234Z"
//           fill="currentColor" />
//         <path
//           d="M547.594 301.594C547.594 307.026 543.193 311.433 537.755 311.433C532.323 311.433 527.916 307.026 527.916 301.594C527.916 296.155 532.323 291.755 537.755 291.755C543.193 291.755 547.594 296.155 547.594 301.594Z"
//           fill="currentColor" />
//         <path
//           d="M527.922 321.281C527.922 326.713 523.515 331.12 518.083 331.12C512.651 331.12 508.244 326.713 508.244 321.281C508.244 315.849 512.651 311.442 518.083 311.442C523.515 311.442 527.922 315.849 527.922 321.281Z"
//           fill="currentColor" />
//         <path
//           d="M547.594 340.953C547.594 346.391 543.193 350.798 537.755 350.798C532.323 350.798 527.916 346.391 527.916 340.953C527.916 335.521 532.323 331.114 537.755 331.114C543.193 331.114 547.594 335.521 547.594 340.953Z"
//           fill="currentColor" />
//         <path
//           d="M567.281 400C567.281 405.432 562.874 409.839 557.442 409.839C552.003 409.839 547.597 405.432 547.597 400C547.597 394.562 552.003 390.155 557.442 390.155C562.874 390.155 567.281 394.562 567.281 400Z"
//           fill="currentColor" />
//         <path
//           d="M547.594 498.407C547.594 503.839 543.193 508.245 537.755 508.245C532.323 508.245 527.916 503.839 527.916 498.407C527.916 492.968 532.323 488.562 537.755 488.562C543.193 488.562 547.594 492.968 547.594 498.407Z"
//           fill="currentColor" />
//         <path
//           d="M527.922 518.078C527.922 523.51 523.515 527.917 518.083 527.917C512.651 527.917 508.244 523.51 508.244 518.078C508.244 512.646 512.651 508.239 518.083 508.239C523.515 508.239 527.922 512.646 527.922 518.078Z"
//           fill="currentColor" />
//         <path
//           d="M508.234 183.516C508.234 188.954 503.827 193.361 498.395 193.361C492.957 193.361 488.55 188.954 488.55 183.516C488.55 178.083 492.957 173.677 498.395 173.677C503.827 173.677 508.234 178.083 508.234 183.516Z"
//           fill="currentColor" />
//         <path
//           d="M527.922 163.844C527.922 169.276 523.515 173.683 518.083 173.683C512.651 173.683 508.244 169.276 508.244 163.844C508.244 158.412 512.651 154.005 518.083 154.005C523.515 154.005 527.922 158.412 527.922 163.844Z"
//           fill="currentColor" />
//         <path
//           d="M508.234 222.875C508.234 228.313 503.827 232.714 498.395 232.714C492.957 232.714 488.55 228.313 488.55 222.875C488.55 217.443 492.957 213.036 498.395 213.036C503.827 213.036 508.234 217.443 508.234 222.875Z"
//           fill="currentColor" />
//         <path
//           d="M527.922 203.203C527.922 208.635 523.515 213.042 518.083 213.042C512.651 213.042 508.244 208.635 508.244 203.203C508.244 197.765 512.651 193.364 518.083 193.364C523.515 193.364 527.922 197.765 527.922 203.203Z"
//           fill="currentColor" />
//         <path
//           d="M508.234 262.234C508.234 267.667 503.827 272.073 498.395 272.073C492.957 272.073 488.55 267.667 488.55 262.234C488.55 256.802 492.957 252.396 498.395 252.396C503.827 252.396 508.234 256.802 508.234 262.234Z"
//           fill="currentColor" />
//         <path
//           d="M488.563 281.922C488.563 287.36 484.162 291.767 478.724 291.767C473.291 291.767 468.885 287.36 468.885 281.922C468.885 276.49 473.291 272.083 478.724 272.083C484.162 272.083 488.563 276.49 488.563 281.922Z"
//           fill="currentColor" />
//         <path
//           d="M527.922 242.563C527.922 247.995 523.515 252.402 518.083 252.402C512.651 252.402 508.244 247.995 508.244 242.563C508.244 237.124 512.651 232.718 518.083 232.718C523.515 232.718 527.922 237.124 527.922 242.563Z"
//           fill="currentColor" />
//         <path
//           d="M508.234 301.594C508.234 307.026 503.827 311.433 498.395 311.433C492.957 311.433 488.55 307.026 488.55 301.594C488.55 296.155 492.957 291.755 498.395 291.755C503.827 291.755 508.234 296.155 508.234 301.594Z"
//           fill="currentColor" />
//         <path
//           d="M527.922 281.922C527.922 287.36 523.515 291.767 518.083 291.767C512.651 291.767 508.244 287.36 508.244 281.922C508.244 276.49 512.651 272.083 518.083 272.083C523.515 272.083 527.922 276.49 527.922 281.922Z"
//           fill="currentColor" />
//         <path
//           d="M488.563 518.078C488.563 523.51 484.162 527.917 478.724 527.917C473.291 527.917 468.885 523.51 468.885 518.078C468.885 512.646 473.291 508.239 478.724 508.239C484.162 508.239 488.563 512.646 488.563 518.078Z"
//           fill="currentColor" />
//         <path
//           d="M508.234 537.75C508.234 543.188 503.827 547.589 498.395 547.589C492.957 547.589 488.55 543.188 488.55 537.75C488.55 532.318 492.957 527.911 498.395 527.911C503.827 527.911 508.234 532.318 508.234 537.75Z"
//           fill="currentColor" />
//         <path
//           d="M468.875 144.157C468.875 149.589 464.468 153.995 459.036 153.995C453.598 153.995 449.197 149.589 449.197 144.157C449.197 138.718 453.598 134.312 459.036 134.312C464.468 134.312 468.875 138.718 468.875 144.157Z"
//           fill="currentColor" />
//         <path
//           d="M488.563 163.844C488.563 169.276 484.162 173.683 478.724 173.683C473.291 173.683 468.885 169.276 468.885 163.844C468.885 158.412 473.291 154.005 478.724 154.005C484.162 154.005 488.563 158.412 488.563 163.844Z"
//           fill="currentColor" />
//         <path
//           d="M468.875 301.594C468.875 307.026 464.468 311.433 459.036 311.433C453.598 311.433 449.197 307.026 449.197 301.594C449.197 296.155 453.598 291.755 459.036 291.755C464.468 291.755 468.875 296.155 468.875 301.594Z"
//           fill="currentColor" />
//         <path
//           d="M468.875 537.75C468.875 543.188 464.468 547.589 459.036 547.589C453.598 547.589 449.197 543.188 449.197 537.75C449.197 532.318 453.598 527.911 459.036 527.911C464.468 527.911 468.875 532.318 468.875 537.75Z"
//           fill="currentColor" />
//         <path
//           d="M449.202 557.438C449.202 562.87 444.796 567.277 439.357 567.277C433.925 567.277 429.519 562.87 429.519 557.438C429.519 552 433.925 547.593 439.357 547.593C444.796 547.593 449.202 552 449.202 557.438Z"
//           fill="currentColor" />
//         <path
//           d="M449.202 518.078C449.202 523.51 444.796 527.917 439.357 527.917C433.925 527.917 429.519 523.51 429.519 518.078C429.519 512.646 433.925 508.239 439.357 508.239C444.796 508.239 449.202 512.646 449.202 518.078Z"
//           fill="currentColor" />
//         <path
//           d="M429.516 144.157C429.516 149.589 425.109 153.995 419.677 153.995C414.245 153.995 409.838 149.589 409.838 144.157C409.838 138.718 414.245 134.312 419.677 134.312C425.109 134.312 429.516 138.718 429.516 144.157Z"
//           fill="currentColor" />
//         <path
//           d="M449.202 124.469C449.202 129.907 444.796 134.308 439.357 134.308C433.925 134.308 429.519 129.907 429.519 124.469C429.519 119.037 433.925 114.63 439.357 114.63C444.796 114.63 449.202 119.037 449.202 124.469Z"
//           fill="currentColor" />
//         <path
//           d="M429.516 537.75C429.516 543.188 425.109 547.589 419.677 547.589C414.245 547.589 409.838 543.188 409.838 537.75C409.838 532.318 414.245 527.911 419.677 527.911C425.109 527.911 429.516 532.318 429.516 537.75Z"
//           fill="currentColor" />
//         <path
//           d="M409.843 557.438C409.843 562.87 405.436 567.277 400.004 567.277C394.566 567.277 390.159 562.87 390.159 557.438C390.159 552 394.566 547.593 400.004 547.593C405.436 547.593 409.843 552 409.843 557.438Z"
//           fill="currentColor" />
//         <path
//           d="M429.516 577.125C429.516 582.557 425.109 586.964 419.677 586.964C414.245 586.964 409.838 582.557 409.838 577.125C409.838 571.693 414.245 567.286 419.677 567.286C425.109 567.286 429.516 571.693 429.516 577.125Z"
//           fill="currentColor" />
//         <path
//           d="M390.156 144.157C390.156 149.589 385.756 153.995 380.317 153.995C374.885 153.995 370.479 149.589 370.479 144.157C370.479 138.718 374.885 134.312 380.317 134.312C385.756 134.312 390.156 138.718 390.156 144.157Z"
//           fill="currentColor" />
//         <path
//           d="M409.843 124.469C409.843 129.907 405.436 134.308 400.004 134.308C394.566 134.308 390.159 129.907 390.159 124.469C390.159 119.037 394.566 114.63 400.004 114.63C405.436 114.63 409.843 119.037 409.843 124.469Z"
//           fill="currentColor" />
//         <path
//           d="M370.484 281.922C370.484 287.36 366.078 291.767 360.646 291.767C355.207 291.767 350.807 287.36 350.807 281.922C350.807 276.49 355.207 272.083 360.646 272.083C366.078 272.083 370.484 276.49 370.484 281.922Z"
//           fill="currentColor" />
//         <path
//           d="M390.156 301.594C390.156 307.026 385.756 311.433 380.317 311.433C374.885 311.433 370.479 307.026 370.479 301.594C370.479 296.155 374.885 291.755 380.317 291.755C385.756 291.755 390.156 296.155 390.156 301.594Z"
//           fill="currentColor" />
//         <path
//           d="M409.843 518.078C409.843 523.51 405.436 527.917 400.004 527.917C394.566 527.917 390.159 523.51 390.159 518.078C390.159 512.646 394.566 508.239 400.004 508.239C405.436 508.239 409.843 512.646 409.843 518.078Z"
//           fill="currentColor" />
//         <path
//           d="M390.156 537.75C390.156 543.188 385.756 547.589 380.317 547.589C374.885 547.589 370.479 543.188 370.479 537.75C370.479 532.318 374.885 527.911 380.317 527.911C385.756 527.911 390.156 532.318 390.156 537.75Z"
//           fill="currentColor" />
//         <path
//           d="M350.796 183.516C350.796 188.954 346.39 193.361 340.951 193.361C335.519 193.361 331.112 188.954 331.112 183.516C331.112 178.083 335.519 173.677 340.951 173.677C346.39 173.677 350.796 178.083 350.796 183.516Z"
//           fill="currentColor" />
//         <path
//           d="M331.109 203.203C331.109 208.635 326.703 213.042 321.271 213.042C315.838 213.042 311.432 208.635 311.432 203.203C311.432 197.765 315.838 193.364 321.271 193.364C326.703 193.364 331.109 197.765 331.109 203.203Z"
//           fill="currentColor" />
//         <path
//           d="M370.484 163.844C370.484 169.276 366.078 173.683 360.646 173.683C355.207 173.683 350.807 169.276 350.807 163.844C350.807 158.412 355.207 154.005 360.646 154.005C366.078 154.005 370.484 158.412 370.484 163.844Z"
//           fill="currentColor" />
//         <path
//           d="M350.796 262.234C350.796 267.667 346.39 272.073 340.951 272.073C335.519 272.073 331.112 267.667 331.112 262.234C331.112 256.802 335.519 252.396 340.951 252.396C346.39 252.396 350.796 256.802 350.796 262.234Z"
//           fill="currentColor" />
//         <path
//           d="M331.109 281.922C331.109 287.36 326.703 291.767 321.271 291.767C315.838 291.767 311.432 287.36 311.432 281.922C311.432 276.49 315.838 272.083 321.271 272.083C326.703 272.083 331.109 276.49 331.109 281.922Z"
//           fill="currentColor" />
//         <path
//           d="M350.796 301.594C350.796 307.026 346.39 311.433 340.951 311.433C335.519 311.433 331.112 307.026 331.112 301.594C331.112 296.155 335.519 291.755 340.951 291.755C346.39 291.755 350.796 296.155 350.796 301.594Z"
//           fill="currentColor" />
//         <path
//           d="M350.796 537.75C350.796 543.188 346.39 547.589 340.951 547.589C335.519 547.589 331.112 543.188 331.112 537.75C331.112 532.318 335.519 527.911 340.951 527.911C346.39 527.911 350.796 532.318 350.796 537.75Z"
//           fill="currentColor" />
//         <path
//           d="M370.484 518.078C370.484 523.51 366.078 527.917 360.646 527.917C355.207 527.917 350.807 523.51 350.807 518.078C350.807 512.646 355.207 508.239 360.646 508.239C366.078 508.239 370.484 512.646 370.484 518.078Z"
//           fill="currentColor" />
//         <path
//           d="M331.109 518.078C331.109 523.51 326.703 527.917 321.271 527.917C315.838 527.917 311.432 523.51 311.432 518.078C311.432 512.646 315.838 508.239 321.271 508.239C326.703 508.239 331.109 512.646 331.109 518.078Z"
//           fill="currentColor" />
//         <path
//           d="M311.438 183.516C311.438 188.954 307.031 193.361 301.599 193.361C296.16 193.361 291.76 188.954 291.76 183.516C291.76 178.083 296.16 173.677 301.599 173.677C307.031 173.677 311.438 178.083 311.438 183.516Z"
//           fill="currentColor" />
//         <path
//           d="M331.109 163.844C331.109 169.276 326.703 173.683 321.271 173.683C315.838 173.683 311.432 169.276 311.432 163.844C311.432 158.412 315.838 154.005 321.271 154.005C326.703 154.005 331.109 158.412 331.109 163.844Z"
//           fill="currentColor" />
//         <path
//           d="M311.438 222.875C311.438 228.313 307.031 232.714 301.599 232.714C296.16 232.714 291.76 228.313 291.76 222.875C291.76 217.443 296.16 213.036 301.599 213.036C307.031 213.036 311.438 217.443 311.438 222.875Z"
//           fill="currentColor" />
//         <path
//           d="M311.438 262.234C311.438 267.667 307.031 272.073 301.599 272.073C296.16 272.073 291.76 267.667 291.76 262.234C291.76 256.802 296.16 252.396 301.599 252.396C307.031 252.396 311.438 256.802 311.438 262.234Z"
//           fill="currentColor" />
//         <path
//           d="M331.109 242.563C331.109 247.995 326.703 252.402 321.271 252.402C315.838 252.402 311.432 247.995 311.432 242.563C311.432 237.124 315.838 232.718 321.271 232.718C326.703 232.718 331.109 237.124 331.109 242.563Z"
//           fill="currentColor" />
//         <path
//           d="M311.438 301.594C311.438 307.026 307.031 311.433 301.599 311.433C296.16 311.433 291.76 307.026 291.76 301.594C291.76 296.155 296.16 291.755 301.599 291.755C307.031 291.755 311.438 296.155 311.438 301.594Z"
//           fill="currentColor" />
//         <path
//           d="M311.438 340.953C311.438 346.391 307.031 350.798 301.599 350.798C296.16 350.798 291.76 346.391 291.76 340.953C291.76 335.521 296.16 331.114 301.599 331.114C307.031 331.114 311.438 335.521 311.438 340.953Z"
//           fill="currentColor" />
//         <path
//           d="M331.109 321.281C331.109 326.713 326.703 331.12 321.271 331.12C315.838 331.12 311.432 326.713 311.432 321.281C311.432 315.849 315.838 311.442 321.271 311.442C326.703 311.442 331.109 315.849 331.109 321.281Z"
//           fill="currentColor" />
//         <path
//           d="M291.765 478.719C291.765 484.157 287.358 488.558 281.92 488.558C276.488 488.558 272.081 484.157 272.081 478.719C272.081 473.287 276.488 468.88 281.92 468.88C287.358 468.88 291.765 473.287 291.765 478.719Z"
//           fill="currentColor" />
//         <path
//           d="M311.438 498.407C311.438 503.839 307.031 508.245 301.599 508.245C296.16 508.245 291.76 503.839 291.76 498.407C291.76 492.968 296.16 488.562 301.599 488.562C307.031 488.562 311.438 492.968 311.438 498.407Z"
//           fill="currentColor" />
//         <path
//           d="M272.078 183.516C272.078 188.954 267.671 193.361 262.239 193.361C256.807 193.361 252.4 188.954 252.4 183.516C252.4 178.083 256.807 173.677 262.239 173.677C267.671 173.677 272.078 178.083 272.078 183.516Z"
//           fill="currentColor" />
//         <path
//           d="M272.078 222.875C272.078 228.313 267.671 232.714 262.239 232.714C256.807 232.714 252.4 228.313 252.4 222.875C252.4 217.443 256.807 213.036 262.239 213.036C267.671 213.036 272.078 217.443 272.078 222.875Z"
//           fill="currentColor" />
//         <path
//           d="M291.765 203.203C291.765 208.635 287.358 213.042 281.92 213.042C276.488 213.042 272.081 208.635 272.081 203.203C272.081 197.765 276.488 193.364 281.92 193.364C287.358 193.364 291.765 197.765 291.765 203.203Z"
//           fill="currentColor" />
//         <path
//           d="M272.078 262.234C272.078 267.667 267.671 272.073 262.239 272.073C256.807 272.073 252.4 267.667 252.4 262.234C252.4 256.802 256.807 252.396 262.239 252.396C267.671 252.396 272.078 256.802 272.078 262.234Z"
//           fill="currentColor" />
//         <path
//           d="M291.765 242.563C291.765 247.995 287.358 252.402 281.92 252.402C276.488 252.402 272.081 247.995 272.081 242.563C272.081 237.124 276.488 232.718 281.92 232.718C287.358 232.718 291.765 237.124 291.765 242.563Z"
//           fill="currentColor" />
//         <path
//           d="M272.078 301.594C272.078 307.026 267.671 311.433 262.239 311.433C256.807 311.433 252.4 307.026 252.4 301.594C252.4 296.155 256.807 291.755 262.239 291.755C267.671 291.755 272.078 296.155 272.078 301.594Z"
//           fill="currentColor" />
//         <path
//           d="M291.765 281.922C291.765 287.36 287.358 291.767 281.92 291.767C276.488 291.767 272.081 287.36 272.081 281.922C272.081 276.49 276.488 272.083 281.92 272.083C287.358 272.083 291.765 276.49 291.765 281.922Z"
//           fill="currentColor" />
//         <path
//           d="M272.078 340.953C272.078 346.391 267.671 350.798 262.239 350.798C256.807 350.798 252.4 346.391 252.4 340.953C252.4 335.521 256.807 331.114 262.239 331.114C267.671 331.114 272.078 335.521 272.078 340.953Z"
//           fill="currentColor" />
//         <path
//           d="M291.765 321.281C291.765 326.713 287.358 331.12 281.92 331.12C276.488 331.12 272.081 326.713 272.081 321.281C272.081 315.849 276.488 311.442 281.92 311.442C287.358 311.442 291.765 315.849 291.765 321.281Z"
//           fill="currentColor" />
//         <path
//           d="M272.078 380.313C272.078 385.751 267.671 390.151 262.239 390.151C256.807 390.151 252.4 385.751 252.4 380.313C252.4 374.88 256.807 370.474 262.239 370.474C267.671 370.474 272.078 374.88 272.078 380.313Z"
//           fill="currentColor" />
//         <path
//           d="M252.406 400C252.406 405.432 247.999 409.839 242.567 409.839C237.128 409.839 232.722 405.432 232.722 400C232.722 394.562 237.128 390.155 242.567 390.155C247.999 390.155 252.406 394.562 252.406 400Z"
//           fill="currentColor" />
//         <path
//           d="M291.765 360.641C291.765 366.073 287.358 370.48 281.92 370.48C276.488 370.48 272.081 366.073 272.081 360.641C272.081 355.202 276.488 350.802 281.92 350.802C287.358 350.802 291.765 355.202 291.765 360.641Z"
//           fill="currentColor" />
//         <path
//           d="M272.078 419.672C272.078 425.104 267.671 429.511 262.239 429.511C256.807 429.511 252.4 425.104 252.4 419.672C252.4 414.24 256.807 409.833 262.239 409.833C267.671 409.833 272.078 414.24 272.078 419.672Z"
//           fill="currentColor" />
//         <path
//           d="M291.765 400C291.765 405.432 287.358 409.839 281.92 409.839C276.488 409.839 272.081 405.432 272.081 400C272.081 394.562 276.488 390.155 281.92 390.155C287.358 390.155 291.765 394.562 291.765 400Z"
//           fill="currentColor" />
//         <path
//           d="M272.078 459.047C272.078 464.479 267.671 468.886 262.239 468.886C256.807 468.886 252.4 464.479 252.4 459.047C252.4 453.609 256.807 449.208 262.239 449.208C267.671 449.208 272.078 453.609 272.078 459.047Z"
//           fill="currentColor" />
//         <path
//           d="M291.765 439.359C291.765 444.798 287.358 449.204 281.92 449.204C276.488 449.204 272.081 444.798 272.081 439.359C272.081 433.927 276.488 429.521 281.92 429.521C287.358 429.521 291.765 433.927 291.765 439.359Z"
//           fill="currentColor" />
//         <path
//           d="M252.406 203.203C252.406 208.635 247.999 213.042 242.567 213.042C237.128 213.042 232.722 208.635 232.722 203.203C232.722 197.765 237.128 193.364 242.567 193.364C247.999 193.364 252.406 197.765 252.406 203.203Z"
//           fill="currentColor" />
//         <path
//           d="M252.406 242.563C252.406 247.995 247.999 252.402 242.567 252.402C237.128 252.402 232.722 247.995 232.722 242.563C232.722 237.124 237.128 232.718 242.567 232.718C247.999 232.718 252.406 237.124 252.406 242.563Z"
//           fill="currentColor" />
//         <path
//           d="M252.406 281.922C252.406 287.36 247.999 291.767 242.567 291.767C237.128 291.767 232.722 287.36 232.722 281.922C232.722 276.49 237.128 272.083 242.567 272.083C247.999 272.083 252.406 276.49 252.406 281.922Z"
//           fill="currentColor" />
//         <path
//           d="M252.406 321.281C252.406 326.713 247.999 331.12 242.567 331.12C237.128 331.12 232.722 326.713 232.722 321.281C232.722 315.849 237.128 311.442 242.567 311.442C247.999 311.442 252.406 315.849 252.406 321.281Z"
//           fill="currentColor" />
//         <path
//           d="M252.406 360.641C252.406 366.073 247.999 370.48 242.567 370.48C237.128 370.48 232.722 366.073 232.722 360.641C232.722 355.202 237.128 350.802 242.567 350.802C247.999 350.802 252.406 355.202 252.406 360.641Z"
//           fill="currentColor" />
//         <path
//           d="M313.953 485.172C315.791 487.302 318.458 488.535 321.272 488.553C321.772 488.602 322.272 488.602 322.767 488.553C326.704 489.731 330.64 490.677 334.418 491.465V491.471C331.916 493.693 330.714 497.037 331.232 500.345C331.745 503.654 333.912 506.467 336.97 507.822C340.034 509.177 343.574 508.884 346.369 507.041C349.165 505.198 350.831 502.061 350.794 498.71C350.739 497.111 350.306 495.548 349.531 494.144C356.061 495.17 363.068 495.957 370.471 496.665C370.392 497.318 370.392 497.977 370.471 498.63C370.471 504.069 374.878 508.469 380.31 508.469C385.748 508.469 390.149 504.069 390.149 498.63C390.186 498.423 390.186 498.209 390.149 498.002C396.607 498.002 403.217 498.551 409.985 498.63H409.991C409.991 504.069 414.392 508.469 419.83 508.469C425.262 508.469 429.669 504.069 429.669 498.63C435.73 498.63 442.419 498.63 449.505 497.922V498.63C449.505 504.069 453.912 508.469 459.344 508.469C464.782 508.469 469.189 504.069 469.189 498.63C469.268 497.929 469.268 497.214 469.189 496.506C476.434 495.798 483.672 494.932 490.759 493.754H490.753C489.813 495.206 489.294 496.897 489.258 498.63C489.258 504.069 493.664 508.469 499.103 508.469C504.535 508.469 508.942 504.069 508.942 498.63C508.948 495.512 507.452 492.582 504.925 490.757C508.545 489.89 512.012 488.944 515.24 487.925C516.37 488.364 517.566 488.602 518.78 488.633C522.571 488.614 526.007 486.405 527.6 482.969C534.772 480.088 540.46 474.399 543.341 467.222C546.344 465.537 548.199 462.363 548.199 458.915C548.199 455.473 546.344 452.299 543.341 450.614C542.871 444.791 542.163 437.309 541.058 428.806C545.233 427.647 548.126 423.85 548.144 419.517C548.144 416.911 547.107 414.408 545.263 412.559C543.414 410.716 540.911 409.678 538.305 409.678C537.127 402.83 535.626 395.744 533.899 388.737H533.892C535.29 389.531 536.859 389.964 538.458 390.001C543.896 390.001 548.303 385.594 548.303 380.156C548.303 374.724 543.896 370.317 538.458 370.317C534.985 370.341 531.793 372.24 530.114 375.279C529.089 372.13 527.99 368.901 526.806 365.831H526.812C528.802 363.096 529.175 359.501 527.795 356.413C526.41 353.325 523.486 351.213 520.117 350.877C514.788 338.627 504.864 328.966 492.486 323.955H491.228L488.866 323.327V323.321C488.933 322.722 488.933 322.112 488.866 321.514C488.933 318.804 487.884 316.192 485.961 314.287C484.038 312.377 481.414 311.352 478.71 311.437C474.474 311.455 470.739 314.233 469.5 318.285C461.626 316.631 454.15 315.453 446.434 314.507C444.603 312.548 442.034 311.431 439.348 311.437C437.389 311.486 435.49 312.145 433.916 313.323C424.4 312.737 414.861 312.737 405.345 313.323C403.777 312.206 401.915 311.571 399.993 311.517C397.441 311.541 395 312.524 393.145 314.269C385.271 315.136 377.398 316.314 369.53 317.889L369.524 317.895C367.938 313.354 363.287 310.65 358.563 311.517C353.832 312.377 350.439 316.552 350.555 321.355C350.518 321.746 350.518 322.143 350.555 322.533L345.989 323.791H344.811L344.805 323.797C332.189 328.954 322.118 338.885 316.783 351.428C313.347 353.18 311.253 356.781 311.43 360.638C311.485 361.523 311.668 362.402 311.98 363.232C310.643 366.461 309.459 369.842 308.36 373.23C306.529 371.496 304.112 370.514 301.592 370.477C296.153 370.477 291.753 374.884 291.753 380.316C291.753 385.754 296.153 390.155 301.592 390.155C302.269 390.234 302.959 390.234 303.636 390.155C301.903 397.003 300.487 404.01 299.309 410.699V410.705C295.415 411.504 292.424 414.635 291.808 418.566C291.197 422.491 293.089 426.385 296.55 428.338C295.293 438.335 294.506 447.075 294.029 453.369H294.036C292.601 455.072 291.802 457.208 291.753 459.43C291.814 461.413 292.473 463.336 293.639 464.941C294.664 474.389 303.319 480.841 313.951 485.174L313.953 485.172ZM351.185 342.844L352.289 342.453C395.485 329.025 441.736 329.025 484.932 342.453H485.878C508.546 349.54 521.693 416.134 523.823 461.716C521.699 464.707 512.092 468.881 494.776 472.263L488.477 412.119H488.471C487.91 406.705 483.064 402.774 477.65 403.342C472.236 403.904 468.305 408.75 468.873 414.164L475.33 475.248V475.254C456.465 477.457 437.482 478.507 418.494 478.403C399.501 478.507 380.518 477.457 361.658 475.254L368.507 414.56C369.068 409.147 365.137 404.3 359.73 403.733C354.316 403.171 349.47 407.096 348.902 412.51L342.603 472.653C325.208 469.266 315.681 464.78 313.556 462.106C315.29 416.525 328.358 350.01 351.185 342.844Z"
//           fill="currentColor" />
//         <path
//           d="M340.953 213.032C335.521 213.032 331.114 217.438 331.114 222.871C331.114 228.309 335.521 232.709 340.953 232.709C344.078 232.734 347.014 231.232 348.827 228.699C349.156 233.192 349.895 237.641 351.03 241.999V242.548V242.554C351.055 244.715 351.836 246.803 353.234 248.456C360.204 267.456 375.041 282.527 393.938 289.783C395.629 291.223 397.771 292.029 399.999 292.066H400.707C405.053 293.244 409.514 293.982 414.007 294.269C411.4 296.045 409.838 298.987 409.838 302.143C409.838 305.555 411.602 308.722 414.501 310.511C417.406 312.305 421.026 312.47 424.077 310.944C427.129 309.418 429.168 306.421 429.479 303.028C429.784 299.628 428.307 296.314 425.579 294.269C429.68 293.885 433.739 293.116 437.706 291.986C438.384 292.06 439.068 292.06 439.751 291.986C442.84 292.017 445.757 290.589 447.625 288.129C463.726 280.86 476.525 267.829 483.52 251.606C486.029 250.507 487.933 248.377 488.751 245.764C489.569 243.152 489.209 240.314 487.768 237.988C488.653 233.448 489.105 228.833 489.111 224.207C489.117 218.915 488.537 213.635 487.378 208.466C489.196 205.976 489.673 202.747 488.647 199.836C487.628 196.931 485.235 194.709 482.263 193.903C475.372 179.389 463.696 167.689 449.2 160.761C447.864 156.507 443.805 153.718 439.355 153.992C437.463 154.023 435.626 154.627 434.082 155.726C424.39 153.577 414.337 153.577 404.644 155.726C403.235 154.877 401.635 154.42 400 154.383C396.313 154.401 392.956 156.507 391.339 159.815C374.89 166.791 361.718 179.768 354.498 196.107C352.191 197.908 350.824 200.661 350.799 203.584C350.726 204.188 350.726 204.793 350.799 205.397C349.609 209.376 348.816 213.466 348.437 217.598C346.801 214.979 344.029 213.288 340.953 213.032ZM418.492 173.671H418.498C431.859 173.671 444.67 178.981 454.119 188.429C463.567 197.877 468.877 210.688 468.877 224.056C468.877 237.416 463.567 250.227 454.119 259.676C444.67 269.124 431.859 274.434 418.498 274.434C405.132 274.434 392.32 269.124 382.872 259.676C373.424 250.228 368.114 237.416 368.114 224.056C368.095 210.677 373.393 197.841 382.841 188.381C392.296 178.914 405.119 173.592 418.498 173.592L418.492 173.671Z"
//           fill="currentColor" />
//       </svg>
//     },
//     {
//       id: 7,
//       title: "Maturity Assessment",
//       path: "/services/maturity",
//       highlights: [
//         "Enhanced Security Maturity",
//         "Risk Mitigation",
//         "Tailored Improvement Plan",
//         "Continuous Improvement",
//       ],
//       logo: "../assets/Cyber Security-1.png",
//       icon: <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M616.109 439.734V313.905C616.109 305.781 612.887 297.992 607.143 292.25C601.4 286.507 593.605 283.278 585.482 283.278H544.893V195.089C543.392 142.648 514.546 94.8263 468.868 69.0326C423.19 43.2388 367.342 43.2388 321.663 69.0326C275.979 94.8263 247.14 142.647 245.632 195.089V283.278H210.946C202.816 283.278 195.01 286.501 189.248 292.244C183.486 297.981 180.233 305.769 180.196 313.905V643.545V643.539C180.196 651.7 183.437 659.519 189.205 665.286C194.973 671.054 202.791 674.289 210.946 674.289H585.477C593.625 674.289 601.432 671.048 607.182 665.28C612.925 659.506 616.142 651.688 616.105 643.54L616.109 439.734ZM499.136 283.281H291.386V195.092C292.637 158.831 312.7 125.842 344.328 108.063C375.956 90.2829 414.567 90.2829 446.189 108.063C477.817 125.842 497.886 158.831 499.131 195.092L499.136 283.281Z"
//           fill="currentColor" />
//         <mask id="mask0_75_294" maskUnits="userSpaceOnUse" x="6" y="123"
//           width="157" height="215">
//           <path d="M6.39062 123.438H162.494V337.5H6.39062V123.438Z" fill="white" />
//         </mask>
//         <g mask="url(#mask0_75_294)">
//           <path
//             d="M60.5157 260.766V193.731C68.3769 189.77 74.5599 183.129 77.9532 175.012C81.3529 166.889 81.7313 157.825 79.0274 149.445C76.3235 141.071 70.7144 133.936 63.2133 129.334C55.7121 124.726 46.8134 122.956 38.1212 124.336C29.4237 125.721 21.5134 130.164 15.8071 136.866C10.1065 143.568 6.98147 152.088 7.01194 160.889C7.03025 167.75 8.96508 174.47 12.5906 180.293C16.2221 186.115 21.404 190.815 27.5502 193.855V260.767C27.6174 281.037 35.6984 300.458 50.0299 314.795C64.3671 329.126 83.7877 337.208 104.058 337.275H162.481V304.187H104.058C92.5285 304.187 81.4752 299.616 73.3143 291.48C65.1477 283.338 60.5457 272.297 60.5152 260.767L60.5157 260.766Z"
//             fill="currentColor" />
//         </g>
//         <mask id="mask1_75_294" maskUnits="userSpaceOnUse" x="6" y="543"
//           width="157" height="212">
//           <path d="M6.39062 543.75H162.494V754.688H6.39062V543.75Z" fill="white" />
//         </mask>
//         <g mask="url(#mask1_75_294)">
//           <path
//             d="M27.4218 621.406V684.383C17.3388 689.162 9.9593 698.25 7.35305 709.102C4.74071 719.954 7.18825 731.398 13.9937 740.242C20.8052 749.08 31.2484 754.366 42.4062 754.616C53.5634 754.866 64.2328 750.051 71.4343 741.524C78.6304 732.991 81.5784 721.663 79.4604 710.707C77.3363 699.751 70.3723 690.346 60.5088 685.121V621.407C60.5393 609.871 65.1413 598.811 73.2957 590.65C81.4562 582.496 92.516 577.894 104.052 577.864H162.475V544.776H104.052C83.7395 544.807 64.2692 552.894 49.902 567.256C35.5404 581.617 27.4531 601.094 27.4218 621.406Z"
//             fill="currentColor" />
//         </g>
//         <path
//           d="M69.4999 388.438C58.5929 388.358 48.0093 392.136 39.6171 399.106C31.2248 406.077 25.5607 415.788 23.6374 426.524C21.7142 437.26 23.6435 448.338 29.094 457.786C34.5445 467.234 43.1565 474.455 53.4096 478.172C63.6696 481.883 74.9065 481.852 85.1424 478.087C95.3841 474.315 103.953 467.045 109.355 457.566H162.492L162.486 424.601H114.519C112.249 414.353 106.554 405.179 98.3692 398.605C90.1843 392.026 79.9984 388.444 69.4999 388.438Z"
//           fill="currentColor" />
//         <mask id="mask2_75_294" maskUnits="userSpaceOnUse" x="632" y="125"
//           width="162" height="213">
//           <path d="M632.812 125H793.594V337.5H632.812V125Z" fill="white" />
//         </mask>
//         <g mask="url(#mask2_75_294)">
//           <path
//             d="M773.187 260.766V195.574C783.16 190.575 790.339 181.322 792.706 170.414C795.068 159.507 792.376 148.117 785.37 139.433C778.363 130.742 767.804 125.694 756.64 125.694C745.483 125.694 734.924 130.742 727.916 139.433C720.909 148.118 718.212 159.508 720.58 170.414C722.948 181.32 730.126 190.574 740.099 195.574V260.766C740.068 272.295 735.466 283.336 727.3 291.478C719.139 299.614 708.086 304.186 696.556 304.186H633.701V337.273H696.311C716.654 337.34 736.19 329.308 750.607 314.959C765.03 300.61 773.154 281.109 773.184 260.765L773.187 260.766Z"
//             fill="currentColor" />
//         </g>
//         <mask id="mask3_75_294" maskUnits="userSpaceOnUse" x="632" y="543"
//           width="162" height="212">
//           <path d="M632.812 543.75H793.594V754.688H632.812V543.75Z" fill="white" />
//         </mask>
//         <g mask="url(#mask3_75_294)">
//           <path
//             d="M773.188 684V621.397C773.157 601.097 765.064 581.633 750.702 567.289C736.334 552.946 716.858 544.889 696.558 544.889H633.703V577.855H696.313C707.891 577.824 719.011 582.39 727.22 590.556C735.436 598.723 740.068 609.819 740.099 621.397V684.128C730.126 689.127 722.947 698.38 720.58 709.287C718.212 720.194 720.91 731.584 727.916 740.269C734.923 748.96 745.482 754.008 756.64 754.008C767.803 754.008 778.362 748.96 785.369 740.269C792.376 731.583 795.068 720.194 792.706 709.287C790.338 698.38 783.16 689.128 773.187 684.128L773.188 684Z"
//             fill="currentColor" />
//         </g>
//         <path
//           d="M724.469 480.812C736.157 480.819 747.413 476.394 755.975 468.441C764.532 460.482 769.763 449.581 770.611 437.923C771.46 426.266 767.865 414.717 760.547 405.605C753.229 396.492 742.731 390.486 731.164 388.802C719.598 387.111 707.823 389.864 698.204 396.504C688.585 403.151 681.84 413.185 679.326 424.598H633.69V457.685H684.368C688.421 464.729 694.262 470.582 701.306 474.642C708.349 478.701 716.339 480.831 724.469 480.812Z"
//           fill="currentColor" />
//       </svg>
//     },
//     {
//       id: 8,
//       title: "Virtual CISO as a Service",
//       path: "/services/virtual",
//       highlights: [
//         "Strategic Security Alignment",
//         "Effective Risk Management",
//         "Robust Security Policies",
//         "Continuous Security Oversight",
//         "Prepared Incident Response",
//       ],
//       logo: "../assets/Network.png",
//       icon: <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M727.656 749.172H473.359C470.728 749.172 464.131 748.366 459.73 740.999C455.58 734.047 451.74 708.529 452.503 694.423C452.448 693.91 452.418 693.391 452.418 692.872C452.418 690.407 453.065 688.099 454.194 686.104C468.055 660.432 475.788 646.772 480.385 639.283C479.805 637.446 479.39 635.365 479.39 633.07L479.396 546.101C479.396 539.821 481.959 519.343 514.955 519.343H685.924C719.799 519.343 722.429 539.826 722.429 546.101V633.064C722.429 635.584 722.05 638.068 721.281 640.559C725.554 647.785 732.969 661.079 746.623 686.317C746.959 686.939 747.246 687.751 747.472 688.709C747.887 690.015 748.106 691.407 748.106 692.841C749.364 706.623 745.519 733.936 741.234 741.065C738.139 746.216 733.19 749.17 727.654 749.17L727.656 749.172ZM482.187 721.62H718.718C719.426 717.384 720.031 711.757 720.427 706.648H480.349C480.795 711.769 481.449 717.397 482.187 721.62ZM489.408 679.091H711.298C706.092 669.63 701.337 661.103 698.225 655.689H502.631C499.353 661.274 494.58 669.758 489.411 679.091H489.408ZM506.944 628.139H694.928L694.867 547.939C693.353 547.451 690.485 546.889 685.919 546.889H514.95C510.721 546.889 508.249 547.359 506.943 547.732L506.944 628.139ZM326.944 749.172H72.6467C70.0161 749.172 63.4183 748.366 59.0175 740.999C54.8672 734.047 51.0219 708.535 51.7848 694.423C51.7299 693.916 51.6994 693.391 51.6994 692.872C51.6994 690.407 52.3464 688.099 53.4755 686.104C67.3366 660.432 75.0692 646.772 79.6661 639.283C79.0863 637.446 78.6712 635.365 78.6712 633.07L78.6773 546.101C78.6773 539.821 81.2408 519.343 114.237 519.343H285.205C319.08 519.343 321.71 539.826 321.71 546.101V633.064C321.71 635.584 321.332 638.068 320.563 640.559C324.847 647.785 332.263 661.092 345.905 686.317C346.241 686.945 346.527 687.757 346.753 688.709C347.168 690.015 347.388 691.401 347.388 692.841C348.658 706.617 344.8 733.936 340.516 741.065C337.421 746.216 332.465 749.17 326.935 749.17L326.944 749.172ZM81.4905 721.62H318.022C318.73 717.384 319.334 711.757 319.731 706.648H79.6527C80.086 711.769 80.7452 717.397 81.4959 721.62H81.4905ZM88.6987 679.091H310.589C305.395 669.63 300.628 661.103 297.522 655.689H101.928C98.6442 661.274 93.8651 669.758 88.7017 679.091H88.6987ZM106.241 628.139H294.225L294.164 547.939C292.651 547.451 289.782 546.889 285.216 546.889H114.232C110.002 546.889 107.53 547.359 106.224 547.738L106.23 628.139L106.241 628.139ZM457.897 511.422H343.499C335.888 511.422 329.723 505.257 329.723 497.646V426.137C329.723 418.526 335.888 412.361 343.499 412.361H349.175C354.424 383.1 371.862 368.288 401.153 368.288C430.45 368.288 447.888 383.101 453.125 412.361H457.904C465.515 412.361 471.68 418.526 471.68 426.137V497.646C471.674 505.257 465.508 511.422 457.897 511.422ZM357.275 483.87H444.122V439.912H357.275V483.87ZM377.178 412.361H425.244C422.504 401.216 416.229 395.839 401.147 395.839C386.419 395.845 380.018 401.558 377.178 412.361ZM600.35 506.483C592.739 506.483 586.575 500.318 586.575 492.707V460.871H504.508C496.896 460.871 490.732 454.707 490.732 447.096C490.732 439.485 496.896 433.32 504.508 433.32H600.351C607.962 433.32 614.127 439.485 614.127 447.096V492.707C614.127 500.318 607.961 506.483 600.35 506.483ZM199.647 506.483C192.036 506.483 185.872 500.318 185.872 492.707V447.096C185.872 439.485 192.036 433.321 199.647 433.321H295.491C303.102 433.321 309.267 439.485 309.267 447.096C309.267 454.707 303.102 460.872 295.491 460.872H213.424V492.708C213.424 500.319 207.258 506.483 199.647 506.483ZM401.147 476.82C393.536 476.82 387.372 470.656 387.372 463.045V461.873C387.372 454.262 393.536 448.097 401.147 448.097C408.758 448.097 414.923 454.262 414.923 461.873V463.045C414.923 470.656 408.758 476.82 401.147 476.82ZM400.696 352.522C393.084 352.522 386.92 346.357 386.92 338.746V303.651C386.92 296.04 393.084 289.875 400.696 289.875C408.307 289.875 414.471 296.04 414.471 303.651V338.746C414.471 346.357 408.313 352.522 400.696 352.522ZM527.997 280.659H273.7C268.158 280.659 263.196 277.693 260.089 272.53C255.927 265.584 252.051 239.955 252.826 225.856C252.778 225.362 252.747 224.861 252.747 224.361C252.747 221.895 253.394 219.582 254.535 217.586C268.396 191.92 276.129 178.255 280.726 170.772C280.134 168.935 279.731 166.853 279.731 164.558V77.5834C279.731 71.3029 282.288 50.8256 315.284 50.8256H486.268C520.137 50.8256 522.761 71.3084 522.761 77.5834V164.546C522.761 167.067 522.382 169.551 521.619 172.035C525.892 179.262 533.308 192.555 546.962 217.805C547.309 218.452 547.596 219.294 547.834 220.296C548.219 221.547 548.432 222.877 548.439 224.257C549.72 238.014 545.857 265.413 541.566 272.56C538.484 277.705 533.533 280.659 527.997 280.659ZM282.544 253.108H519.075C519.783 248.872 520.387 243.245 520.79 238.136H280.712C281.146 243.257 281.799 248.89 282.544 253.108ZM289.764 210.584H511.655C506.449 201.124 501.694 192.597 498.581 187.183L302.988 187.177C299.716 192.761 294.937 201.239 289.773 210.583L289.764 210.584ZM307.3 159.627H495.269L495.208 79.4078C493.694 78.9256 490.826 78.3702 486.266 78.3702H315.282C311.064 78.3702 308.593 78.8402 307.286 79.2125L307.28 159.627H307.3Z"
//           fill="currentColor" />
//       </svg>
//     },
//     {
//       id: 9,
//       title: "Security Program",
//       path: "/services/awareness",
//       highlights: [
//         "Increased Employee Vigilance",
//         "Enhanced Security Culture",
//         "Improved Threat Detection",
//         "Actionable Insights",
//       ],
//       logo: "../assets/Cyberark.png",
//       icon: <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M596.062 149.687C595.927 147.136 594.029 145.03 591.508 144.64C559.679 140.843 528.416 133.244 498.399 122.009C464.719 107.861 432.713 90.0445 402.946 68.871C401.212 67.5222 398.777 67.5222 397.044 68.871C367.277 90.0445 335.27 107.86 301.597 122.009C271.574 133.245 240.311 140.844 208.481 144.64C205.961 145.03 204.062 147.136 203.934 149.687C200.449 205.627 209.177 261.656 229.514 313.891C232.712 322.13 236.277 330.37 240.213 338.737H240.219C273.88 408.745 327.169 467.461 393.601 507.737C397.507 510.197 402.481 510.197 406.394 507.737C472.819 467.461 526.108 408.745 559.775 338.737C563.712 330.376 567.276 322.13 570.475 313.891C590.812 261.656 599.541 205.627 596.062 149.687ZM498.399 358.172C498.375 365.99 495.256 373.486 489.726 379.022C484.196 384.552 476.701 387.671 468.876 387.689H331.114C323.295 387.671 315.8 384.552 310.264 379.022C304.734 373.486 301.615 365.991 301.597 358.172V269.609C301.609 262.645 304.081 255.907 308.585 250.597C313.089 245.281 319.327 241.734 326.195 240.581V209.337C327.067 190.606 335.319 172.973 349.149 160.295C362.974 147.624 381.254 140.934 399.998 141.692C418.735 140.935 437.015 147.624 450.846 160.295C464.671 172.972 472.923 190.604 473.796 209.337V240.581C480.662 241.734 486.9 245.281 491.405 250.597C495.91 255.907 498.388 262.645 498.4 269.609L498.399 358.172Z"
//           fill="sntColor" />
//         <path
//           d="M682.891 332.344V633.687H498.391L486.336 633.193L478.957 643.154L478.951 643.16C475.576 645.278 471.615 646.267 467.635 645.986H332.332H332.338C328.548 646.126 324.788 645.321 321.388 643.648L314.009 633.687H117.087V332.344C116.562 322.749 123.856 314.516 133.445 313.892H203.19C207.371 325.452 212.291 337.262 217.949 349.195C253.581 423.641 310.185 486.055 380.808 528.773C386.582 532.313 393.222 534.187 399.997 534.187C406.766 534.187 413.406 532.313 419.18 528.773C489.797 486.055 546.402 423.641 582.039 349.195C587.697 337.263 592.617 325.459 596.797 313.892H666.543C676.131 314.515 683.432 322.748 682.901 332.344L682.891 332.344Z"
//           fill="currentColor" />
//         <path
//           d="M732.093 672.078V672.2C732.093 705.288 701.465 732.1 663.581 732.1H136.409C98.5246 732.1 67.8965 705.288 67.8965 672.2V672.078C68.519 663.912 75.5931 657.772 83.7652 658.303H301.593C309.467 666.817 320.765 671.34 332.343 670.601H467.647H467.64C479.225 671.34 490.517 666.817 498.397 658.303H716.225C724.397 657.772 731.471 663.912 732.093 672.078Z"
//           fill="currentColor" />
//         <path
//           d="M449.203 209.344C448.324 197.137 442.666 185.759 433.456 177.703C424.24 169.64 412.221 165.539 400.003 166.296C387.784 165.539 375.759 169.64 366.543 177.703C357.333 185.76 351.675 197.138 350.803 209.344V240.1H449.204L449.203 209.344Z"
//           fill="currentColor" />
//         <path
//           d="M468.874 264.703H331.112C328.402 264.709 326.198 266.907 326.192 269.623V358.185C326.198 360.895 328.402 363.098 331.112 363.104H468.874C471.59 363.098 473.788 360.895 473.794 358.185V269.623C473.788 266.906 471.59 264.709 468.874 264.703ZM399.996 350.805C390.206 350.805 380.82 346.917 373.904 339.995C366.983 333.074 363.095 323.686 363.095 313.903C363.095 304.12 366.983 294.731 373.904 287.811C380.819 280.89 390.207 277.002 399.996 277.002C409.78 277.002 419.168 280.89 426.088 287.811C433.004 294.732 436.892 304.12 436.892 313.903C436.867 323.681 432.967 333.05 426.052 339.966C419.143 346.881 409.774 350.774 399.996 350.805Z"
//           fill="currentColor" />
//         <path
//           d="M412.297 313.891C412.297 320.684 406.791 326.189 399.998 326.189C393.205 326.189 387.693 320.684 387.693 313.891C387.693 307.097 393.205 301.592 399.998 301.592C406.791 301.592 412.297 307.097 412.297 313.891Z"
//           fill="currentColor" />
//       </svg>
//     },
//   ];
//   const faqs = [
//     {
//       "id": 1,
//       "question": "What is a Mobile Application Penetration Test?",
//       "answer": "A penetration test simulates real-world attacks on your mobile apps to identify vulnerabilities and assess their security posture."
//     },
//     {
//       "id": 2,
//       "question": "Why is Source Code Review crucial for mobile applications?",
//       "answer": "Source code review helps identify security flaws, coding errors, and backdoors within your mobile application's code, ensuring proactive protection."
//     },
//     {
//       "id": 3,
//       "question": "What does ArmourIQ's Application Security Testing involve?",
//       "answer": "Our application security testing includes both automated and manual assessments to identify vulnerabilities in your web applications and APIs."
//     },
//     {
//       "id": 4,
//       "question": "What is an Application Security Architecture Review?",
//       "answer": "This review evaluates your application's design and architecture to identify potential security weaknesses and ensure it's built with security in mind."
//     },
//     {
//       "id": 5,
//       "question": "How does ArmourIQ support a Secure Software Development Lifecycle (SDLC)?",
//       "answer": "ArmourIQ integrates security best practices into your SDLC, providing guidance and support throughout the development process."
//     },
//     {
//       "id": 6,
//       "question": "What is the difference between a Network Vulnerability Assessment and Network Penetration Testing?",
//       "answer": "A vulnerability assessment identifies potential weaknesses in your network, while penetration testing simulates attacks to assess the effectiveness of your security controls."
//     },
//     {
//       "id": 7,
//       "question": "What is involved in a Network Architecture Security Review?",
//       "answer": "This review examines your network's design and configuration to identify potential security risks and provide recommendations for improvement."
//     },
//     {
//       "id": 8,
//       "question": "How does ArmourIQ conduct Wireless Penetration Testing?",
//       "answer": "We assess your wireless networks for vulnerabilities that could be exploited by attackers, such as weak encryption or unauthorized access points."
//     }
//   ];

//   return (
//     <div id="services" className="bg-white min-h-screen mt-[80px] flex flex-col items-center">
//       <motion.div
//         initial={{ opacity: 0, y: -70 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ ease: "easeInOut", duration: 0.5 }}
//         className="relative w-screen">
//         <div className=" bg-[#004AAD] opacity-100 h-[182px]"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-4xl text-black mt-[50px] mb-9 max-sm:mt-[50px]">
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
//               className="text-[4xl] md:text-[45px] text-white font-semibold">
//               Our Services
//             </motion.span>
//           </div>
//         </div>
//       </motion.div>
//       <div className="res-width mt-8">
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ ease: "easeInOut", duration: 0.5 }}
//           className="text-black font-bold text-3xl mt-4 text-pretty">
//           Enhancing Organisational Cybersecurity Through Comprehensive Services
//         </motion.h1>
//         <div className="text-black text-xl mt-5 text-pretty">
//           Our cybersecurity services provide comprehensive protection for your
//           business against cyber threats, ensuring data security, regulatory
//           compliance, and business continuity. We offer risk assessment and
//           management to identify vulnerabilities, advanced threat detection and
//           response for real-time protection, and robust data protection and
//           encryption.
//         </div>
//         <div className="flex justify-center mt-8">
//           <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-sm:place-items-center md:gap-6 lg:gap-12 gap-y-2 lg:mt-2">
//             {services.map((item) => (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ ease: "easeInOut", duration: 0.5 }}
//                 key={item.id}
//                 className="group max-sm:w-[90%] max-w-[28rem] min-h-[230px] drop-shadow-lg mb-5 h-full flex justify-center"
//               >
//                 {/* For Desktop */}
//                 <Link to={item.path} className="w-full h-full">
//                   <div className="relative bg-[#F6F5F5] h-full text-black p-6 rounded-lg flex flex-col justify-between items-center pt-32 border-[#004bae] border-[1px] w-full cursor-pointer hover:bg-[#004bae] hover:border-white hover:border-[1px] hover:text-white transition-all duration-300">
//                     <div
//                       className="translate-y-0 transition ease-in-out group-hover:-translate-y-[1rem] h-[6rem] w-[6rem] flex items-center justify-center absolute top-5 bg-slate-300/50 group-hover:bg-slate-300/20 rounded-full drop-shadow-xl p-4">
//                       {
//                         item.icon ?
//                           item.icon
//                           :
//                           <img src={item.logo} className="h-[60%] w-auto object-cover hover:text-white" />
//                       }
//                     </div>
//                     <div className="w-full h-full flex flex-col items-center justify-center">
//                       {/* <img src={item.logo} className="" /> */}
//                       <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                       <ul className="list-disc text-left pl-5 mb-2">
//                         {item.highlights.slice(0, 4).map((highlight, index) => (
//                           <li key={index}>{highlight}</li>
//                         ))}
//                       </ul>
//                       <span className="text-black hover:text-white mt-2 hover:font-bold">
//                         <FaRegArrowAltCircleRight size={30} className="group-hover:text-white" />
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* transition-all duration-300 */}
//         <div className="res-width mt-20 max-sm:pl-2 mb-8 pt-0 flex flex-col justify-center items-center">
//           <motion.h1
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ ease: "easeInOut", duration: 0.5 }}
//             className="font-bold text-4xl max-sm:text-2xl">
//             FAQs
//           </motion.h1>
//           <motion.h3
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ ease: "easeInOut", duration: 0.5 }}
//             className="font-normal text-xl text-gray-500 mt-2 mb-4">
//             Your Queries, Our Answers
//           </motion.h3>
//           <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mt-5">
//             {faqs.map((faq, index) => (
//               <div key={index} className="">
//                 <motion.details
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
//                   className="group cursor-pointer" name="accordian">
//                   <summary className="font-semibold text-[15px] text-black bg-zinc-200 px-3 py-4">
//                     {faq.question}
//                   </summary>
//                   <motion.p
//                     initial={{ scaleY: 0 }}
//                     whileInView={{ scaleY: 1 }}
//                     transition={{ ease: "easeInOut", duration: 0.1 }}
//                     style={{ transformOrigin: "top" }}
//                     className="text-[15px] text-black bg-zinc-100 p-2 pl-8">
//                     {faq.answer}
//                   </motion.p>
//                 </motion.details>
//                 {index < faqs.length && (
//                   <hr className="border-t-1 border-gray-300 mt-1" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Services;


