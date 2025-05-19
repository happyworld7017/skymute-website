import CircularImagesLayout from "../circular/CircularImagesLayout";

const Card = ({ title, topic, explanation, doesLayoutExist }) => {
  return (
    <section className="mx-auto max-w-[1100px] ">
      {/* title ,  images - default , topic , explanation */}
      <div className="sm:max-w-[380px]  max-w-[340px] max-h-[590px] md:h-[520px] sm:h-[390px] bg-white mx-auto  rounded-[60px] md:py-4 py-5 px-4 bg-linear-to-b from-[#1a2959] to-[#10192d] border border-slate-700 ">
        <h3
          className={`md:text-xl px-4 pb-5 text-[19px] font-[700] text-white mx-auto text-center max-w-[320px] `}
        >
          {title}
        </h3>
        {/* images */}
        <div className="mx-auto ">
          {doesLayoutExist ? (
            <CircularImagesLayout />
          ) : (
            <img
              src={"/images/icon.svg"}
              alt="Top"
              className="md:w-52 w-[229px] rounded-full object-cover bg-center mx-auto my-auto py-4 "
            />
          )}
        </div>
        <h4
          className={`text-[29px] font-bold text-center py-2 ${
            doesLayoutExist ? `text-red-500` : `text-green-500`
          } `}
        >
          {topic}
        </h4>
        <p className="text-center font-[700] w-[90%] mx-auto sm:text-[20px] text-[16px] text-white sm:px-3">
          {" "}
          {explanation}
        </p>
      </div>
    </section>
  );
};

export default Card;
