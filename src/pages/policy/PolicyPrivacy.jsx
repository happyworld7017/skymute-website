import ids from "../../json/idsPolicy.json";
import PrivacyPolicy from "./V2";
const PolicyPrivacy = () => {
  return (
    <section className="min-h-screen h-full  max-w-[1100px] mx-auto pt-5 text-white px-7">
      <h2 className="md:text-[80px] text-[60px] font-extrabold text-white capitalize">
        privacy policy
      </h2>
      <div className="">
        {/* all contents */}
        <div className="">
          <h4 className="text-xl font-sans font-bold text-white pt-4">
           effective date : <span className="">10 april 2025</span>{" "}
          </h4>
          <div className="pt-5 flex flex-col gap-4 text-blue-50 text-[17px]">
            <span className="">
              SkyMute ("we," "us," or "our") respects your privacy and is
              committed to protecting it through this Privacy Policy. This
              document explains how we collect, use, share, and protect your
              personal information when you use our mobile application
              ("SkyMute" or "App").
            </span>
          </div>
          {/* links */}
          <div className="py-4">
            <ul className="gap-4 flex flex-col">
              {ids.map((id) => {
                return (
                  <li className="" key={id.index}>
                    <span className="pr-4">{id.index}.</span>
                    <a href={`#${id.id}`} className="underline text-indigo-200">
                      {id.idText}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* all texts */}
          <PrivacyPolicy />
        </div>
      </div>
    </section>
  );
};

export default PolicyPrivacy;
