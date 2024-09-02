import React from "react";
import blog1 from "/assets/blog1.png";
import blog2 from "/assets/blog2.png";
import blog3 from "/assets/blog3.png";
import { Link } from "react-router-dom";
import { FaRegCommentAlt } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const Blog = () => {
  const arr = [
    {
      id: 1,
      img: blog1,
      title:
        "Defending Against Phishing: Strategies to Protect Your Organization",
      date: "July 13 2022",
      comments: "0",
      path: "/blog1",
      desc: "Cyber threats are constantly evolving, and staying informed is crucial. Here are the top 5 cybersecurity threats.",
    },
    {
      id: 2,
      img: blog2,
      title:
        "How to Conduct an Effective Tabletop Exercise for Cybersecurity Preparedness",
      date: "August 21 2022",
      comments: "5",
      path: "/blog2",
      desc: "AI is evolving rapidly with new trends emerging every year. Stay updated with the latest developments in AI.",
    },
    {
      id: 3,
      img: blog3,
      title:
        "Unveiling the Importance of Technical Risk Assessment in Cybersecurity",
      date: "September 10 2022",
      comments: "2",
      path: "/blog3",
      desc: "Blockchain technology is set to revolutionize various industries. Learn about its future prospects and potential.",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 675 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 675, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="z-10 bg-white flex flex-col items-center blog-width" id="blog">
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="text-[#004AAD] font-bold pt-[85px] text-nowrap">
        BLOG & NEWS
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="text-black font-bold text-3xl">Latest News</motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="text-black mt-3 text-center max-w-xl">
        Stay updated with the latest cybersecurity trends, news, and expert
        insights to keep your business secure.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }}
        className="w-full mx-auto mt-8">
        <Carousel
          swipeable
          draggable
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
        >
          {arr.map((item) => (
            <div
              key={item.id}
              className=""
            >
              <div className="flex justify-center items-center my-4 mx-2">
                <div className="blog-card w-[23rem] md:w-[25rem] h-[33rem] border-[#004bae] border-[1px] flex flex-col items-center bg-white rounded-lg shadow-lg">
                  <Link to={item.path} className="overflow-hidden">
                    <img
                      src={item.img}
                      className="blog-img w-full object-cover rounded-sm transition-all 300"
                    />
                  </Link>
                  <div className="p-4 flex flex-col items-start w-full">
                    <Link to={item.path}>
                      <h2 className="text-black text-xl font-bold">{item.title}</h2>
                    </Link>
                    <div className="flex items-center mt-2 text-black">
                      <div className="text-black font-normal">{item.date}</div>
                      <div className="flex items-center ml-auto">
                        <FaRegCommentAlt className="mr-2 mt-1 ml-[100px]" />
                        <div className="mr-4">{item.comments}</div>
                      </div>
                    </div>
                    <p className="text-black mt-2">{item.desc}</p>
                    <Link to={item.path}>
                      <h2 className="mt-3 text-black font-bold cursor-pointer hover:text-[#004AAD]">
                        READ MORE
                      </h2>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </div>
  );
};
export default Blog;
