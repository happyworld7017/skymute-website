import introData from "../../json/about.json";

const About = () => {
  return (
    <div className="mx-auto max-w-[1100px] py-6 px-4 text-white space-y-10">
      <h2 className="md:text-[80px] text-[60px] font-extrabold text-white capitalize">
        about
      </h2>
      {/* Intro */}
      <h1 className="text-4xl font-bold">{introData.intro}</h1>

      {/* Problem Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{introData.problem.title}</h2>
        <p className="text-gray-300">{introData.problem.description}</p>
        <ul className="list-disc list-inside text-gray-400">
          {introData.problem.platform_response.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <p className="text-red-400 font-medium">
          {introData.problem.consequence}
        </p>
      </div>

      {/* Solution Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{introData.solution.title}</h2>
        <p className="text-gray-300">{introData.solution.description}</p>
        <ul className="space-y-3">
          {introData.solution.steps.map((stepObj, index) => (
            <li key={index}>
              <p className="font-semibold text-blue-400">{stepObj.step}</p>
              <p className="text-gray-300">{stepObj.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{introData.benefits.title}</h2>
        <p className="text-gray-300">{introData.benefits.description}</p>
      </div>

 
    </div>
  );
};

export default About;
