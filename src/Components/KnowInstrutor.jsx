import React from "react";
import booksIcon from "../assets/icons/books.svg";
import eBookPlaceHolder from "../assets/images/ebook-placeholder.svg";
import sushantYoutube from "../assets/images/sushant_youtube.png";
import sushantSign from "../assets/icons/sushant-sign.svg";
import heroSectionImage from "../assets/icons/hero-section-image.svg";

const KnowYourInstructor = () => {
  return (
    <div className="mt-10">
      {/* foe e-books */}
      <p className="flex gap-2 text-xl">
        <img src={booksIcon} alt="" />
        KNOW YOUR INSTRUCTOR
      </p>

      <div className="mt-4 border border-[#FF38AF] rounded-[20px] w-full flex justify-between overflow-hidden">
        <div className="mt-[30px] pl-11 w-1/2">
          <p className="text-[32px] font-semibold flex flex-col uppercase">
            sushant patil
          </p>

          <div className="mt-6">
            <p className="text-base font-light">
              Sushant Patil is Pune based Guitarist, Singer, Songwriter and
              Music Producer. he is a lead guitarist & back vocalist of the band
              FIRDOUS INDIA. He has influences Dream theatre, Steven Willson
              etc. Apart from being versatile guitarist he plays Violin, Drums,
              Keyboard, Mandolin, Ukulele. He is also a best guitar instructor
              and his pupils are in some well renowned band of the city. He is
              currently working with music teaching company TORRINS as a music
              instructor. He also has got Diploma in Guitar from One of the best
              institutions and has a work experience with renowned Singers like
              Shaasha Tirupti, Swapnil Bandodkar, Ketaki Mategaonkar. He has
              played guitar for Riteish Deshmukh starrer Marathi movie Mauli as
              well as several Marathi albums Asa Parijat, Man Majhe and Marathi
              serial Prem He(Zee Yuva).
            </p>
          </div>
          <div className="mt-10">
            <img src={sushantSign} alt="sushant-sign" />
          </div>
        </div>
        <div style={{ textAlign: "-webkit-right" }}>
          <img
            className="w-[80%]"
            src={heroSectionImage}
            alt="e-book-placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default KnowYourInstructor;
