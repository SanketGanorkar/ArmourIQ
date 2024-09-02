import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { useState } from "react";
import img from "/assets/ServiceBg.jpg";
import contact from "/assets/contact.png";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_wcm3o3j";
    const templateID = "template_93tgdo8";
    const publicKey = "DuSbBCyG3R1hNDXzG";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_message: message,
      from_subject: subject,
      from_number: number,
      to_name: "Sanket",
      message: message,
    };

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
  return (
    <div className="flex flex-col bg-[#262626] justify-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="relative">
        <img src={img} className="topic-bg" alt="Service Image" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white lg:text-[55px] font-semibold mt-11 text-[36px] text-nowrap max-sm:mt-12">
          Contact Us
        </motion.div>
      </motion.div>
      <div className="res-width flex flex-col lg:flex-row py-6 lg:gap-8 mt-[40px] h-fit items-center">
        <div className="flex flex-col  lg:w-[28rem] items-center h-fit">
          <motion.img
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.7 }}
            src={contact} className="block h-[25rem] md:h-[40rem] object-cover" />
        </div>
        <div className="h-fit flex max-md:flex-col gap-4 md:gap-8">
          <div className="md:mt-12 lg:max-xl:w-1/3 xl:w-fit max-sm:w-screen max-sm:pl-4 ">
            <motion.h3
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
              className="ml-3 mb-1 text-[#004bae] font-bold">CONTACT US</motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
              className="ml-3 mt-1 text-white text-3xl font-bold">
              Contact Information
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
              className="flex">
              <CiLocationOn color="#004bae" className="ml-3 mt-4" size={40} />
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <h5 className="text-white ml-3 mt-2 text-pretty">
                    Saket Salcon, Rasvilas, Saket District
                    <br />
                    Centre, Sector 6, Pushp Vihar,
                    New Delhi, India - 110017
                  </h5>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
              className="flex flex-row mt-6 items-center">
              <FaPhoneVolume color="#004bae" className="ml-4" size={22} />
              <div className="flex flex-col">
                <h5 className="text-white ml-5">+1 469 296 9672</h5>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
              className="flex flex-row mt-6 items-center">
              <MdOutlineEmail color="#004bae" className="ml-3" size={28} />
              <div className="flex flex-col">
                <h5 className="text-white ml-3">hello@armourIQ.com</h5>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.6, delay: 0.3 }}
            className="flex flex-col text-white md:mt-12 h-fit max-sm:px-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 h-[40px] border-[#004bae] border-[1px] bg-[#000000] mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="flex flex-row w-full gap-2">
              <input
                type="number"
                placeholder="Phone Number"
                className="p-3 outline-none w-[60%] h-[40px] text-white border-[#004bae] border-[1px] bg-[#000000]"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
              <input
                type="email"
                placeholder="Mail"
                className="text-white h-[40px] w-[80%] p-3 border-[#004bae] border-[1px] bg-[#000000]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full pl-3 h-[40px] border-[#004bae] border-[1px] bg-[#000000] my-3"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea
              type="text"
              placeholder="Message"
              className="w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-[#000000] my-3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-[#004bae] p-3 font-bold w-full"
              onClick={handleSubmit}
            >
              SEND
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col">
        <div className="w-full max-sm:h-[300px] w-screen">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.408640590646!2d77.21774037408956!3d28.527434588848106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18b0950c389%3A0xebbb242665d51b64!2sSalcon%20Rasvilas!5e0!3m2!1sen!2sin!4v1720811429653!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};
export default Contact;
