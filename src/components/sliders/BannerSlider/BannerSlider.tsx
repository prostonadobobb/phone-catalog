import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/splide.min.css';
import baner_1 from './banerSliderImg/Banner.jpg';
import baner_2 from './banerSliderImg/banner-1.png';
import baner_3 from './banerSliderImg/banner-2.png';
import './BannerSlider.scss';

export const BannerSlider: React.FC = () => {
  return (
    <section className="banner">
      <Splide
        id="banner__slider"
        aria-label="Baner-first"
        options={{
          autoplay: true,
          type: 'loop',
          interval: 5000,
        }}
      >
        <SplideSlide>
          <img src={baner_1} alt="slide1" />
        </SplideSlide>
        <SplideSlide>
          <img src={baner_2} alt="slide2" />
        </SplideSlide>
        <SplideSlide>
          <img src={baner_3} alt="slide3" />
        </SplideSlide>
      </Splide>
    </section>
  );
};
