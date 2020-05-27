import React, { useState, useEffect } from 'react';
import { SVG } from '@components';
import { circularRange } from '@utils';
import { Root, ControlLeft, ControlRight } from './styles';

export default function SliderMultiple({
  children,
  itemsShowing = 3,
  specialLgMargin,
  infinite = true,
}) {
  const [items, setItems] = useState({
    children: null,
    indexes: [0],
  });
  const totalItemsInSlider = children.length;

  const onChangeItems = arrayOfIndexes => {
    setItems({
      children: arrayOfIndexes.map(item => children[item]),
      indexes: arrayOfIndexes,
    });
  };

  const onChangeSlide = value => {
    const isSlideIncrementing = value > 0;
    const lastCurrentIndex = isSlideIncrementing ? items.indexes.length - 1 : 0;
    const factorToGetNextItem = isSlideIncrementing ? 1 : -1;

    const range = circularRange({
      from: items.indexes[lastCurrentIndex] + factorToGetNextItem,
      addNElements: itemsShowing,
      increment: isSlideIncrementing,
      length: totalItemsInSlider,
    });

    onChangeItems(range);
  };

  useEffect(() => {
    const range = circularRange({
      from: items.indexes[0],
      addNElements: itemsShowing,
      increment: true,
      length: totalItemsInSlider,
    });
    onChangeItems(range);
  }, [itemsShowing]);

  return (
    <Root specialLgMargin={specialLgMargin}>
      <ControlLeft show={infinite || items.indexes[0] !== 0}>
        <SVG onClick={() => onChangeSlide(-itemsShowing)} name="arrow-icon" />
      </ControlLeft>
      {items.children}
      <ControlRight
        show={infinite || items.indexes[0] + itemsShowing < totalItemsInSlider}
      >
        <SVG onClick={() => onChangeSlide(itemsShowing)} name="arrow-icon" />
      </ControlRight>
    </Root>
  );
}
