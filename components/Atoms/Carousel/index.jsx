import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import { useScreenWidth } from '@hooks';
import { intBreakpoints } from '../../Organisms/Theme/breakpoints';

export const defaultSettings = {
  cellSpacing: 0,
  slidesToScroll: 'auto',
  slideWidth: '72.5px',
  slideWidthMedium: '110px',
  wrapAround: false,
  withoutControls: true,
};

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

  useEffect(() => {
    let widthOfCarouselItems = settings.slideWidth.match(/\d+/)[0];
    if (screenWidth > intBreakpoints.medium) {
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
