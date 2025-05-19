import React from "react";
import privacyPolicy from "../../json/privacy.json";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-[1100px] mx-auto py-8 ">




      {privacyPolicy.sections.map((section) => (
        <div key={section.id} className="mb-10 border-b border-gray-700 pb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-100" id={section.id}>
            {section.title}
          </h2>

          {section.description && (
            <p className="text-gray-200 mb-5">{section.description}</p>
          )}

          {/* Voluntarily Provided */}
          {section.voluntarilyProvided && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Information You Provide Voluntarily
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {Object.entries(section.voluntarilyProvided).map(
                  ([key, value]) => (
                    <li key={key} className="mb-2">
                      <span className="font-medium capitalize">
                        {key === "usedFor" ? "Used For" : key}:
                      </span>{" "}
                      {Array.isArray(value) ? value.join(", ") : value}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Automatically Collected */}
          {section.automaticallyCollected && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Information Collected Automatically
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {Object.entries(section.automaticallyCollected).map(
                  ([key, value]) => (
                    <li key={key} className="mb-2">
                      <span className="font-medium capitalize">
                        {key === "notCollected" ? "We Do NOT Collect" : key}:
                      </span>{" "}
                      {Array.isArray(value) ? value.join(", ") : value}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Purposes */}
          {section.purposes && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                How We Use Your Information
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {section.purposes.map((purpose, idx) => (
                  <li key={idx} className="mb-1">
                    {purpose}
                  </li>
                ))}
              </ul>

              {section.dataSharing && (
                <p className="text-gray-200 mt-3">
                  <span className="font-semibold">Data Sharing Policy:</span> We{" "}
                  {section.dataSharing.sellRentTrade ? "" : "do not"} sell,
                  rent, or trade your data to third parties.
                </p>
              )}
            </div>
          )}

          {/* Public Content and Sharing */}
          {section.indexing && (
            <div className="mb-6">
              <p className="text-gray-200 mb-2">{section.indexing}</p>
              <p className="text-gray-200 mb-2">
                <span className="font-semibold">Default:</span>{" "}
                {section.default}
              </p>
              <p className="text-gray-300 bg-gray-700 p-2 rounded-md border-l-4 border-yellow-500 mb-3">
                <span className="font-semibold text-yellow-400">Warning:</span>{" "}
                {section.warning}
              </p>
            </div>
          )}

          {/* User Control */}
          {section.userControl && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                User Control
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {section.userControl.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
              {section.consent && (
                <p className="text-gray-200 mt-3 font-medium">
                  {section.consent}
                </p>
              )}
            </div>
          )}

          {/* Content Guidelines */}
          {section.responsibility && (
            <div className="mb-2">
              <p className="text-gray-200">{section.responsibility}</p>
            </div>
          )}

          {/* Adult Content Policy */}
          {section.adultContentPolicy && (
            <div className="mb-6 bg-red-900 bg-opacity-30 p-4 rounded-md border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Adult Content Policy
              </h3>
              <p className="text-gray-200">
                {section.adultContentPolicy.allowed
                  ? "Adult content is allowed with restrictions."
                  : section.adultContentPolicy.statement}
              </p>
            </div>
          )}

          {/* Prohibited Content */}
          {section.prohibitedContent && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Prohibited Content
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {section.prohibitedContent.map((item, idx) => (
                  <li key={idx} className="mb-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Reporting */}
          {section.reporting && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Reporting
              </h3>
              <p className="text-gray-200">{section.reporting}</p>
              {section.enforcement && (
                <p className="text-gray-200 mt-2">{section.enforcement}</p>
              )}
            </div>
          )}

          {/* Security Measures */}
          {section.measures && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Security Measures
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {section.measures.map((measure, idx) => (
                  <li key={idx} className="mb-1">
                    {measure}
                  </li>
                ))}
              </ul>
              {section.note && (
                <p className="text-gray-300 mt-3 italic">{section.note}</p>
              )}
            </div>
          )}

          {/* Services Used */}
          {section.servicesUsed && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Third-Party Services
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {section.servicesUsed.map((service, idx) => (
                  <li key={idx} className="mb-1">
                    {service}
                  </li>
                ))}
              </ul>

              {section.dataSharing && (
                <div className="mt-3">
                  <p className="text-gray-200">
                    We {section.dataSharing.withThirdParties ? "" : "do not"}{" "}
                    share your data with third parties
                    {section.dataSharing.exceptions &&
                      section.dataSharing.exceptions.length > 0 && (
                        <>
                          {" "}
                          except in cases of:{" "}
                          {section.dataSharing.exceptions.join(", ")}
                        </>
                      )}
                  </p>
                  {section.note && (
                    <p className="text-gray-300 mt-2 italic">{section.note}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Rights */}
          {section.rights && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Your Rights
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {section.rights.map((right, idx) => (
                  <li key={idx} className="mb-1">
                    {right}
                  </li>
                ))}
              </ul>
              {section.howToExercise && (
                <p className="text-gray-200 mt-3">
                  <span className="font-semibold">
                    How to exercise your rights:
                  </span>{" "}
                  {section.howToExercise}
                </p>
              )}
            </div>
          )}

          {/* Children's Privacy */}
          {section.title === "Children's Privacy" && section.description && (
            <div className="mb-6 bg-gray-800 p-4 rounded-md">
              <p className="text-gray-200">{section.description}</p>
            </div>
          )}

          {/* Features */}
          {section.features && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Features
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {section.features.map((feature, idx) => (
                  <li key={idx} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Important Notes */}
          {section.importantNotes && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Important Notes
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {section.importantNotes.map((note, idx) => (
                  <li key={idx} className="mb-1">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Consequences */}
          {section.consequences && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Consequences of Violations
              </h3>
              <p className="text-gray-200">{section.consequences}</p>
            </div>
          )}

          {/* Contact */}
          {section.email && (
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                Contact Us
              </h3>
              <p className="text-gray-200">
                For any questions or concerns, please contact us at:{" "}
                <a
                  href={`mailto:${section.email}`}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  {section.email}
                </a>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;
