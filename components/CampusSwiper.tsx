"use client";

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export interface CampusSwiperProps {
  /** Image URLs (already passed through assetUrl) */
  images?: string[];
  /** Per-photo captions, same order as images ("" = no caption for that photo) */
  captions?: string[];
  /** Caption shown on the tile (campus-life section title) */
  caption?: string;
  /** First tile of the gallery is the large one */
  big?: boolean;
  /** Unique class used to scope the pagination styles (e.g. "campus-swiper", "classrooms-swiper") */
  variant?: string;
  delay?: number;
}

/** One gallery tile of the homepage "Campus Life" block (one row of GET /campus-life). */
export default function CampusSwiper({
  images = [],
  captions = [],
  caption = "",
  big = true,
  variant = "campus-swiper",
  delay = 3500,
}: CampusSwiperProps) {
  const [active, setActive] = useState(0);
  if (images.length === 0) return null;

  const photoCaption = (captions[active] || "").trim();

  return (
    <div className={`ga${big ? ' big' : ''} ${variant}`} style={{ background: 'none' }}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={images.length > 1}
        onSlideChange={(s) => setActive(s.realIndex)}
        className="w-full h-full absolute inset-0 z-0"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              role="img"
              aria-label={(captions[index] || caption || "Campus photo").trim()}
              className="w-full h-full"
              style={{ backgroundImage: `url("${src}")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {(caption || photoCaption) && (
        <span className="cap">
          {caption}
          {photoCaption && <span className="cap-photo" aria-live="polite">{photoCaption}</span>}
        </span>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .${variant} .swiper-pagination {
          bottom: 14px !important;
          right: 16px !important;
          left: auto !important;
          width: auto !important;
          z-index: 5 !important;
        }
        .${variant} .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.4;
          width: 6px;
          height: 6px;
          margin: 0 3px !important;
        }
        .${variant} .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .${variant} .swiper-slide {
          height: 100%;
        }
      `}} />
    </div>
  );
}
