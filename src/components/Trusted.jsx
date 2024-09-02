const Cashmap = "./assets/Cashmap.png";
const FoodIn = "./assets/FoodIn.png";
const Moneytalk = "./assets/M.png";
const Naviti = "./assets/Naviti.png";
const Nudgebee = "./assets/Nudgebee.png";
const Suzie = "./assets/Suzie.png";
const Aashwat = "./assets/aashwat.png";
import { motion } from "framer-motion";

import Marquee from "react-fast-marquee";

const Trusted = () => {
  return (
    <div className="bg-white flex flex-col min-h-[300px] res-width justify-center mt-12">
      <div className="flex flex-col text-black w-full sm:items-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="font-bold text-3xl py-4 lg:py-0 lg:mb-6 w-[30rem] text-center max-sm:text-left">
          Our Customers Trust Us
          for Our Transparency
          and Reliability
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="block lg:block text-center max-sm:text-left w-[90%] lg:w-[50rem]">
          Our dedication to transparency means that our clients have a
          clear understanding of our processes, pricing, and outcomes
          fostering a strong sense of reliability and
          satisfaction in our partnership.
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="w-full flex flex-row justify-center items-center flex-wrap mt-8 mb-5 ">
        <div className="w-full mdw-[1000px]">
          <Marquee autoFill pauseOnClick speed={55}>
            <img
              src={Cashmap}
              className="w-29 h-20 m-1 border-[2px] transition-all duration-300 hover:scale-110 cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={FoodIn}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Moneytalk}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Naviti}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Nudgebee}
              className="w-29 h-20 m-1 htransition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Suzie}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Aashwat}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
          </Marquee>
        </div>
      </motion.div>
    </div>
  );
};
export default Trusted;
