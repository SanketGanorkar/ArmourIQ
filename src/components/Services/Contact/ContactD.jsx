import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactD = () => {
  return (
    <div>
      <div className="flex flex-row max-sm:mt-[20px] max-md:flex-col gap-8">
        <div className="flex flex-col">
          <div className="flex flex-row ">
            <FaPhone color="#004bae" className="ml-4 mt-4" size={26} />
            <div className="flex flex-col">
              <h5 className="text-black ml-5 mt-4 font-medium">
                +1 469 296 9672
              </h5>
            </div>
          </div>
          <div className="flex flex-row">
            <MdOutlineEmail color="#004bae" className="ml-4 mt-4" size={36} />
            <div className="flex flex-col">
              <h5 className="text-black ml-3 mt-5 font-medium">
                hello@armouriq.com
              </h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-black md:w-[480px]">
          <input
            type="text"
            placeholder="Name"
            className=" p-3 h-[40px] border-[#004bae] border-[1px] bg-[#F6F5F5] my-3"
          />
          <div className="flex flex-row w-full gap-2">
            <input
              type="number"
              placeholder="Phone Number"
              className="p-3 w-[50%] h-[40px] text-black border-[#004bae] border-[1px] bg-[#F6F5F5]"
            />
            <input
              type="email"
              placeholder="Mail"
              className="text-black h-[40px] w-[80%] p-3 border-[#004bae] border-[1px] bg-[#F6F5F5]"
            />
          </div>
          <textarea
            type="text"
            placeholder="Message"
            className=" w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-[#F6F5F5] my-3"
          />
          <button className="bg-[#004bae] p-3 font-bold w-full text-white">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactD;
