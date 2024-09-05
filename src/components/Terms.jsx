import Footer from "./Footer";

const Terms = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="flex flex-col mt-3 res-width">
        <h1 className="text-[24px] md:text-[32px] mt-[90px] text-black font-semibold">
          Terms And Conditions
        </h1>
        <div className="mb-10">
          <h1 className="text-[1.2rem] md:text-[1.5rem] mt-[40px] text-black">
            Responsibilities Of The Client And General Work Terms:
          </h1>
          <ol className="list-disc text-black font-normal text-base md:text-lg lg:text-xl ml-5 md:ml-10 lg:ml-12 mt-5">
            <li>
              Before commencing any work, such information must be furnished.
            </li>
            <li>
              Data entry, web hosting, and custom artwork/graphics-related tasks
              are excluded from the Contract unless explicitly specified, paid{" "}
              for, and mutually agreed upon by both parties.
            </li>
            <li>
              The client bears sole responsibility for supplying ArmourIQ
              Solutions with all site content, including text and multimedia.
            </li>
            <li>
              ArmourIQ and/or its suppliers will maintain ownership of artwork,
              images, and text provided on behalf of the client, unless
              otherwise agreed upon.
            </li>
          </ol>
          <h1 className="text-[1.2rem] md:text-[1.5rem] mt-[40px] text-black">
            Data We Collect Includes:
          </h1>
          <ol className="list-disc text-black font-normal text-base md:text-lg lg:text-xl ml-5 md:ml-10 lg:ml-12 mt-5">
            <li>
              Before allowing us to proceed with fulfilling the contract, the
              client is solely responsible for ensuring proper backups of all
              content on their site.
            </li>
            <li>
              ArmourIQ shall not be held responsible for any loss or damage to
              existing data under any circumstances.
            </li>
          </ol>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-[50px] text-black">
            ArmourIQ will strive to deliver all services within the estimated
            time frame. However, there may be instances where unforeseen events
            necessitate an extension of time, such as deployment issues or
            dependencies on third-party support.
          </p>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-[20px] text-black">
            ArmourIQ has the right to publish and utilize the data, files, and
            graphics provided by the Client, while the Client retains the
            copyright to such materials. If any third party has copyrighted
            information or files, the Client must obtain permission and rights
            to use them. It is responsible for obtaining permission and rights
            for use from the Client and indemnifying ArmourIQ from any claims
            arising from the Client's negligence in obtaining appropriate
            copyright permissions. The Client guarantees that all permissions
            and authorities have been obtained by signing a contract for website
            design and/or placement and may be required to provide proof of
            permissions and authorities.
          </p>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-[20px] text-black">
            During the design phase and upon completion of the website, ArmourIQ
            will provide the Client with an opportunity to review its appearance
            and content. If the client does not respond within seven days, the
            material will be deemed automatically accepted.
          </p>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] mt-[20px] text-black">
            Upon installation/deployment, ArmourIQ is not liable for any
            alterations made to the Client's pages or website by the Client or a
            third party, including additions, modifications, or deletions.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Terms;
