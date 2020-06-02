import styled, { css, keyframes } from 'styled-components';

const bounce = keyframes`
  from {
    margin-top: -5px;
  }
  to {
    margin-top: 0px;
  }
`;

export const ProductsCarouselRoot = styled.div`
  height: 310px;
  width: 58%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 25px;

  .slider-control-bottomcenter {
    display: none;
  }

  .exec-icon,
  .express-icon,
  .tech-icon,
  .rpo-icon {
    .product-icon {
      height: 115px;
      max-width: unset;
    }
  }

  .product-description {
    padding-top: 70px;

    &:before {
      top: 20px;
    }
  }
`;

export const ControlLeft = styled.button`
  transition: 0.3s ease-in-out;
  transition-property: opacity, top;

  background-color: transparent;
  border: 0 none;
  cursor: pointer;

  width: 16px;
  height: 35px;

  ${({ show }) =>
    show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          top: calc(50% - 2px);
          pointer-events: none;
        `}

  svg {
    width: 16px;
    height: 100%;

    path {
      stroke-width: 2px;
      stroke: ${({ theme }) => theme.colors.white};
    }
  }

  &:hover {
    animation: ${bounce} 0.3s infinite alternate;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.medium}) {
    height: 65px;
    top: calc(50% - 32px);
  }
`;

export const ControlRight = styled(ControlLeft)`
  transform: rotate(180deg);
`;
