'use client';

import MultiCarousel from 'react-multi-carousel';

import Image from 'next/image';
import 'react-multi-carousel/lib/styles.css';
import styles from './Carousel.module.scss';
import Slide from './Slide/Slide';

const images = [
  {
    src: '/images/image1.jpg',
    alt: '',
    headline: 'Headline 1',
    subheadline: 'Subheadline 1',
  },
  {
    src: '/images/image2.jpg',
    alt: '',
    headline: 'Headline 2',
    subheadline: 'Subheadline 2',
  },
  {
    src: '/images/image3.jpg',
    alt: '',
    headline: 'Headline 3',
    subheadline: 'Subheadline 3',
  },
  {
    src: '/images/image4.jpg',
    alt: '',
    headline: 'Headline 4',
    subheadline: 'Subheadline 4',
  },
];

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
        {images.map((image) => (
          <Slide
            key={image.src}
            headline={image.headline}
            subheadLine={image.subheadline}
          >
            <Image src={image.src} alt={image.alt} fill />
          </Slide>
        ))}
      </MultiCarousel>
    </div>
  );
}
