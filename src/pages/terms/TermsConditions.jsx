import React from "react";
import termsData from "../../json/terms.json"; // Make sure this JSON file has the structure you provided
import ids from "../../json/idsTerms.json";
const TermsAndConditions = () => {
  return (
    <div className="max-w-[1100px] mx-auto pt-5 px-4 text-gray-200">
      <h1 className="md:text-[30px] text-[60px] font-bold text-blue-400 capitalize">
        Skymute technology private limited
      </h1>
      <h1 className="md:text-[80px] text-[60px] font-extrabold text-white capitalize">
        {termsData.title}
      </h1>
      <p className="text-xl font-sans font-bold text-white pt-4 pb-3">
        Effective Date : {termsData.effectiveDate}
      </p>

      <p className=" text-gray-300 mb-10 font-semibold">
        {termsData.introduction}
      </p>

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

          {/* Features rendering */}
          {section.features && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white mb-2">
                Features
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {section.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Important Notes rendering */}
          {section.importantNotes && (
            <div className="mt-6 ">
              <h3 className="text-lg font-semibold text-red-50 mb-2">
                Refund Policy and Important Notes
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {section.importantNotes.map((note, index) => (
                  <li key={index}>{note}</li>
                ))}
              </ul>
            </div>
          )}
          {/* Consequences rendering */}
          {section.consequences && (
            <p className="mt-6 text-gray-400 italic">{section.consequences}</p>
          )}

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
