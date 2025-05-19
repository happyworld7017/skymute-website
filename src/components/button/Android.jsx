 import { CONSTANTS } from "../../utils/canstants";

const Android = () => {
  return (
    <div className="py-4 md:py-5 mb-2 sm:px-4 bg-blue-400/50 text-white font-semibold text-center rounded-4xl mx-auto  md:w-[280px]  w-[240px]">
      <a
        href={CONSTANTS?.links?.app_link}
        className="flex items-center justify-center text-sm sm:text-xl gap-3 sm:gap-4"
      >
        <img src="/images/play.svg" className="w-4" alt="play" />
        <span className="text-[14px] md:text-[16px]">
          Download the Application
        </span>
      </a>
    </div>
  );
};

export default Android;
