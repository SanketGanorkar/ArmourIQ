import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo2 from "/assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.7 }}
          className="fixed top-0 left-0 right-0 nav flex bg-white h-[78px] justify-center drop-shadow-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.7 }}
            className="relative nav-width flex items-center justify-between">
            <img
              src={logo2}
              alt="Company Logo"
              className="cursor-pointer h-[8rem]"
              onClick={() => {
                setVisibleMenu(false)
                navigate("/")
              }}
            />
            <ul className={`max-md:absolute max-md:transition ${visibleMenu ? "max-md:translate-x-0" : "max-md:translate-x-[21rem]"} -right-[1.1rem] top-[4.5rem] max-md:w-[20rem] max-md:pb-8 flex max-md:flex-col bg-white gap-10 items-end pr-6  md:items-center text-black list-none ml-auto font-[Roboto]`}>
              <li
                className="text-[20px] font-medium cursor-pointer"
                onClick={() => {
                  setVisibleMenu(false)
                  navigate("/");
                }}
              >
                <a href="#home">Home</a>
              </li>
              <li
                className="text-[20px] font-medium cursor-pointer text-nowrap"
                onClick={() => {
                  setVisibleMenu(false)
                  navigate("/about")
                }}
              >
                About Us
              </li>
              <li
                className="relative group text-[20px] font-medium cursor-pointer"
                onClick={() => {
                  setVisibleMenu(false)
                  navigate("/services")
                }}
              >
                Services
              </li>
              <li
                className="relative group text-[20px] font-medium cursor-pointer"
                onClick={() => {
                  setVisibleMenu(false)
                  navigate("/");
                }}
              >
                <a href="#blog">Blogs</a>
              </li>
              <li
                className="text-[20px] font-medium cursor-pointer"
                onClick={() => {
                  setVisibleMenu(false)
                  navigate("/contact");
                }}
              >
                Contact
              </li>
            </ul>
            <div className="md:hidden" onClick={() => setVisibleMenu(!visibleMenu)}>
              {
                visibleMenu ?
                  <RxCross2 size={28} />
                  :
                  <IoMdMenu size={28} />
              }
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};
export default Navbar;
