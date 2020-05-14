import React from 'react';
import { uid } from 'react-uid';
import { PageButton, SVG } from '@components';
import { PaginationList, Arrow } from './styles';

export const range = (from, to, step = 1) => {
  let i = from;
  const rng = [];

  do {
    rng.push(i);
    i += step;
  } while (i <= to);
  return rng;
};

export const TOTAL_NUMBERS = 3;
export const TOTAL_BUTTONS = 5;

export const constructPagesArray = (pages, currentPage) => {
  const startPage = Math.max(2, currentPage - 1);
  const endPage = Math.min(pages - 1, currentPage + 1);
  let buttons = range(startPage, endPage);

  if (pages > TOTAL_BUTTONS) {
    const hasPagesOnLeft = startPage > 2;
    const hasPagesOnRight = pages - endPage > 1;
    const spillOffset = TOTAL_NUMBERS - (buttons.length + 1);

    if (hasPagesOnLeft && !hasPagesOnRight) {
      const extraPages = range(startPage - spillOffset, startPage - 1);
      buttons = ['...', ...extraPages, ...buttons];
    } else if (!hasPagesOnLeft && hasPagesOnRight) {
      // const extraPages = range(endPage + 1, endPage + spillOffset);
      const extraPages = range(endPage + 1, endPage + spillOffset);
      buttons = [...buttons, ...extraPages, '...'];
    } else if (startPage === buttons.length) {
      buttons = [2, ...buttons, '...'];
    } else if (pages - startPage === buttons.length + 1) {
      buttons = ['...', ...buttons, pages - 1];
    } else {
      buttons = ['...', ...buttons, '...'];
    }
    return [1, ...buttons, pages];
  }
  return pages !== 0 ? range(1, pages) : [];
};

export const Pagination = ({ pages, currentPage, setCurrentPage, onClick }) => {
  const buttonPages = constructPagesArray(pages, +currentPage);

  const alterCurrentPage = index => {
    let page = currentPage;
    if (buttonPages[index] !== '...') {
      page = +buttonPages[index];
      setCurrentPage(page);
    } else {
      page =
        index === buttonPages.length - 2
          ? +buttonPages[index - 1] + 1
          : +buttonPages[index + 1] - 1;
      setCurrentPage(page);
    }
    onClick(page);
  };

  return (
    <PaginationList>
      <Arrow>
        <SVG onClick={() => {}} name="arrow-icon" />
      </Arrow>
      {buttonPages.map((item, index) => (
        <PageButton
          size="small"
          onClick={() => alterCurrentPage(index)}
          config={item === currentPage ? 'active' : ''}
          text={`${item}`}
          key={uid(item, index)}
        />
      ))}
      <Arrow rotate>
        <SVG onClick={() => {}} name="arrow-icon" />
      </Arrow>
    </PaginationList>
  );
};
