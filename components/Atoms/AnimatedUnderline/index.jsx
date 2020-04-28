import React from 'react';
import {
  AnimatedUnderlineRoot,
  AnimatedUnderlineLine,
  AnimatedUnderlineContent,
} from './styles';

export default function AnimatedUnderline({ children }) {
  return (
    <AnimatedUnderlineRoot>
      <>
        <AnimatedUnderlineContent>{children}</AnimatedUnderlineContent>
        <AnimatedUnderlineLine
          data-aos="animate-width"
          data-aos-duration="3000"
          data-aos-delay="1000"
        />
      </>
    </AnimatedUnderlineRoot>
  );
}
