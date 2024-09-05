import { MdOutlineSecurity } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { MdAccessibility } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import CountUp from "react-countup";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";

const Intro = () => {
  const navigate = useNavigate();
  const arr = [
    {
      id: 4,
      logo: <FaUserCog />,
      title: "Tailored",
      desc: "Our customized approach ensures that your cybersecurity strategies are uniquely designed to address your organization's specific challenges and requirements.",
    },
    {
      id: 2,
      logo: <MdAccessibility />,
      title: "Accessibility",
      desc: "We provide solutions that are both comprehensive and easily accessible, ensuring that critical cybersecurity measures are available and achievable for your business.",
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

  const typingText = "ASSESS → SECURE → DEFEND";

  // const blink = {
  //   from: { borderRightColor: 'transparent' },
  //   to: { borderRightColor: 'white' },
  // };

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
            Democratizing Cybersecurity
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }}
            className="text-white font-bold text-4xl max-sm:text-[22px] flex gap-2 items-center"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ ease: "easeInOut", duration: 8, delay: 0.5, repeat: Infinity }}
              className="overflow-hidden whitespace-nowrap borderr-2 border-white"
              style={{ display: "inline-block", animation: "blink 1s step-end infinite" }}
            >
              {typingText}
            </motion.span>
            {/* ASSESS → SECURE → DEFEND */}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.7 }}
            className="text-white mt-8 lg:w-[50%]">
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
            className="flex flex-col mt-4 sm:flex-row sm:mt-10">
            <button
              className="bg-[#004bae] hover:bg-[#004ba0] text-white font-bold p-3 text-[15px] cursor-pointer w-[15rem]"
              onClick={() => navigate("/services")}
            >
              LEARN MORE
            </button>
            <div className="flex flex-col mt-4 sm:flex-row sm:ml-8 sm:mt-0 sm:gap-4">
              <h2 className="text-white font-bold pt-3 text-[15px]">Call us</h2>
              <div className="flex flex-col">
                <h2 className="text-white text-[15px] mt-1 sm:mt-3">
                  +91 8007024111
                </h2>
              </div>
            </div>
          </motion.div>
          <div className="mt-8">
            <p className="text-white text-xl font-semibold">Why you choose us</p>
          </div>
        </div>
        {/* Right Section */}
        {/* <div
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
        </div> */}
      </div>

      {/* Grid Section h-[299px] w-[299px] hover:h-[305px] hover:w-[305px]*/}
      <div className="pt-4 pb-10 res-width">
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
        className="w-screen bg-[#004AAD] min-h-[100px] lg:min-h-[150px] flex items-center justify-center md:flex md:flex-col md:items-center md:gap-y-4">
        <div className="flex flex-row items-center justify-center py-6 gap-x-14 lg:gap-x-24 gap-y-6 flex-wrap max-md:grid max-md:grid-rows-2">
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <CountUp
                delay={2}
                end={99}
                className="text-white text-3xl font-semibold"
                duration={2}
                enableScrollSpy={true}
                isScrollingDown={true}
              />
              <h4 className="text-3xl text-white font-semibold">%</h4>
            </div>

            <h4 className="font-semibold text-[25px] text-white">Satisfaction Rate</h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <CountUp
                delay={2}
                end={200}
                className="text-white text-3xl font-semibold"
                duration={2}
                enableScrollSpy={true}
                isScrollingDown={true}
              />
              <h4 className="text-3xl text-white font-semibold">+</h4>
            </div>

            <h4 className="font-semibold text-[25px] ml-3 text-white">
              Successful Projects
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              {/* <CountUp
                delay={2}
                end={24}
                className="text-white text-3xl font-semibold ml-4"
                duration={2}
                enableScrollSpy={true}
                isScrollingDown={true}
              /> */}
              <h4 className="text-3xl text-white font-semibold">24/7</h4>
            </div>
            <h4 className="font-semibold text-[25px] ml-3 text-white">Support</h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <CountUp
                delay={2}
                end={98}
                className="text-white text-3xl font-semibold"
                duration={2}
                enableScrollSpy={true}
                isScrollingDown={true}
              />
              <h4 className="text-3xl text-white font-semibold">%</h4>
            </div>
            <h4 className="font-semibold text-[25px] ml-3 text-white">
              Reduced Risk
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
              <h4 className="text-3xl text-white font-semibold">%</h4>
            </div>
            <h4 className="font-semibold text-[25px] ml-3 text-white">
              Faster Response Time
            </h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <CountUp
                delay={2}
                end={75}
                className="text-white text-3xl font-semibold"
                duration={2}
                enableScrollSpy={true}
                isScrollingDown={true}
              />
              <h4 className="text-3xl text-white font-semibold">%</h4>
            </div>
            <h4 className="font-semibold text-[25px] ml-3 text-white">
              Improvement in Security Posture
            </h4>
          </div>
        </div>
      </motion.div>
    </motion.div >
  );
};

export default Intro;
