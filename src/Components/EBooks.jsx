import React from "react";
import booksIcon from "../assets/icons/books.svg";
import eBookPlaceHolder from "../assets/images/ebook-placeholder.svg";
import sushantYoutube from "../assets/images/sushant_youtube.png";

const EBooks = () => {
  return (
    <div>
      {/* foe e-books */}
      <p className="flex gap-2 text-xl">
        <img src={booksIcon} alt="" />
        E-BOOKS
      </p>

      <div className="mt-4 border border-[#FF38AF] rounded-[20px] w-full flex justify-between">
        <div className="mt-[30px] pl-11">
          <p className="text-[40px] font-bold flex flex-col">
            GUITAR
            <span className="text-[40px] font-bold text-[#E53771] mt-0">
              MASTERY
            </span>
          </p>
          <p className="text-lg px-[18px] bg-[#48273A] w-fit rounded-md">
            E-BOOK BUNDLE
          </p>
          <div className="mt-10">
            <p className="text-lg font-light">
              Presenting the ‘Award-Winning Guitar Mastery E-Book Bundle - A
              complete solution that will take you from beginner to pro.
            </p>
            <p className="text-lg font-light mt-6">
              This bestseller bundle includes 4 powerful books covering 300+
              topics, each carefully designed to make your learning journey
              smooth and effective.
            </p>
          </div>
          <div className="mt-10">
            <p className="text-[30px] font-semibold">₹499 ONLY</p>
          </div>
          <div className="mt-3 mb-10">
            <button className="px-10 py-3 font-semibold rounded-[14px] text-xl text-black bg-[#FFBD00]">
              DOWNLOAD NOW!
            </button>
          </div>
        </div>
        <div>
          <img src={eBookPlaceHolder} alt="e-book-placeholder" />
        </div>
      </div>

      <p className="flex gap-2 text-xl mt-10">
        <img src={booksIcon} alt="" />
        COURSES
      </p>

      <div className="mt-4 border border-[#FF38AF] rounded-[20px] w-full flex justify-between">
        <div className="mt-[30px] pl-11 w-[40%]">
          <p className="text-[40px] font-bold flex flex-col">
            GUITAR
            <span className="text-[40px] font-bold text-[#E53771] mt-0">
              LEVEL 1
            </span>
          </p>
          <p className="text-lg px-[18px] bg-[#48273A] w-fit rounded-md uppercase">
            video course
          </p>
          <div className="mt-10">
            <p className="text-lg font-light">
              Become the Guitarist You’ve Always Dreamed Of! Many aspiring
              guitarists give up on their dreams due to a lack of proper
              guidance. But not anymore!
            </p>
            <p className="text-lg font-light mt-6">
              Introducing Guitar Level 1 – A Complete Video Course, designed to
              take you from a beginner to a pro with step-by-step lessons.
              Whether you're picking up the guitar for the first time or looking
              to build a strong foundation, this course provides everything you
              need to succeed. Start your musical journey today and turn your
              dream into reality!
            </p>
          </div>

          <div className="mt-10">
            <p className="text-[30px] font-semibold">FREE!</p>
          </div>
          <div className="mt-3 mb-10">
            <button className="px-10 py-3 font-semibold rounded-[14px] text-xl text-black bg-[#FFBD00]">
              GET STARTED
            </button>
          </div>
        </div>
        <div>
          <img className="" src={eBookPlaceHolder} alt="e-book-placeholder" />
        </div>
      </div>
    </div>
  );
};

export default EBooks;
