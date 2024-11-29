import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import michel from '../../img/michelangelodavid4.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './productSlider.css';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function ProductSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={michel} />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={15}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
        <img src={michel} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={michel} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
