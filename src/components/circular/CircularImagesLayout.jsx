import reddit from "../../../public/images/reddit.svg";
import instagram from "../../../public/images/instagram.svg";
import tiktok from "../../../public/images/tiktok.svg";
import x from "../../../public/images/x.svg";
import facebook from "../../../public/images/facebook.svg";
import youtube from "../../../public/images/youtube.svg";
import pinterest from "../../../public/images/pinterest.svg";

const CircularImagesLayout = () => {
  // Example image - replace with your actual images

  // You can use different images by replacing these URLs
  const images = {
    reddit,
    instagram,
    tiktok,
    x,
    facebook,
    pinterest,
    youtube,
  };

  return (
    <div className="relative  w-full  h-64 mx-auto ">
      {/* Top  image */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
        <img
          src={images?.reddit}
          alt="Top"
          className="w-14 h-14 rounded-full object-cover "
        />
      </div>

      {/* right */}
      <div className="absolute right-0 top-10 transform -translate-x-1/2">
        <img
          src={images?.x}
          alt="right"
          className="w-14 h-14 rounded-full object-cover  "
        />
      </div>
      {/* right bottom */}
      <div className="absolute bottom-14 right-0 transform -translate-x-1/2">
        <img
          src={images?.instagram}
          alt="right"
          className="w-14 h-14 rounded-full object-cover "
        />
      </div>

      {/* top left */}
      <div className="absolute left-16 top-12 transform -translate-x-1/2">
        <img
          src={images?.facebook}
          alt="right"
          className="w-14 h-14 rounded-full object-cover "
        />
      </div>

      {/* left bottom */}
      <div className="absolute sm:left-20 left-[70px] bottom-14 transform -translate-x-1/2">
        <img
          src={images?.tiktok}
          alt="right"
          className="w-14 h-14 rounded-full object-cover "
        />
      </div>

      {/*  bottom */}
      <div className="absolute right-[88px] md:right-24 bottom-3 transform -translate-x-1/2">
        <img
          src={images?.pinterest}
          alt="right"
          className="w-14 h-14 rounded-full object-cover "
        />
      </div>

      {/*  center */}
      <div className="absolute  bottom-[104px] left-1/2 transform -translate-x-1/2">
        <img
          src={images?.youtube}
          alt="right"
          className="w-14 h-14 rounded-full object-cover "
        />
      </div>
    </div>
  );
};

export default CircularImagesLayout;
