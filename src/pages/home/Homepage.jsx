import { useState } from "react";
import Card from "../../components/card/Card";
import ToggleButton from "../../components/button/Slider";
import Android from "../../components/button/Android";

const Homepage = () => {
  const [problem, setProblem] = useState(true);
  return (
    <div className="w-full h-full min-h-screen py-5">
      <Android />
      {problem ? (
        <Card
          title={"Tried promoting your links across platforms?"}
          topic={"Got ban !"}
          explanation={
            "If you try to share your link, they ban you like you hacked their server with a toaster!"
          }
          doesLayoutExist={true}
        />
      ) : (
        <Card
          title={"Give SkyMute Linkbox a try"}
          topic={"Skymute"}
          explanation={
            "With SkyMute Linkbox, you can easily promote all your links across platforms without the risk of getting banned"
          }
          doesLayoutExist={false}
        />
      )}

      <div className="sm:w-[360px] w-[310px]  text-2xl font-extrabold text-white rounded-[50px] bg-linear-to-r from-[#29314A] to-[#6375B0] cursor-pointer flex justify-between mx-auto mt-4">
        <button
          onClick={() => setProblem(true)}
          className={` w-[70%] py-5 cursor-pointer  ${
            problem
              ? `bg-linear-to-r from-[#6B1B42] to-[#E23CD1]`
              : `bg-transparent`
          } rounded-r-[50px] rounded-l-[50px]`}
        >
          problem
        </button>
        <button
          onClick={() => setProblem(false)}
          className={` w-[70%] py-5 cursor-pointer ${
            !problem
              ? `bg-linear-to-r from-[#185912] to-[#3CE29A]`
              : `bg-transparent`
          } rounded-r-[50px] rounded-l-[50px] `}
        >
          solution
        </button>
      </div>
    </div>
  );
};

export default Homepage;
