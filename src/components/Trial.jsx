import { GrDocumentVerified } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Trial = () => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="w-screen bg-trial bg-cover bg-center h-[350px] flex justify-center mt-6">
      <div className="h-full flex items-center res-width">
        <div className="bg-[#F6F5F5] h-full p-8 w-[40rem]">
          <div className="font-bold text-2xl w-[20rem]">
            Strengthen Your
            Cyber Defenses.
            Book a Free
            Consultation Call !
          </div>
          <div className="mb-[30px] ">
            <div className="mb-1 mt-4">
              Let us help you identify and mitigate risks with a personalized
              security assessment from our professionals.
            </div>
            <button className="flex flex-row font-bold  text-white p-3 mt-5 bg-[#004AAD] hover:bg-[#004AA0]" onClick={() => navigate("/contact")}>
              <GrDocumentVerified className="mt-1 mr-2" /> BOOK A FREE CALL
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Trial;
