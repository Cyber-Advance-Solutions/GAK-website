"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ClassroomsSwiper() {
  const images = ["/hero1.jpg", "/hero1.jpg", "/hero1.jpg"];

  return (
    <div className="ga classrooms-swiper" style={{ background: 'none' }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
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
      <span className="cap">Classrooms</span>
      
      <style dangerouslySetInnerHTML={{__html: `
        .classrooms-swiper .swiper-pagination {
          bottom: 14px !important;
          right: 16px !important;
          left: auto !important;
          width: auto !important;
          z-index: 5 !important;
        }
        .classrooms-swiper .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.4;
          width: 6px;
          height: 6px;
          margin: 0 3px !important;
        }
        .classrooms-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .classrooms-swiper .swiper-slide {
          height: 100%;
        }
      `}} />
    </div>
  );
}
