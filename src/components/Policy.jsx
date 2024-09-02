import Footer from "./Footer";

const Policies = () => {
  return (
    <div className="bg-white flex  flex-col items-center">
      <div className="res-width flex flex-col mt-3">
        <h1 className="text-[24px] md:text-[32px] lg:text-[40px] mt-[90px] text-black font-semibold">
          Privacy Policy
        </h1>
        <div className="mb-10">
          <p className="text-black font-normal text-base md:text-lg lg:text-xl mt-5">
            At ArmourIQ, safeguarding your privacy and data isn't just about
            meeting legal requirements; it's ingrained in our core business
            values and corporate culture, extending to our global operations.
            We, along with our dedicated employees, prioritize the protection of
            your privacy as our paramount responsibility.
          </p>
          <p className="text-black font-normal text-base md:text-lg lg:text-xl mt-3">
            Rest assured, your personal details such as your name & email
            address will never be utilized for marketing endeavors. Any
            communication regarding our company will be directed to you solely
            based on the information provided in your registration form.
            Moreover, if you wish to opt out of future emails, unsubscribe
            options are readily available within the registration form.
          </p>
          <h1 className="text-[20px] md:text-[26px] lg:text-[30px] mt-[40px] text-black font-semibold">
            Personal Information We Collect
          </h1>
          <ol className="list-disc text-black font-normal text-base md:text-lg lg:text-xl ml-5 md:ml-10 lg:ml-12 mt-5">
            <li>
              Personal information encompasses any data relating to an
              individual's identity or name. When interacting with us, you may
              share personal details like your name, email address, telephone
              number, and project specifics.
            </li>
            <li>
              By considering your needs and interests, we strive to enhance our
              services and gain a deeper understanding of you. Rest assured, we
              do not sell, rent, or lease individuals' or company's personal
              information or email lists to third parties for commercial or
              marketing endeavors.
            </li>
          </ol>
          <h1 className="text-[20px] md:text-[26px] lg:text-[30px] mt-[40px] text-black font-semibold">
            Notification of Changes
          </h1>
          <ol className="list-disc text-black font-normal text-base md:text-lg lg:text-xl ml-5 md:ml-10 lg:ml-12 mt-5">
            <li>
              To keep you informed about the information we gather and its
              utilization, any modifications to our privacy policy will be
              promptly posted on our website.
            </li>
          </ol>
          <h1 className="text-[20px] md:text-[26px] lg:text-[30px] mt-[40px] text-black font-semibold">
            Web Servers
          </h1>
          <ol className="list-disc text-black font-normal text-base md:text-lg lg:text-xl ml-5 md:ml-10 lg:ml-12 mt-5">
            <li>
              ArmourIQ servers automatically receive your IP address, the time
              of access, and details regarding the requested page each time you
              visit the site.
            </li>
          </ol>
          <h1 className="text-[20px] font-semibold md:text-[26px] lg:text-[30px] mt-[40px] text-black">
            Copyrights & Trademarks
          </h1>
          <ol className="list-disc text-black font-normal text-base md:text-lg lg:text-xl ml-5 md:ml-10 lg:ml-12 mt-5">
            <li>
              ArmourIQ maintains this website to ensure the accuracy and
              currency of information.
            </li>
            <li>
              All content showcased on ArmourIQ website has been independently
              developed.
            </li>
            <li>
              Reprinting ArmourIQ content on any medium without prior written
              permission is prohibited. The copyright for content provided by
              ArmourIQ Solutions will remain our property.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Policies;
