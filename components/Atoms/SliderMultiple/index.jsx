import React, { useState, useEffect } from 'react';
import { SVG } from '@components';
import { range } from '@utils';
import { Root, ControlLeft, ControlRight } from './styles';

export default function SliderMultiple({ children, itemsShowing = 3 }) {
  const [firstIndexActive, setFirstIndexActive] = useState(0);
  const [items, setItems] = useState(null);
  const totalItemsInSlider = children.length;

  const onChangeItems = arrayOfIndexes => {
    setItems(arrayOfIndexes.map(item => children[item]));
  };

  const onChangeSlide = value => {
    const isSlideIncrementing = value > 0;

    let nextStartIndex = isSlideIncrementing
      ? firstIndexActive + itemsShowing
      : firstIndexActive - itemsShowing;

    if (nextStartIndex >= totalItemsInSlider || nextStartIndex < 0) {
      return 0;
    }

    setFirstIndexActive(nextStartIndex);
    onChangeItems(range(nextStartIndex, nextStartIndex + itemsShowing - 1));
  };

  useEffect(() => {
    onChangeItems(range(firstIndexActive, firstIndexActive + itemsShowing - 1));
  }, [itemsShowing]);

  return (
    <Root>
      <ControlLeft show>
        <SVG onClick={() => onChangeSlide(-itemsShowing)} name="arrow-icon" />
      </ControlLeft>
      {items}
      <ControlRight show={firstIndexActive + itemsShowing < totalItemsInSlider}>
        <SVG onClick={() => onChangeSlide(itemsShowing)} name="arrow-icon" />
      </ControlRight>
    </Root>
  );
}
