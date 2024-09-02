import Footer from "./Footer.jsx";
import Trial from "./Trial.jsx";
import Trusted from "./Trusted.jsx";
import Testimonials from "./Testimonials.jsx";
import Intro from "./Intro.jsx";
import Blog from "./Blog.jsx";
import { AnimatePresence } from "framer-motion";

const LandingPage = () => {
  return (
    <>
      <AnimatePresence>
        <div id="home" className="flex flex-col items-center overflow-x-hidden">
          <Intro />
          <Trusted />
          <Trial />
          <Blog />
          <Testimonials />
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
};

export default LandingPage;
