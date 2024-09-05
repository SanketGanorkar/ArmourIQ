import team2 from "/assets/Team_2.jpg";
import team1 from "/assets/Team_1.jpg";
import { motion } from "framer-motion";

const Team = () => {

  return (
    <div className="res-width bg-white flex flex-col items-center mt-24" id="team">
      <h2 className="text-black text-4xl font-semibold text-center mb-6">
        Our Team
      </h2>
      <div className="flex flex-col mt-5 w-full lg:px-0">
        <div className="relative flex max-[1170px]:flex-col gap-6 lg:items-start lg:justify-center lg:space-x-4">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            src={team2}
            className="h-[350px] lg:h-auto z-30 max-[1160px]:w-full w-[40rem] xl:w-[50rem] object-cover rounded-xl mb-4 lg:mb-0"
          />
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
            className="flex flex-col h- justify-center lg:text-left md:ml-0">
            <p className="text-black text-pretty lg:text-lg mr-2 ">
              At ArmourIQ, we are dedicated to democratizing cybersecurity,
              ensuring that businesses of all sizes can defend against digital
              threats with confidence. Our team is committed to delivering
              tailored cybersecurity solutions designed to meet the unique needs
              of each client.
            </p>
            <br />
            <p className="text-black text-pretty lg:text-lg mr-3">
              Rather than focusing on individual team members, we emphasize our
              collective expertise and collaborative approach. This allows us to
              maintain a strong commitment to quality, reliability, and
              proactive support, ensuring that every client receives
              personalized cybersecurity solutions that are effective and
              affordable.
            </p>
            <br />
            {/* <p className="text-black text-pretty lg:text-lg mr-3">
              Our dedication to transparency fosters trust and long-lasting
              partnerships built on mutual success. We believe that informed
              clients are empowered clients, which is why we maintain open
              communication and provide clear insights into our processes and
              strategies.
            </p> */}
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse lg:items-start lg:justify-between lg:space-x-reverse lg:space-x-4 mt-8 lg:mt-16">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            src={team1}
            className="h-[250px] lg:h-[400px] w-full z-30 lg:w-[805px] object-contain rounded-xl mb-4 lg:mb-0"
          />
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }}
            className="flex flex-col lg:text-left">
            <p className="text-black text-pretty lg:text-lg">
              At ArmourIQ, we offer a comprehensive suite of cybersecurity
              services, including risk assessment, threat detection, incident
              response, and continuous monitoring. Our innovative solutions are
              designed to adapt to the evolving threat landscape, providing
              robust protection against both current and emerging cyber threats.
            </p>
            <br />
            {/* <p className="text-black text-pretty lg:text-lg">
              We understand that every business is unique, which is why we take
              a customized approach to each project. Our experts work closely
              with you to understand your specific needs and challenges,
              developing tailored strategies that align with your business
              objectives. Whether you are a small business looking to strengthen
              your security posture or a large enterprise seeking advanced
              threat protection, we have the expertise and resources to support
              you.
            </p>
            <br />
            <p className="text-black text-pretty lg:text-lg">
              Explore how we can empower your organization to assess, defend,
              and secure your digital assets with the same level of security as
              industry leaders. Contact us today to learn more about our
              tailored cybersecurity services and discover how ArmourIQ can be
              your trusted partner in safeguarding your digital future.
            </p> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Team;
