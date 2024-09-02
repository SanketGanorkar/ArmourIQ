import { MdOutlineSecurity } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Intro = () => {
  const navigate = useNavigate();
  const arr = [
    {
      id: 4,
      logo: <FaUserCog />,
      title: "Tailored",
      desc: "The personalized approach ensures that your cybersecurity measures are effective and relevant to your organization's needs.",
    },
    {
      id: 2,
      logo: <MdAccessibility />,
      title: "Accessibility",
      desc: "Tailored solutions to meet your specific needs and ensure that essential cybersecurity measures are within reach.",
    },
    {
      id: 3,
      logo: <MdOutlineSecurity />,
      title: "Reliability",
      desc: "We prioritize the security of your digital assets by employing industry best practices & proactively staying ahead of emerging threats to ensure reliability.",
    },
    {
      id: 1,
      logo: <FaDollarSign />,
      title: "Affordability",
      desc: "Cost-effective cybersecurity solutions that fit within your budget constraints without compromising on quality or effectiveness.",
    },

  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
      className="bg-tech bg-cover bg-center flex flex-col items-center">
      <div className="res-width flex flex-row justify-between max-sm:flex-col">
        {/* Left Section */}
        <div className="flex flex-col mt-[120px]">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="text-white font-bold text-nowrap max-sm:text-[11px] text-xl md:mb-3 max-sm:mb-3">
            DEMOCRATIZING CYBERSECURITY
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            className="text-white font-bold text-3xl max-sm:text-[25px]">
            ASSESS → SECURE → DEFEND
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
            className="text-white mt-8">
            Tailored services designed to meet the specific{" "}
            <span className="hidden sm:inline"></span>
            needs of diverse clients, from small startups to large{" "}
            <span className="hidden sm:inline"></span>
            enterprises. By leveraging cutting-edge technology{" "}
            <span className="hidden sm:inline"></span>
            and innovative strategies, we empower you to defend{" "}
            <span className="hidden sm:inline"></span>
            against threats with the same level of security as the{" "}
            <span className="hidden sm:inline"></span>
            biggest players in the industry.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
            className="flex flex-col mt-9 sm:flex-row sm:mt-16">
            <button
              className="bg-[#004bae] hover:bg-[#004ba0] text-white font-bold p-3 text-[15px] cursor-pointer w-2/5"
              onClick={() => navigate("/services")}
            >
              LEARN MORE
            </button>
            <div className="flex flex-col mt-4 sm:flex-row sm:ml-8 sm:mt-0 sm:gap-4">
              <h2 className="text-white font-bold pt-3 text-[15px]">Call us</h2>
              <div className="flex flex-col">
                <h2 className="text-white text-[15px] mt-1 sm:mt-3">
                  +1 469 296 9672
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Right Section */}
        <div
          className="flex flex-wrap sm:flex-col sm:items-center">
          <div className="flex flex-col text-right max-sm:text-left">
            <div className="flex flex-col sm:pl-[50px] mt-[30px] sm:mt-[120px]">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.8 }}
                className="text-white font-bold text-5xl max-sm:text-3xl">
                50 +
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
              >
                <h2 className="text-white font-bold pt-1">
                  Cyber Security Project
                </h2>
                <p className="text-white">
                  Our track record reflects our commitment to delivering{" "}
                  <span className="hidden sm:inline"></span>
                  effective cybersecurity solutions tailored to the unique{" "}
                  <span className="hidden sm:inline"></span>
                  needs of each client, ensuring robust protection and peace{" "}
                  <span className="hidden sm:inline"></span>
                  of mind in an increasingly complex digital landscape.
                </p>
              </motion.div>
            </div>
            <div className="flex flex-col">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeInOut", duration: 0.3, delay: 0.8 }}
                className="text-white font-bold text-3xl pt-5 sm:pl-[75px]">
                100 %
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
              >
                <h2 className="text-white font-bold sm:pl-[50px]">
                  Customer Satisfaction
                </h2>
                <p className="text-white sm:leading-relaxed sm:pl-3">
                  Our unwavering focus on quality, reliability, and proactive
                  support enables us to maintain an exceptional level of
                  satisfaction and fostering long-lasting partnerships built on
                  trust and mutual success.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section h-[299px] w-[299px] hover:h-[305px] hover:w-[305px]*/}
      <div className="py-10 res-width">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1rem] 2xl:gap-[3rem] place-items-center">
          {arr.map((item) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.6, delay: 0.7 }}
              key={item.id}
              className="bg-white h-[299px] text-black p-6 rounded-2xl flex flex-col items-center justify-center border-[#004bae] border-[1px] transition-all duration-300 hover:bg-[#004AAD] hover:text-white hover:borderwhite hover:border[1px] cursor-pointer hover:drop-shadow-xl"
            >
              <div className="text-4xl mb-4">{item.logo}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.7, delay: 0.8 }}
        className="w-screen bg-[#004AAD] min-h-[100px] lg:h-[150px] flex items-center justify-center md:flex md:flex-col md:items-center md:gap-y-4">
        <div className="flex flex-row items-center justify-center py-4 gap-x-14 gap-y-4 lg:gap-24 flex-wrap max-md:grid max-md:grid-rows-2">
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

            <h4 className="font-semibold text-[30px] text-white ">Clients</h4>
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
            <h4 className="font-semibold text-[30px] ml-3 text-white">Team</h4>
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
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
