"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function CampusSwiper() {
  const images = [
    "/campuses/camp1.png",
    "/campuses/camp2.png",
    "/campuses/camp3.png",
    "/campuses/camp4.png",
    "/campuses/camp5.png",
    "/campuses/camp6.png",
    "/campuses/camp7.png",
    "/campuses/camp8.png",
    "/campuses/camp9.png",
    "/campuses/camp10.png",
    "/campuses/camp11.png",
    "/campuses/camp12.png",
    "/campuses/camp13.png",
  ];

  return (
    <div className="ga big campus-swiper" style={{ background: 'none' }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full absolute inset-0 z-0"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div 
              className="w-full h-full" 
              style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <span className="cap">Campus &amp; grounds</span>
      
      <style dangerouslySetInnerHTML={{__html: `
        .campus-swiper .swiper-pagination {
          bottom: 14px !important;
          right: 16px !important;
          left: auto !important;
          width: auto !important;
          z-index: 5 !important;
        }
        .campus-swiper .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.4;
          width: 6px;
          height: 6px;
          margin: 0 3px !important;
        }
        .campus-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .campus-swiper .swiper-slide {
          height: 100%;
        }
      `}} />
    </div>
  );
}
