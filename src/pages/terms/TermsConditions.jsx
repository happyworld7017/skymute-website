import React from "react";
import termsData from "../../json/terms.json"; // Make sure this JSON file has the structure you provided
import ids from "../../json/idsTerms.json";
const TermsAndConditions = () => {
  return (
    <div className="max-w-[1100px] mx-auto py-10 px-4 text-gray-200">
      <h1 className="md:text-[80px] text-[60px] font-extrabold text-white capitalize">
        {termsData.title}
      </h1>
      <p className="text-xl font-sans font-bold text-white pt-4 pb-3">
        Effective Date : {termsData.effectiveDate}
      </p>

      <p className=" text-gray-300 mb-10 font-semibold">
        {termsData.introduction}
      </p>

      <div className=" pb-10">
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

      {termsData.sections.map((section) => (
        <div key={section.id} className="mb-12 border-b border-gray-700 pb-8">
          <h2 className="text-2xl font-bold text-white mb-4" id={section.id}>
            {section.title}
          </h2>

          {section.description && (
            <p className="text-gray-400 mb-4">{section.description}</p>
          )}

          {/* Points rendering */}
          {section.points && (
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {section.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}

          {/* Subsections rendering */}
          {section.subsections &&
            section.subsections.map((sub) => (
              <div key={sub.id} className="mt-6">
                <h3
                  className="text-xl font-semibold text-white mb-2"
                  id={sub.id}
                >
                  {sub.title}
                </h3>
                {sub.points && (
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {sub.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

          {/* Contact Information */}
          {section.email && (
            <p className="mt-4 text-gray-300">
              Contact us at:{" "}
              <a
                href={`mailto:${section.email}`}
                className="text-blue-400 underline"
              >
                {section.email}
              </a>
            </p>
          )}
        </div>
      ))}

      <p className="text-center text-gray-400 mt-12 italic">
        {termsData.acknowledgment}
      </p>
    </div>
  );
};

export default TermsAndConditions;
