import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactD = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY

    const templateParams = {
      from_name: name,
      from_email: email,
      from_message: message,
      from_subject: subject,
      from_number: number,
      to_name: "Ashutosh",
      message: message,
    };
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (name === "" || email === "" || message === "" || number === "") {
      window.alert("All fields are required!");
      return;
    }

    if (!emailRegex.test(email)) {
      window.alert("Enter valid email address!");
      return;
    }

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
    <div>
      <div className="flex flex-row max-sm:mt-[20px] max-md:flex-col gap-8">
        <div className="flex flex-col">
          <div className="flex flex-row ">
            <FaPhone color="#004bae" className="ml-4 mt-4" size={26} />
            <div className="flex flex-col">
              <h5 className="text-black ml-5 mt-4 font-medium">
                +91 8007024111
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
        <form onSubmit={handleSubmit} className="flex flex-col text-black md:w-[480px]">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className=" p-3 h-[40px] border-[#004bae] border-[1px] bg-[#F6F5F5] my-3"
          />
          <div className="flex flex-row w-full gap-2">
            <input
              type="number"
              placeholder="Phone Number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              className="p-3 w-[50%] h-[40px] text-black border-[#004bae] border-[1px] bg-[#F6F5F5]"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="text-black h-[40px] w-[80%] p-3 border-[#004bae] border-[1px] bg-[#F6F5F5]"
            />
          </div>
          <textarea
            type="text"
            placeholder="Message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className=" w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-[#F6F5F5] my-3"
          />
          <button type="submit" className="bg-[#004bae] p-3 font-bold w-full text-white">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactD;
