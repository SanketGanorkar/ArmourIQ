import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo2 from "/assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);

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
            <ul className={`max-md:absolute max-md:transition ${visibleMenu ? "max-md:translate-x-0" : "max-md:translate-x-[21rem]"} -right-[0.7rem] top-[4.8rem] max-md:w-[18rem] max-md:pb-8 flex max-md:flex-col max-md:bg-zinc-50 gap-10 items-center pr12  md:items-center text-black list-none ml-auto font-[Roboto]`}>
              <li
                className="text-[20px] font-medium cursor-pointer max-md:mt-6"
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
              >
                <p
                  onClick={() => {
                    setVisibleMenu(false)
                    navigate("/services")
                  }}
                >
                  Services
                </p>
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  exit={{ scaleY: 0 }}
                  style={{ transformOrigin: "top" }}
                  className={`hidden md:group-hover:grid pt-6 md:hover:grid absolute bg-white h-auto w-[30rem] -left-[10rem] top-[1.5rem] text-base grid grid-cols-2`}>
                  <p onClick={() => navigate("/services/cloud")} className="px-6 py-3 hover:bg-zinc-200/50 bg-zinc-50">Cloud Security</p>
                  <p onClick={() => navigate("/services/mobile")} className="px-6 py-3 hover:bg-zinc-200/50 bg-zinc-50">Mobile Security</p>
                  <p onClick={() => navigate("/services/application")} className="px-6 py-3 hover:bg-zinc-200/50 bg-zinc-50">Application Security</p>
                  <p onClick={() => navigate("/services/network")} className="px-6 py-3 hover:bg-zinc-200/50 bg-zinc-50">Network Security</p>
                  <p onClick={() => navigate("/services/audit")} className="px-6 py-3 hover:bg-zinc-200/50 bg-zinc-50">Audit & Compliance</p>
                  <p onClick={() => navigate("/services/soc")} className="px-6 py-3 hover:bg-zinc-200/50 bg-zinc-50">SOC & MDR Services</p>
                  
                  <p onClick={() => navigate("/services/virtual")} className="px-6 py-3 hover:bg-zinc-200/50 bg-zinc-50">Virtual CISO as a Service</p>
                  <p onClick={() => navigate("/services/awareness")} className="px-6 py-3 hover:bg-zinc-200/50 bg-zinc-50">Security Awareness</p>
                  <p className="px-6 py-3 bg-zinc-50 hover:bg-zinc-200/50" onClick={() => navigate("/services/audit")}>PCI DSS</p>
                  <p onClick={() => navigate("/services/maturity")} className="px-6 py-3 hover:bg-zinc-200/50 bg-zinc-50">Cyber Maturity Assessment</p>
                </motion.div>
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
