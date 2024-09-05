import { FaStar } from "react-icons/fa";
import user from "/assets/User.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  const arr = [
    {
      id: 1,
      desc: "The team was incredibly professional and knowledgeable. Their expertise in handling our security needs has been invaluable.",
      img: user,
      name: "Dennis Williams",
      desig: "Founder & President",
    },
    {
      id: 2,
      desc: "Oversees project management and ensures alignment with strategic goals, fostering a collaborative environment.",
      img: user,
      name: "Geoff Wilson",
      desig: "CEO",
    },
    {
      id: 3,
      desc: "The cybersecurity solutions provided by this company have drastically improved our security posture.",
      img: user,
      name: "Craig Hill",
      desig: "Founder & CEO",
    },
    {
      id: 4,
      desc: "ArmourIQ's VPAT service ensured thorough security compliance with ease. Their expertise and attention to detail exceeded our expectations.",
      img: user,
      name: "Abhay Verma",
      desig: "CEO",
    },
  ];

  return (
    <div className="res-width flex bg-white">
      <div className="flex flex-col w-full itemscenter">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="flex flex-row text-black max-sm:flex-col sm:items-end gap-4 sm:gap-14 my-6 mt-20">
          <div>
            <h5 className="font-bold text-[#004bae]">TESTIMONIALS</h5>
            <h2 className="font-bold text-3xl">
              What clients say about us
            </h2>
          </div>
          <div>
            <button className="bg-[#004AAD] w-[8rem] text-white p-2 font-bold cursor-pointer">
              SEE MORE
            </button>
          </div>
        </motion.div>
        <div className="max-lg:overflow-x-scroll">
          <div className="flex flex-row gap-2 md:gap-4 xl:gap-12 max-xl:w-[75rem] max-xl:overflow-x-scroll">
            {arr.map((item) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                key={item.id}
                className="bg-[#F6F5F5] mb-9 border-[2px] w-[342px] h-auto mt-6 md:mt-12 pl-6 pr-3 py-4 flex flex-col justify-between"
              >
                {/* <div className="flex flex-row mt-3">
                  <FaStar color="black" className="mt-8" />
                  <FaStar color="black" className="ml-2 mt-8" />
                  <FaStar color="black" className="ml-2 mt-8" />
                  <FaStar color="black" className="ml-2 mt-8" />
                  <FaStar color="black" className="ml-2 mt-8" />
                </div> */}
                <p className="text-black mt-3">{item.desc}</p>
                <div className="flex flex-row items-center py-2">
                  <img src={item.img} className="h-[70px]" />
                  <div className="flex flex-col ml-5">
                    <h2 className="text-black font-semibold">{item.name}</h2>
                    <h6 className="text-black text-[14px]">{item.desig}</h6>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
