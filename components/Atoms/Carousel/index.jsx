import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import { useScreenWidth } from '@hooks';
import { breakpoints } from '../../Organisms/Theme/breakpoints';

export const defaultSettings = {
  cellSpacing: 0,
  slidesToScroll: 'auto',
  slideWidth: '72.5px',
  slideWidthMedium: '100px',
  wrapAround: false,
  withoutControls: true,
};

const mediumResolution = breakpoints.medium.match(/\d+/)[0];

export const CustomCarousel = ({
  children,
  carouselNumberOfItems = 0,
  settings = defaultSettings,
}) => {
  const { screenWidth } = useScreenWidth();
  const [carouselSettings, setCarouselSettings] = useState({
    dragging: false,
    settings,
  });
  // const [carouselDragging, setCarouselDragging] = useState(false);

  useEffect(() => {
    let widthOfCarouselItems = settings.slideWidth.match(/\d+/)[0];
    if (screenWidth > mediumResolution) {
      widthOfCarouselItems = settings.slideWidthMedium;
    }
    setCarouselSettings({
      dragging: widthOfCarouselItems * carouselNumberOfItems > screenWidth,
      settings: {
        ...carouselSettings.settings,
        slideWidth: `${widthOfCarouselItems}px`,
      },
    });
  }, [screenWidth]);

  return (
    <Carousel
      dragging={carouselSettings.dragging}
      {...carouselSettings.settings}
    >
      {children}
    </Carousel>
  );
};
