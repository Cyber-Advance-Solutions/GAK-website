"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function FacilitiesSwiper() {
  const images = [
    "/facilities/f1.jpg",
    "/facilities/f2.jpg",
    "/facilities/f3.jpg",
    "/facilities/f4.jpg",
    "/facilities/f5.jpg",
    "/facilities/f6.jpg",
    "/facilities/f7.jpg",
    "/facilities/f8.jpg",
    "/facilities/f9.jpg",
    "/facilities/f10.jpg",
    "/facilities/f11.jpg",
    "/facilities/f12.jpg",
  ];

  return (
    <div className="ga facilities-swiper" style={{ background: 'none' }}>
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
      <span className="cap">Facilities</span>
      
      <style dangerouslySetInnerHTML={{__html: `
        .facilities-swiper .swiper-pagination {
          bottom: 14px !important;
          right: 16px !important;
          left: auto !important;
          width: auto !important;
          z-index: 5 !important;
        }
        .facilities-swiper .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.4;
          width: 6px;
          height: 6px;
          margin: 0 3px !important;
        }
        .facilities-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .facilities-swiper .swiper-slide {
          height: 100%;
        }
      `}} />
    </div>
  );
}
