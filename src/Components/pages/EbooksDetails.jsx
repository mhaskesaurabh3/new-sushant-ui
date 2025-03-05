import React from "react";
import { useParams } from "react-router-dom";
import EbookHero from "@/assets/images/e-book-hero.svg";
import PersonalCard from "@/assets/icons/personal-card.svg";

const EbooksDetails = () => {
  const { bookName } = useParams();
  console.log({ bookName });

  return (
    <div>
      <div className="px-[220px] mt-5 flex gap-8">
        <div>
          <img src={EbookHero} alt="e-book-hero" />
          <div className="mt-[18px] flex justify-between">
            <p className="text-[40px] font-bold">
              GUITAR <span className="text-[#F19F1F]">MASTERY</span>
            </p>
            <div>
              <p className="downloadtext text-[20px] items-center flex gap-1">
                <img className="h-6 w-6" src={PersonalCard} alt="card" />
                1962
              </p>
              <span className="text-[#807C7C]">Downloads</span>
            </div>
          </div>
        </div>
        <div>Fixed sec</div>
      </div>
    </div>
  );
};

export default EbooksDetails;
