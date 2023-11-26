'use client';

import MultiCarousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import styles from './Carousel.module.scss';

type CarouselProps = {};

export default function Carousel({}: CarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 320 },
      items: 1,
    },
  };

  return (
    <div className={styles['carousel-container']}>
      <MultiCarousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </MultiCarousel>
    </div>
  );
}
