import React from "react";

// import playstoreicon from "@assests/icons/play-store.svg";
import playstoreicon from "../../assets/icons/play-store.svg";
import appstoreicon from "../../assets/icons/app-store.svg";
import heroSectionImage from "../../assets/icons/hero-section-image.svg";
import EBooks from "../../Components/EBooks";
import VideoSlider from "../VideoSlider";
import KnowYourInstructor from "../KnowInstrutor";

const Home = () => {
  return (
    <div>
      <div className="pl-[92px] w-full flex">
        <div className="mt-[140px] w-1/2">
          <p className="text-[55px] font-medium">
            ENHANCE YOUR GUITAR LEARNING EXPERIENCE
          </p>
          <div className="mt-11 ">
            <p className="text-[27px]">
              A guitar is more than just a sound box… <br />
              it is part of your soul. –{" "}
              <span className="text-[#FD8F25]">Manuel Velazquez</span>
            </p>
          </div>
          <div className="mt-11 py-1">
            <p className="uppercase text-[#868483]">apps coming soon</p>
            <div className="mt-3 flex gap-3">
              <img src={playstoreicon} alt="play-store-icon" />
              <img src={appstoreicon} alt="app-store-icon" />
            </div>
          </div>
        </div>
        <div>
          <img src={heroSectionImage} alt="hero-image" />
        </div>
      </div>
      <div className="px-[92px]">
        <EBooks />
      </div>
      {/* for youtube video section */}
      <div className="px-[92px]">
        <VideoSlider />
      </div>
      {/* for instructor section */}
      <div className="px-[92px]">
        <KnowYourInstructor />
      </div>
    </div>
  );
};

export default Home;
