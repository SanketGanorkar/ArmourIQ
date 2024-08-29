import { GrDocumentVerified } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
const Trial = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-trial bg-cover bg-center h-[350px]">
      <div className="lg:pl-[110px]">
        <div c  lassName="bg-[#F6F5F5] text-black h-[390px] w-[350px] ml-[35px] border-[2px] max-sm:ml-[17px]">
          <div className="font-bold text-2xl pl-[38px] pt-[40px]">
            Strengthen Your
            <br />
            Cyber Defenses.
            <br />
            Book a Free
            <br />
            Consultation Call !
          </div>
          <div className="mb-[30px]">
            <div className="mb-1 ml-9 mt-4  ">
              Let us help you identify and mitigate risks with a personalized
              security assessment from our professionals.
            </div>
            <button className="flex flex-row font-bold  text-white p-3 ml-[38px] mt-5 bg-[#004AAD]" onClick={() => navigate("/contact")}>
              <GrDocumentVerified className="mt-1 mr-2" /> BOOK A FREE CALL
              
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trial;
