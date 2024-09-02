import { FaLinkedin } from "react-icons/fa";
// import { FaMedium } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import logo from "/assets/Company.png";
// import { useEffect, useState } from "react";

import React from "react";

const Footer = () => {

  const navigate = useNavigate();
  return (
    <div className="border-t-[1px] bg-black pb-2 w-full flex flex-col items-center">
      <div className="res-width flex flex-col md:flex-row justify-between 2xl:gap-16 mt-[70px]">
        {/* First column*/}
        <div className="flex flex-col mb-4 md:mb-0">
          <div className="">
            <img
              src={logo}
              alt="Company Logo"
              className="h-[120px] ml-0 mr-auto sm:ml-0 cursor-pointer"
            />
          </div>
          <div className="flex flex-col -mt-1">
            <div className="flex flex-row mb-4">
              <CiLocationOn color="#FFFFFF" className="" size={30} />
              <div className="flex flex-col">
                <h5 className="text-white ml-3 md:w-[15rem]">
                  Saket Salcon, Rasvilas, Saket District
                  Centre, Sector 6, Pushp Vihar,
                  New Delhi, India - 110017
                </h5>
              </div>
            </div>
            <div className="flex flex-row mb-4 items-center">
              <FaPhoneVolume color="#FFFFFF" className=" mt-2" size={18} />
              <div className="flex flex-col">
                <h5 className="text-white mt-1 ml-3">+1 469 296 9672</h5>
              </div>
            </div>
            <div className="flex flex-row mb-4 items-center">
              <MdOutlineEmail color="#FFFFFF" className=" mt-1" size={27} />
              <div className="flex flex-col">
                <h5 className="text-white mt-1 ml-3">hello@armouriq.com</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Second column*/}
        <div className="md:w-[60%] flex justify-between flex-wrap">
          <div className="flex flex-col mt-4 md:mt-12">
            <h4 className="text-white font-semibold text-[22px]">Company</h4>
            <h4
              className="text-white text-[15px] mb-4 mt-4 cursor-pointer hover:text-[#004AAD]"
              onClick={() => {
                navigate("/about");
              }}
            >
              About Us
            </h4>
            <h4
              className="text-white text-[15px] mb-4 cursor-pointer hover:text-[#004AAD]"
              onClick={() => {
                navigate("/services");
              }}
            >
              Services
            </h4>
            <a
              className="text-white text-[15px] mb-4 cursor-pointer hover:text-[#004AAD]"
              href="#blog"
              onClick={() => {
                navigate("/");
              }}
            >
              Blog
            </a>
            <h4
              className="text-white text-[15px] mb-4 cursor-pointer hover:text-[#004AAD]"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </h4>
          </div>
          {/* Third column*/}
          <div className="flex flex-col mt-4 md:mt-12">
            <h4 className="text-white font-semibold text-[22px]">Services</h4>
            <Link
              to="/services/cloud"
              className="text-white text-[15px] mb-4 mt-4 hover:text-[#004AAD]"
            >
              Cloud security
            </Link>
            <Link
              to="/services/mobile"
              className="text-white text-[15px] mb-4 hover:text-[#004AAD]"
            >
              Mobile security
            </Link>
            <Link
              to="/services/application"
              className="text-white text-[15px] mb-4 hover:text-[#004AAD]"
            >
              Application security
            </Link>
            <Link
              to="/services/network"
              className="text-white text-[15px] mb-4 hover:text-[#004AAD]"
            >
              Network security
            </Link>
            <Link
              to="/services/audit"
              className="text-white text-[15px] mb-4 hover:text-[#004AAD]"
            >
              Audit & Compliance
            </Link>
          </div>
          {/* Fourth column*/}
          <div className="flex flex-col mt-4 md:mt-12">
            <Link
              className="text-white text-[15px] mb-4 mt-4 hover:text-[#004AAD]"
              to="/services/soc"
            >
              SOC & Management
            </Link>
            <Link
              className="text-white text-[15px] mb-4 hover:text-[#004AAD]"
              to="/services/maturity"
            >
              Maturity Assessment
            </Link>
            <Link
              className="text-white text-[15px] mb-4 hover:text-[#004AAD]"
              to="/services/virtual"
            >
              Virtual CISO as service
            </Link>
            <Link
              className="text-white text-[15px] mb-4 hover:text-[#004AAD]"
              to="/services/staff"
            >
              Staff & Augmentation
            </Link>
            <Link
              className="text-white text-[15px] mb-4 hover:text-[#004AAD]"
              to="/services/awareness"
            >
              Security Awareness
            </Link>
          </div>
        </div>
      </div>

      <div className="h-[0.1rem] bg-white/50 res-width">
      </div>

      <div className="pt-0 px-2 pb-2 flex flex-col items-center mt-[5px] md:flex-row md:justify-around lg:justify-center lg:gap-[10%] bg-black text-white min-h-[40px] text-center border-white">
        <div className="flex flex-row justify-start pt-2 mb-3">
          <Link
            to="/terms-and-conditions"
            className="mr-10 cursor-pointer hover:text-[#004AAD] text-nowrap"
          >
            Terms Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="cursor-pointer hover:text-[#004AAD] text-nowrap"
          >
            Privacy Policy
          </Link>
        </div>

        <div className="pt-2 px-2 pb-2 bg-black text-white sm:text-nowrap min-h-[40px] mb-2 md:mb-0">
          Copyright 2024 © All Rights Reserved, Twinflare Technologies LLP. dba. ArmourIQ
        </div>

        <div className="flex flex-row md:justify-end space-x-4">
          <Link to="https://www.linkedin.com/company/armouriq/" target="_blank">
            <FaLinkedin className="cursor-pointer" size={25} />
          </Link>
          <BsTwitterX className="cursor-pointer" size={25} />
          <Link to="https://www.youtube.com/@ArmourIQ" target="_blank">
            <IoLogoYoutube className="cursor-pointer" size={25} />
          </Link>
          {/* <FaMedium className="cursor-pointer" size={25} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
