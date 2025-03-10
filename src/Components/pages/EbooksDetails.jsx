import React from "react";
import { useParams } from "react-router-dom";
import EbookHero from "@/assets/images/e-book-hero.svg";
import PersonalCard from "@/assets/icons/personal-card.svg";
import eBookDetails from "@/assets/icons/e-book-detail.svg";
import tick from "@/assets/icons/tick.svg";

const EbooksDetails = () => {
  const { bookName } = useParams();

  const bookSpec = [
    {
      title: "4 powerful E-books",
      icon: tick,
    },
    {
      title: "300+ essential topics",
      icon: tick,
    },
    {
      title: "High-Quality Diagrams & Tabs",
      icon: tick,
    },
    {
      title: "24/7 instant email support",
      icon: tick,
    },
    {
      title: "Easy download access",
      icon: tick,
    },
  ];

  return (
    <div>
      <div className="px-[220px] mt-5 flex gap-8 w-full">
        <div className="w-[70%]">
          <img src={EbookHero} alt="e-book-hero" />
          <div>
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
            <div className="bg-[#48273A] w-fit px-[15px] text-lg rounded-md">
              E-BOOK BUNDLE
            </div>
            <div className="px-[25px] py-[14px] bg-[#1C1B1B] rounded-2xl mt-14">
              <p className="text-[25px] font-bold uppercase">
                Master the Guitar from Beginner to Pro
              </p>
              <p className="mt-4 text-sm font-light">
                Unlock your full potential as a guitarist with this
                comprehensive Guitar Book Bundle, designed to take you from a
                complete beginner to an advanced player. Whether you're just
                starting out or looking to deepen your understanding of guitar
                theory, scales, and chords, this bundle has everything you need
                to elevate your playing.
              </p>
              <p className="mt-3 text-sm font-light">
                This bestseller bundle includes 4 powerful books covering 300+
                topics, each carefully designed to make your learning journey
                smooth and effective.
              </p>
            </div>
            <div className="mt-[50px]">
              <img src={eBookDetails} alt="" />
            </div>
            <div className="mt-[50px] px-[25px] py-[14px] bg-[#1C1B1B] rounded-2xl">
              <p className="text-[25px] font-bold uppercase">
                Why Choose This Bundle?
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="border border-[#868483] rounded-2xl overflow-hidden">
            <img className="object-cover" src={eBookDetails} alt="" />
            <div className="bg-[#48273A] w-fit px-[15px] text-lg rounded-md mt-7 mx-auto">
              E-BOOK BUNDLE
            </div>
            <div className="mx-auto w-fit mt-6">
              {bookSpec.map((spec, i) => {
                return (
                  <div key={i}>
                    <p className="flex gap-2 mb-2">
                      <img src={spec.icon} alt="" />
                      {spec.title}
                    </p>
                  </div>
                );
              })}
              <div className="mt-[18px] flex gap-3">
                <p className="text-[28px] font-medium">₹499</p>
                <p className="text-[#C6C3C3] text-[28px] font-light line-through">
                  ₹2999
                </p>
              </div>
              <div className="my-6">
                <button className="py-2 px-9 text-[#000000] bg-[#FFBD00] text-xl font-medium rounded-xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbooksDetails;
