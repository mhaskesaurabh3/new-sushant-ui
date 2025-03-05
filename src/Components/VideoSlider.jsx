import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import videoIcon from "../assets/icons/video-icon.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import YouTube from "react-youtube";

const VideoSlider = () => {
  const [videoId, setVideoId] = useState(null);

  const videos = [
    {
      title: "Neele Neele Ambar Par | Full Guitar Lesson | Best Guitar TABS",
      youtubeId: "3sgVMtYVjwY",
    },
    { title: "Guitar Lesson LVL 1", youtubeId: "JDXtLjXwEmw" },
    { title: "What is Guitar Shredding?", youtubeId: "jV_34pWCQbo" },
    { title: "Shred Guitarists", youtubeId: "_M1M-ofCYvE" },
    { title: "Guitar Lesson LVL 1", youtubeId: "DxvihtTCQcQ" },
    { title: "What is Guitar Shredding?", youtubeId: "Iofm9OB77rQ" },
  ];

  // Close modal when ESC key is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setVideoId(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <p className="flex gap-2 mt-10 uppercase text-xl">
        <img src={videoIcon} alt="" />
        watch free tutorials
      </p>
      <div className="p-[60px] border border-[#FD8F25] mt-4 rounded-2xl">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {videos.map((video, index) => (
            <SwiperSlide
              key={index}
              onClick={() => setVideoId(video.youtubeId)}
            >
              <div className="video-card">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="video-thumbnail border border-white rounded-2xl"
                />
                <div className="play-icon">▶</div> {/* YouTube Play Icon */}
                <p className="text-base font-medium text-white mt-6">
                  {video.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Video Modal */}
      {/* Video Modal with Dark Overlay */}
      {videoId && (
        <div className="modal-overlay" onClick={() => setVideoId(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setVideoId(null)}>
              ✖
            </button>
            <YouTube
              videoId={videoId}
              opts={{
                width: "100%", // Make it responsive
                height: "450", // Increased height
                playerVars: {
                  // autoplay: 1,
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSlider;
