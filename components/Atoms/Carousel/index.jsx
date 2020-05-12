import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import { useScreenWidth } from '@hooks';

export const defaultSettings = {
  cellSpacing: 10,
  slidesToScroll: 'auto',
  slideWidth: '100px',
  wrapAround: false,
  withoutControls: true,
};

export const CustomCarousel = ({
  children,
  carouselNumberOfItems = 0,
  settings = defaultSettings,
}) => {
  const { screenWidth } = useScreenWidth();
  const [carouselDragging, setCarouselDragging] = useState(false);

  useEffect(() => {
    const widthOfCarouselItems = settings.slideWidth.match(/\d+/)[0];
    console.log(widthOfCarouselItems * carouselNumberOfItems, screenWidth);
    setCarouselDragging(
      widthOfCarouselItems * carouselNumberOfItems > screenWidth
    );
  }, [screenWidth]);
  return (
    <Carousel dragging={carouselDragging} {...settings}>
      {children}
    </Carousel>
  );
};
